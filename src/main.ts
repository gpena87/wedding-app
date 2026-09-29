import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const hideStartupLoader = () => {
  const loader = document.getElementById('app-start-loader');
  if (!loader) {
    return;
  }

  loader.classList.add('opacity-0', 'pointer-events-none');
  loader.addEventListener('transitionend', () => loader.remove(), { once: true });
};

const waitForCompleteLoad = () => {
  return new Promise<void>((resolve) => {
    if (document.readyState === 'complete') {
      resolve();
      return;
    }

    window.addEventListener('load', () => {
      resolve();
    }, { once: true });
  });
};

bootstrapApplication(App, appConfig)
  .then(async () => {
    // Esperar a que el DOM y recursos estén completamente listos
    await waitForCompleteLoad();
    hideStartupLoader();
  })
  .catch((err) => console.error(err));
