import {Component, Input} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {Laureate} from "../../model/laurete.entity";
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-laurete-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    NgForOf,
    MatCardActions,
    MatButton,
    MatCardModule
  ],
  templateUrl: './laurete-item.component.html',
  styleUrl: './laurete-item.component.css'
})
export class LaureteItemComponent {
  @Input() laureate!: Laureate;
}
