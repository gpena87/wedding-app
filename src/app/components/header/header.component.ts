import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly isHeaderHidden = signal(false);

  private lastScrollY = 0;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const currentScrollY = window.scrollY || 0;

    if (currentScrollY < 24) {
      this.isHeaderHidden.set(false);
      this.lastScrollY = currentScrollY;
      return;
    }

    const scrollingDown = currentScrollY > this.lastScrollY;
    this.isHeaderHidden.set(scrollingDown);
    this.lastScrollY = currentScrollY;
  }
}
