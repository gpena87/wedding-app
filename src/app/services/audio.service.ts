import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AudioService {
  readonly isMuted = signal(true);
  private audio?: HTMLAudioElement;

  register(audio: HTMLAudioElement): void {
    this.audio = audio;
  }

  start(): void {
    const audio = this.audio;
    if (!audio) {
      return;
    }

    audio.volume = 0.3;
    audio.muted = false;
    audio.play().then(() => {
      this.isMuted.set(false);
    }).catch(() => {
      audio.muted = true;
      this.isMuted.set(true);
    });
  }
}
