import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'startup-market-admin';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fr']); // Définir les langues supportées
    this.translate.setDefaultLang('en'); // Définir la langue par défaut

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|fr/) ? browserLang : 'en');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
