import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        routerLink : '/'
      },
      {
        label: 'Builder With BuiltIn Component',
        routerLink : '/builder-built-in-component'
      },
      {
        label: 'Builder With Custom Static Component',
        routerLink: '/builder-with-custom-static-component'
      },
      {
        label: 'Builder With Custom Dynamic Component',
        routerLink : '/builder-with-custom-dynamic-component'
      }
    ];
  }
}
