import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-user-music',
  standalone: true,
  imports: [],
  templateUrl: './user-music.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMusicComponent {
  title = signal('Ayúdanos con la música');
  subtitle = signal('Agrega las canciones que no pueden faltar en la fiesta a nuestra lista de reproducción colaborativa. La compartiremos con el DJ.');

  private readonly sanitizer = inject(DomSanitizer);

  protected readonly spotifyAutoplayEmbedUrl: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(environment.spotifyPlaylistEmbedUrl);
  protected readonly spotifyCollaborativePlaylistUrl = environment.spotifyCollaborativePlaylistUrl;
}