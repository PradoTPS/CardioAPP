import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  private goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

  private goToLogin() {
    this.navCtrl.push(LoginPage);
  }
}
