import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private routeLocation: Location) { }

  register() {
  }

  close() {
    this.routeLocation.back();
  }
}
