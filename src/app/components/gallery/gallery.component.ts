import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild, signal } from '@angular/core';

interface GalleryImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scroller') scroller!: ElementRef<HTMLElement>;

  readonly images: GalleryImage[] = [
    { src: 'assets/gallery/gallery1.webp', alt: 'Foto de los novios 1' },
    { src: 'assets/gallery/gallery2.webp', alt: 'Foto de los novios 2' },
    { src: 'assets/gallery/gallery3.webp', alt: 'Foto de los novios 3' },
    { src: 'assets/gallery/gallery4.webp', alt: 'Foto de los novios 4' },
    { src: 'assets/gallery/gallery5.webp', alt: 'Foto de los novios 5' },
  ];

  readonly loaded = signal<Record<number, boolean>>({});
  readonly current = signal(0);
  readonly activeIndex = signal<number | null>(null);

  private timer?: ReturnType<typeof setInterval>;

  ngAfterViewInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  markLoaded(index: number): void {
    this.loaded.update((state) => ({ ...state, [index]: true }));
  }

  onScroll(): void {
    const el = this.scroller.nativeElement;
    this.current.set(Math.round(el.scrollLeft / el.clientWidth));
  }

  goTo(index: number): void {
    const el = this.scroller.nativeElement;
    const target = (index + this.images.length) % this.images.length;
    el.scrollTo({ left: target * el.clientWidth, behavior: 'smooth' });
  }

  nextSlide(): void {
    this.goTo(this.current() + 1);
  }

  prevSlide(): void {
    this.goTo(this.current() - 1);
  }

  startAutoplay(): void {
    this.stopAutoplay();
    this.timer = setInterval(() => {
      if (this.activeIndex() === null) {
        this.nextSlide();
      }
    }, 4000);
  }

  stopAutoplay(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  open(index: number): void {
    this.activeIndex.set(index);
  }

  close(): void {
    this.activeIndex.set(null);
  }

  next(): void {
    const index = this.activeIndex();
    if (index !== null) {
      this.activeIndex.set((index + 1) % this.images.length);
    }
  }

  prev(): void {
    const index = this.activeIndex();
    if (index !== null) {
      this.activeIndex.set((index - 1 + this.images.length) % this.images.length);
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (this.activeIndex() === null) {
      return;
    }
    if (event.key === 'Escape') {
      this.close();
    } else if (event.key === 'ArrowRight') {
      this.next();
    } else if (event.key === 'ArrowLeft') {
      this.prev();
    }
  }
}
