import { renderApplication } from '@angular/platform-server';
import { App } from './app/app';
import { appConfig } from './app/app.config.server';
import { bootstrapApplication } from '@angular/platform-browser';

export function render(url: string, document: string): Promise<string> {
  return renderApplication(() => bootstrapApplication(App, appConfig), {
    document,
    url
  });
}