import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  private username;

  constructor() { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
    //this.username = 'admin';
  }

  getUserLoggedIn() {
  	return this.isUserLoggedIn;
  }

}