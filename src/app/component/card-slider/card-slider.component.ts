import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent {
  @Input() data!: any[];
  @Input() title!: string;

}
