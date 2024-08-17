import { Component } from '@angular/core';
import { BlackStarComponent } from '../black-star/black-star.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BlackStarComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
userName:string ='';
userAge:string = '';
userEmail:string ='';
userPassword:string ='';
}
