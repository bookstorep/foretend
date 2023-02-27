import { Component } from '@angular/core';
import { Review } from '../review';
import { ReviewService } from '../review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent {
  review: Review = new Review();
  constructor(private reviewService: ReviewService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveReview(){
    this.reviewService.createReview(this.review).subscribe( data =>{
      console.log(data);
      this.goToReviewList();
    },
    error => console.log(error));
  }

  goToReviewList(){
    this.router.navigate(['/reviews']);
  }
  
  onSubmit(){
    console.log(this.review);
    this.saveReview();
  }
 

}
