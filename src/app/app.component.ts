import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from "./portfolio/portfolio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HomeComponent, AboutComponent, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assingment1-Angular';
}
