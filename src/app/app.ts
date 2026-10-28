import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AudioService } from './services/audio.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html'
})
export class App implements AfterViewInit {
  @ViewChild('bgAudio', { static: false }) bgAudio!: ElementRef<HTMLAudioElement>;

  private readonly audioService = inject(AudioService);
  readonly isMuted = this.audioService.isMuted;

  ngAfterViewInit(): void {
    this.audioService.register(this.bgAudio.nativeElement);
  }

  toggleAudio(): void {
    const audio = this.bgAudio?.nativeElement;
    if (!audio) {
      return;
    }

    if (audio.muted || audio.paused) {
      this.audioService.start();
      return;
    }

    audio.muted = true;
    this.isMuted.set(true);
  }
}
