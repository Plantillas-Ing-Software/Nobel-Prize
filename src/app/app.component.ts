import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import {TranslateService} from "@ngx-translate/core";
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";
import {MatToolbar} from "@angular/material/toolbar";
import {LaureteListComponent} from "./laureates/components/laurete-list/laurete-list.component";
import {MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterContentComponent, LanguageSwitcherComponent, MatToolbar, LaureteListComponent, MatCardSubtitle, MatCardTitle, MatCardHeader],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'repasopc1';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('en');
  }
}
