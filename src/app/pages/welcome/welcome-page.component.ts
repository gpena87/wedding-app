import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WelcomePage {
  constructor(
    private readonly router: Router,
    private readonly audioService: AudioService,
  ) {}

  enter(): void {
    this.audioService.start();
    this.router.navigate(['/invitacion']);
  }
}
