import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private observer: IntersectionObserver | null = null;
  private startObserver: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    this.initializeStartOverlay(element);

    this.renderer.addClass(element, 'transition-all');
    this.renderer.addClass(element, 'duration-1000');
    this.renderer.addClass(element, 'ease-[cubic-bezier(0.22,1,0.36,1)]');
    this.renderer.addClass(element, 'motion-reduce:transition-none');
    this.renderer.addClass(element, 'opacity-0');
    this.initializeHiddenState(element);

    if (typeof IntersectionObserver === 'undefined') {
      this.revealElement(element);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.revealElement(entry.target as HTMLElement);
            this.observer?.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
    this.startObserver?.disconnect();
    this.startObserver = null;
  }

  private initializeStartOverlay(element: HTMLElement): void {
    const startSection = element.querySelector<HTMLElement>('#inicio');
    const pageOverlay = document.querySelector<HTMLElement>('.page-scroll-overlay');

    if (!startSection || !pageOverlay || typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.startObserver = new IntersectionObserver(
      ([entry]) => {
        const hasPassedStart = !entry.isIntersecting && entry.boundingClientRect.bottom <= 0;
        pageOverlay.classList.toggle('opacity-100', hasPassedStart);
        pageOverlay.classList.toggle('opacity-0', !hasPassedStart);
      },
      { threshold: 0 },
    );

    this.startObserver.observe(startSection);
  }

  private initializeHiddenState(element: HTMLElement): void {
    this.renderer.addClass(element, 'translate-y-6');
    this.renderer.removeClass(element, '-translate-y-6');
  }

  private revealElement(element: HTMLElement): void {
    this.renderer.removeClass(element, 'opacity-0');
    this.renderer.removeClass(element, 'translate-y-6');
    this.renderer.removeClass(element, '-translate-y-6');
    this.renderer.addClass(element, 'opacity-100');
    this.renderer.addClass(element, 'translate-y-0');
  }

}
