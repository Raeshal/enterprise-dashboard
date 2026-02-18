import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(), // 2. Register HttpClient here
  ]
})
  .catch((err) => console.error(err));
