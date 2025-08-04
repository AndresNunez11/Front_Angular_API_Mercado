import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app.routes';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, Navbar, Footer, CommonModule],
})
export class App {
  protected readonly title = signal('mercadotico-libre');
}

// Ahora sí la función para bootstrapar la app (cliente)
import { bootstrapApplication as ngBootstrapApplication } from '@angular/platform-browser';

export function bootstrapApplication() {
  return ngBootstrapApplication(App, {
    providers: [
      provideRouter(routes),
      provideHttpClient(withInterceptorsFromDi())
    ]
  });
}

