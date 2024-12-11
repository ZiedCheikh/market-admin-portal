import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [RouterModule],
  templateUrl: './opening.component.html',
  styleUrl: './opening.component.scss',
})
export class OpeningComponent {
  title = 'Startup Market';

  constructor(private httpClient: HttpClient) {}

  resource() {
    this.httpClient
      .get('http://myhost:8082/market-order/market/api/v1/order/status/ordered')
      .subscribe({
        next: (response) => console.info(response),
        complete: () => console.info('complete'),
      });
  }

  login() {
    window.location.href = '/oauth2/authorization/spring';
  }

  onKeydownLogin(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.login();
      event.preventDefault(); // Évite le scrolling pour la barre d'espace
    }
  }

  onKeydownResource(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.resource();
      event.preventDefault(); // Évite le scrolling pour la barre d'espace
    }
  }
  logout() {
    window.location.href = '/logout';
  }
}
