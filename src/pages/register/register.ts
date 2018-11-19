import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirstPage } from '../first/first';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) { }

  async register(user: User) {
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(() => {
        this.navCtrl.setRoot(FirstPage);
      }).catch((e) =>{
        this.toast.create({
          message: e,
          duration: 3000
        }).present();
      });
  }
}