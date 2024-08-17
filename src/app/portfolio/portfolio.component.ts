import { Component } from '@angular/core';
import { StarComponent } from "../whiteStar/star.component";
import { BlackStarComponent } from "../black-star/black-star.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent, BlackStarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  targetImageSrc: string = '';
  srcArray: string[] = [
    "./assets/port1.png",
    "./assets/port2.png",
    "./assets/port3.png",
    "./assets/port1.png",
    "./assets/port2.png",
    "./assets/port3.png",
  ];
srcValue(event:MouseEvent):void {
  const imgElement = event.target as HTMLImageElement;
  const imgSrc = imgElement.src;
  this.targetImageSrc = imgSrc;
}
 
flag:boolean = true;
hideModel(element:EventTarget | null , img:HTMLImageElement):void {
if(element == img) {
  console.log("element", element , "img " , img);
  return;
}
 

  this.flag =!this.flag;
  console.log("element", element , "img " , img);
}

}
