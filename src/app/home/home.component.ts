import { Component } from '@angular/core';
import { StarComponent } from "../whiteStar/star.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
