import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from 'src/app/globals/globals.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl;

  constructor(
    private http: HttpClient,
    private globals: GlobalsService
  ) {
    this.usersUrl  = globals.server + 'api/users';
  }

   /**.*/
   registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user);
  }
}
