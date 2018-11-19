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
  }

  private goHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
