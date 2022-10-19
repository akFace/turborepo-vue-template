import * as Sentry from '@sentry/vue';
import { BrowserTracing } from '@sentry/tracing';
import { App } from 'vue';
import { Router } from 'vue-router';

export function initSentry(app: App<Element>, router: Router) {
  Sentry.init({
    app,
    dsn: 'https://d65d2480168f434287c0b094e6d1c34c@o1185996.ingest.sentry.io/6349321',
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
      }),
    ],
    tracesSampleRate: 1.0,
  });
}
