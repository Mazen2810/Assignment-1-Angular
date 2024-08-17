import { Component } from '@angular/core';
import { StarComponent } from "../whiteStar/star.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
