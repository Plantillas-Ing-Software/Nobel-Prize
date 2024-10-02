import { Component } from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-footer-content',
  standalone: true,
  imports: [TranslateModule,
    MatIcon],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.css'
})
export class FooterContentComponent {
  constructor(private translate: TranslateService)
  {
    // Initialize languages
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    // Get browser language safely
    const browserLang = translate.getBrowserLang() || 'en';

    // Use the browser language or default to 'en'
    translate.use(browserLang);
  }

  changeLanguage() {
    this.translate.use(this.translate.currentLang === 'en' ? 'es' : 'en');
  }
}
