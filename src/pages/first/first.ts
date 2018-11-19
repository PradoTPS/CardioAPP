import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  cardHeader: any;
  step: number;
  block: any;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.goHome();
  }

  ionViewDidLoad(){
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Boas vindas!`,
          duration: 3000
        }).present();
      } else {
        this.toast.create({
          message: 'Não foi possível autenticar.',
          duration: 3000
        }).present();
      }
    });

    this.goHome();
  }

  private callAgain(header, step){
    this.cardHeader = header;
    this.step = step;

    switch(this.block){
      case 1:
        this.cardHeader = "Interrompa investigação de Miocardiopatia Periparto!";
        this.step = 11;
        break;
      case 2:
        this.cardHeader = "Interrompa investigação de Miocardiopatia Periparto!";
        this.step = 12;
        break;
      case 3:
        this.cardHeader = "Solicitar Eletrocardiograma (ECG) e exames laboratoriais."
        this.step = 13;
        break;
    }

    this.block = 0;
  }

  private setBlock(number){
    this.block = number;
  }

  private goHome(){
    this.cardHeader = "Paciente gestante ou em pós-parto?"
    this.step = 1;
  }

  private logout(){
    this.afAuth.auth.signOut().then(() => {
      this.navCtrl.setRoot(HomePage);
   });
  }
}
