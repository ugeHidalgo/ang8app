import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  userNameLogged: string;

  //server = 'https://apimowizz2ehh.azurewebsites.net/';  //To be used when API is in production
  //server = 'http://192.168.1.106:44351/';  //To be used when API is in development mode and in local network server.
  server = 'https://localhost:5001/';  // To be used when API is in development mode and without connection to any network

  constructor() {
  }

  setUser(userName: string) {
    const me = this;
    me.userNameLogged = userName;
  }
}
