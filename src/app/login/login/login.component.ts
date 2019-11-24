import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private routeLocation: Location) { }

  login() {
  }

  close() {
    this.routeLocation.back();
  }
}
