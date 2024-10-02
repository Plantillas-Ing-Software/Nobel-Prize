import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private baseURL = "https://api.nobelprize.org/v1/laureate.json?bornDate=1900"
  private http: HttpClient = inject(HttpClient);

  getLaureates(){
    return this.http.get(`${this.baseURL}`);
  }
}
