import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
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

  private readonly router = inject(Router);
  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: '' },
  );
  readonly showAudioToggle = computed(() => this.currentUrl() !== '' && this.currentUrl().split(/[?#]/)[0] !== '/');

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
