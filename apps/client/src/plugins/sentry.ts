import * as Sentry from '@sentry/vue';
import { BrowserTracing } from '@sentry/tracing';
import { App } from 'vue';
import { Router } from 'vue-router';

export function initSentry(app: App<Element>, router: Router) {
  Sentry.init({
    app,
    dsn: 'https://5e418545f6154615961890ef80bdd622@o1185996.ingest.sentry.io/6305973',
    environment: import.meta.env.MODE,
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
      }),
    ],
    tracesSampleRate: 1.0,
  });
}
