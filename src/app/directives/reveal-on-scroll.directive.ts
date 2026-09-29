import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private observer: IntersectionObserver | null = null;
  private static scrollTimeout: ReturnType<typeof setTimeout> | null = null;
  private static scrollDirection: 'up' | 'down' = 'down';
  private static lastScrollTop = 0;

  constructor() {
    // Inicializar listener global de scroll si no está ya configurado
    if (!document.body.dataset['scrollListenerActive']) {
      document.body.dataset['scrollListenerActive'] = 'true';
      window.addEventListener('scroll', RevealOnScrollDirective.handleGlobalScroll, { passive: true });
    }
  }

  private static handleGlobalScroll = (): void => {
    const scrollTop = window.scrollY;
    RevealOnScrollDirective.scrollDirection = scrollTop > RevealOnScrollDirective.lastScrollTop ? 'down' : 'up';
    RevealOnScrollDirective.lastScrollTop = scrollTop;
    const startSection = document.querySelector<HTMLElement>('#inicio');
    const hasPassedStart = startSection
      ? startSection.getBoundingClientRect().bottom <= 0
      : scrollTop > 24;

    document.body.classList.add('is-scrolling');
    document.body.classList.toggle('is-scrolled', hasPassedStart);
    const pageOverlay = document.querySelector<HTMLElement>('.page-scroll-overlay');
    pageOverlay?.classList.toggle('opacity-100', hasPassedStart);
    pageOverlay?.classList.toggle('opacity-0', !hasPassedStart);

    if (RevealOnScrollDirective.scrollTimeout) {
      clearTimeout(RevealOnScrollDirective.scrollTimeout);
    }

    RevealOnScrollDirective.scrollTimeout = setTimeout(() => {
      document.body.classList.remove('is-scrolling');
      RevealOnScrollDirective.scrollTimeout = null;
    }, 180);
  };

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;

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
  }

  private initializeHiddenState(element: HTMLElement): void {
    const direction = RevealOnScrollDirective.scrollDirection;
    if (direction === 'down') {
      this.renderer.addClass(element, 'translate-y-6');
      this.renderer.removeClass(element, '-translate-y-6');
    } else {
      this.renderer.addClass(element, '-translate-y-6');
      this.renderer.removeClass(element, 'translate-y-6');
    }
  }

  private revealElement(element: HTMLElement): void {
    this.renderer.removeClass(element, 'opacity-0');
    this.renderer.removeClass(element, 'translate-y-6');
    this.renderer.removeClass(element, '-translate-y-6');
    this.renderer.addClass(element, 'opacity-100');
    this.renderer.addClass(element, 'translate-y-0');
  }

}
