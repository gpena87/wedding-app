import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { UserMusicComponent } from './user-music.component';

describe('UserMusicComponent', () => {
  it('opens the collaborative playlist invitation', async () => {
    await TestBed.configureTestingModule({
      imports: [UserMusicComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(UserMusicComponent);
    fixture.detectChanges();
    const playlistLink = (fixture.nativeElement as HTMLElement).querySelector('a');

    expect(playlistLink?.href).toBe(environment.spotifyCollaborativePlaylistUrl);
    expect(new URL(playlistLink!.href).searchParams.get('pt')).toBeTruthy();
    expect(playlistLink?.target).toBe('_blank');
    expect(playlistLink?.rel).toBe('noopener noreferrer');
  });
});
