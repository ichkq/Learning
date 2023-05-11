import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pony Racer';

  constructor(private router: Router, private authService: AuthentificationService) {
    this.router.navigate([this.authService.isAuth ? 'races' : 'authentification']);
  }
}
