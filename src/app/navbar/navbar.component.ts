import { Component , Renderer2, ViewChild, ElementRef, HostListener  } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('navbarDefault', { static: false }) navbarDefault!: ElementRef;

  constructor(private renderer: Renderer2) {}
  isScrolling:boolean = true;
  @HostListener('window:scroll',[])
  onWindowScroll() {
    this.isScrolling = window.scrollY < 30;
  }
  toggleNavbar() {
    const navbarElement = this.navbarDefault.nativeElement;
    if (navbarElement.classList.contains('hidden')) {
      this.renderer.removeClass(navbarElement, 'hidden');
    } else {
      this.renderer.addClass(navbarElement, 'hidden');
    }
  }
}
