import { Component, OnInit } from '@angular/core';
import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent  implements OnInit{
reviewDetails(arg0: number) {
throw new Error('Method not implemented.');
}
deleteReview(arg0: number) {
throw new Error('Method not implemented.');
}
updateReview(arg0: number) {
throw new Error('Method not implemented.');
}
  reviews: Review[] = [];
  constructor(private reviewService:ReviewService)
  {}
  ngOnInit(): void {
    this.getReviews();
  }
  private getReviews()
  {
    this.reviewService.getReviewList().subscribe(data => {
      this.reviews=data;
    });
  }
  
}
