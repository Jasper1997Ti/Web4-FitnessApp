import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rating',
  templateUrl: 'rating.component.html',
  styleUrls: ['rating.component.css']
})
export class RatingComponent {
  @Input() rating: number;
  public ratingChange$ = new Subject<number>();

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingChange$.next(this.rating);
  }
}