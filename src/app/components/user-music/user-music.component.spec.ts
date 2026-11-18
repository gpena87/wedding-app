import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { UserMusicComponent } from './user-music.component';

describe('UserMusicComponent', () => {
  it('renders separate links to open the playlist and join as a collaborator', async () => {
    await TestBed.configureTestingModule({
      imports: [UserMusicComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(UserMusicComponent);
    fixture.detectChanges();
    const links = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('a'));
    const playlistLink = links.find((link) => link.textContent?.includes('ABRIR LISTA'));
    const inviteLink = links.find((link) => link.textContent?.includes('UNIRME COMO COLABORADOR'));

    expect(playlistLink?.href).toBe(environment.spotifyCollaborativePlaylistUrl);
    expect(inviteLink?.href).toBe(environment.spotifyPlaylistInviteUrl);
    expect(inviteLink?.target).toBe('_blank');
    expect(inviteLink?.rel).toBe('noopener noreferrer');
  });
});
