import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService) {
    this.message = '';
  }

  ngOnInit() {
  }

  login(username: string, password: string): boolean {

    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Datos de acceso incorrectos';
      setTimeout(function () {
        this.message = '';
      }.bind(this), 2500);
    }

    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }

}

