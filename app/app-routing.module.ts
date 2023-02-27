import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReviewComponent } from './create-review/create-review.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewUpdateComponent } from './review-update/review-update.component';

const routes: Routes = [

  {path: 'review-list', component: ReviewListComponent},
  {path: 'create-review', component: CreateReviewComponent},
  {path: '', redirectTo: 'reviews', pathMatch: 'full'},
  {path: 'update-review/:id', component: ReviewUpdateComponent},
  {path: 'review-details/:id', component: ReviewDetailsComponent}
 
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
