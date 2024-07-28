import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private USERNAME_KEY = 'username';
  private ISAUTH_KEY = 'isauth';
  private username: string | null = null;
  private isAuthenticated = false;

  constructor() { }

  setUsername(username: string) {
    this.username = username;
    this.isAuthenticated = true;
    localStorage.setItem(this.USERNAME_KEY, username);
    localStorage.setItem(this.ISAUTH_KEY, this.isAuthenticated.toString());
  }

  getUsername(): string | null {
    this.username = localStorage.getItem(this.USERNAME_KEY);
    return this.username;
  }

  isAuth(): boolean {
    this.isAuthenticated = localStorage.getItem(this.ISAUTH_KEY) === 'true';
    return this.isAuthenticated;
  }

  logout() {
    this.username = null;
    this.isAuthenticated = false;
    localStorage.removeItem(this.USERNAME_KEY);
    localStorage.removeItem(this.ISAUTH_KEY);
  }
}
