import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html'
})
export class App implements AfterViewInit {
  @ViewChild('bgAudio', { static: false }) bgAudio!: ElementRef<HTMLAudioElement>;

  isMuted = signal(true);
  private audioInitialized = false;

  ngAfterViewInit(): void {
    this.tryStartAudio();
    this.setupAudioOnInteraction();
  }

  private tryStartAudio(): void {
    const audio = this.bgAudio?.nativeElement;
    if (!audio) {
      return;
    }

    audio.volume = 0.3;
    audio.muted = false;
    audio.play().then(() => {
      this.audioInitialized = true;
      this.isMuted.set(false);
    }).catch(() => {
      audio.muted = true;
      this.isMuted.set(true);
    });
  }

  private setupAudioOnInteraction(): void {
    const startAudio = (event: Event) => {
      const target = event.target;
      if (target instanceof Element && target.closest('[data-audio-toggle="true"]')) {
        return;
      }

      if (!this.audioInitialized) {
        const audio = this.bgAudio?.nativeElement;
        if (audio) {
          audio.volume = 0.3;
          audio.muted = false;

          audio.play().then(() => {
            this.audioInitialized = true;
            this.isMuted.set(false);

            document.removeEventListener('click', startAudio as EventListener);
            document.removeEventListener('touchstart', startAudio as EventListener);
            document.removeEventListener('keydown', startAudio as EventListener);
            window.removeEventListener('scroll', startAudio as EventListener);
          }).catch((error) => {
            console.log('Audio play failed:', error);
          });
        }
      }
    };

    document.addEventListener('click', startAudio as EventListener);
    document.addEventListener('touchstart', startAudio as EventListener);
    document.addEventListener('keydown', startAudio as EventListener);
    window.addEventListener('scroll', startAudio as EventListener, { passive: true });
  }

  toggleAudio(): void {
    const audio = this.bgAudio?.nativeElement;
    if (audio) {
      if (audio.muted) {
        audio.muted = false;
        audio.volume = 0.3;
        audio.play().then(() => {
          this.isMuted.set(false);
        }).catch((error) => {
          audio.muted = true;
          this.isMuted.set(true);
          console.log('Audio play failed:', error);
        });
        return;
      }

      audio.muted = true;
      this.isMuted.set(true);
    }
  }
}
