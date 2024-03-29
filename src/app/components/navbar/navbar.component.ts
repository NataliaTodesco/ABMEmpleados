import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showButton: boolean = true;
  constructor() { }

  ngOnInit(): void {
    if (window.location.pathname == "/add"){
      this.showButton = false;
    }
    else this.showButton = true;
  }
}
