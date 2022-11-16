import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key = '';
  constructor(private http: HttpClient) { }


  initSources() {
    return this.http.get('' + this.api_key);
  }


  initArticles() {
    return this.http.get('' + this.api_key);
  }

  getArticlesByID(source: String) {
    return this.http.get('' + source + '&apiKey=' + this.api_key);
  }

}