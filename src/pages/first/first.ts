import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cardHeader = "Paciente gestante ou em pós-parto?"
    this.step = 1;
  }

  ionViewDidLoad(){
    this.cardHeader = "Paciente gestante ou em pós-parto?"
    this.step = 1;
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
    this.navCtrl.setRoot(HomePage);
  }
}
