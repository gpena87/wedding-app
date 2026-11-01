import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WelcomePage implements OnDestroy {
  readonly isOpening = signal(false);

  constructor(
    private readonly router: Router,
    private readonly audioService: AudioService,
  ) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }

  enter(): void {
    if (this.isOpening()) {
      return;
    }

    this.isOpening.set(true);
    this.audioService.start();
    setTimeout(() => this.router.navigate(['/invitacion']), 900);
  }
}
