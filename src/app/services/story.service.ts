import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface StoryData {
  title: string;
  author: string;
  views: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private apiUrl = 'http://localhost:3000/stories';

  constructor(private http: HttpClient) {}

  addStory(data: StoryData): Observable<StoryData> {
    return this.http.post<StoryData>(this.apiUrl, data);
  }
}