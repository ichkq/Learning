import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  isAuth = false;

  signIn() {
    return new Promise(
      (resolve) => {
        setTimeout(
          () => {
            this.isAuth = true;
            this.router.navigate(["/races"])
            resolve(true);
          }, 100
        )
      }
    )
  }

  unSign() {
    return new Promise(
      (resolve) => {
        setTimeout(
          () => {
            this.isAuth = false;
            resolve(true);
          }, 100
        )
      }
    )
  }

  constructor(public router: Router) { }
}
