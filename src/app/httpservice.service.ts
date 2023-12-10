import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  private isAuthenticated = false;

  constructor() { }

  login(username: string, password: string): boolean {
    // Perform authentication logic, e.g., send login request to backend API
    // If login is successful, set isAuthenticated to true
    // You can store authentication token or user details in client-side storage as well
    this.isAuthenticated = true;
    return true;
  }

  logout(): void {
    // Perform logout logic, e.g., clear token from client-side storage
    this.isAuthenticated = false;
  }

  isAuthenticate(): boolean {
    return this.isAuthenticated;
  }

}
