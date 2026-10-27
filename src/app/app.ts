import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html'
})
export class App {
  @ViewChild('bgAudio', { static: false }) bgAudio!: ElementRef<HTMLAudioElement>;

  isMuted = signal(true);
  private audioStarted = false;
  private audioStartPending = false;

  @HostListener('document:pointerdown', ['$event'])
  startAudioOnPointerDown(event: Event): void {
    this.startAudioOnScreenClick(event);
  }

  @HostListener('document:touchstart', ['$event'])
  startAudioOnTouch(event: Event): void {
    this.startAudioOnScreenClick(event);
  }

  @HostListener('window:scroll', ['$event'])
  startAudioOnScroll(event: Event): void {
    this.startAudioOnScreenClick(event);
  }

  @HostListener('document:click', ['$event'])
  startAudioOnScreenClick(event: Event): void {
    const target = event.target;
    if (
      this.audioStarted ||
      this.audioStartPending ||
      (target instanceof Element && target.closest('[data-audio-toggle="true"]'))
    ) {
      return;
    }

    const audio = this.bgAudio?.nativeElement;
    if (!audio) {
      return;
    }

    this.audioStartPending = true;
    this.playAudio(audio);
  }

  toggleAudio(): void {
    const audio = this.bgAudio?.nativeElement;
    if (!audio) {
      return;
    }

    if (this.isMuted()) {
      this.playAudio(audio);
    } else {
      audio.muted = true;
      this.isMuted.set(true);
    }
  }

  private playAudio(audio: HTMLAudioElement): void {
    audio.volume = 0.3;
    audio.muted = false;
    audio.play().then(() => {
      this.audioStarted = true;
      this.audioStartPending = false;
      this.isMuted.set(false);
    }).catch((error) => {
      this.audioStartPending = false;
      audio.muted = true;
      this.isMuted.set(true);
      console.error('Audio play failed:', error);
    });
  }
}
