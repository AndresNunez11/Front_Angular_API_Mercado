import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config'; // 👈 cliente, no server
import 'zone.js'; // 👈 esto es OBLIGATORIO para aplicaciones con zone


bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));
