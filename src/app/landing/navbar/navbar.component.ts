import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public toTop() {
    document.getElementById('products').scrollIntoView();
  }
}