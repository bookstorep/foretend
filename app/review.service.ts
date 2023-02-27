import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  

  private baseURL = "http://localhost:8010/review/allreviews";

  constructor(private httpClient: HttpClient) { }
  
  getReviewList(): Observable<Review[]>{
    return this.httpClient.get<Review[]>(`${this.baseURL}`);
  }

  createReview(review: Review): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, review);
  }

  getReviewByReviewId(id: number): Observable<Review>{
    return this.httpClient.get<Review>(`${this.baseURL}/${id}`);
  }

  updateReview(id: number, review: Review): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, review);
  }

  deleteReview(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

