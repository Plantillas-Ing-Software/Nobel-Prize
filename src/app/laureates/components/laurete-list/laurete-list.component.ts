import {Component, OnInit} from '@angular/core';
import {Laureate, Prize} from "../../model/laurete.entity";
import {NewsApiService} from "../../services/news-api.service";
import {LaureteItemComponent} from "../laurete-item/laurete-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-laurete-list',
  standalone: true,
  imports: [
    LaureteItemComponent,
    NgForOf
  ],
  templateUrl: './laurete-list.component.html',
  styleUrl: './laurete-list.component.css'
})
export class LaureteListComponent implements OnInit {
  laureates: Laureate[] = [];
  constructor(private NewsApiService: NewsApiService) {}

  ngOnInit(): void {
    this.getLaureates();
  }

  getLaureates(): void {
    this.NewsApiService.getLaureates().subscribe((response: any) => {
      this.laureates = response.laureates.map((laureateData: any) => {
        let laureate = new Laureate();
        laureate.id = laureateData.id;
        laureate.firstname = laureateData.firstname;
        laureate.surname = laureateData.surname;
        laureate.born = laureateData.born;
        laureate.gender = laureateData.gender;
        laureate.prizes = laureateData.prizes.map((prizeData: any) => {
          let prize = new Prize();
          prize.share = prizeData.share;
          return prize;
        });
        return laureate;
      });
    });
  }
}
