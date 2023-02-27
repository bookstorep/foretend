import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { ReviewUpdateComponent } from './review-update/review-update.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReviewListComponent,
    CreateReviewComponent,
    ReviewDetailsComponent,
    ReviewUpdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
