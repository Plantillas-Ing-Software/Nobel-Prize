import { Component } from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {NgForOf} from "@angular/common";
import {FooterContentComponent} from "../footer-content/footer-content.component";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    FooterContentComponent,
    NgForOf,
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  currentLang: string = 'en';
  languages: string[] = ['en', 'es'];

  constructor(private translate: TranslateService) {
    // Set the default language
    this.currentLang = translate.currentLang || 'en';
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.currentLang = language;
  }
}
