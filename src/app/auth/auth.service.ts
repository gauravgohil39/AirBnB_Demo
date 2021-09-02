import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userIsAuthenticate = false;

  constructor() { }

  get userIsAuthenticated(){
    return this.userIsAuthenticate;
  }

  login(){
      this.userIsAuthenticate=true;
  }

  logout(){
    this.userIsAuthenticate=false;
  }

}
