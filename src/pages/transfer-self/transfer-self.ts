import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { TransferPage } from '../transfer/transfer';
import { PopoverPage } from '../popover/popover';


@Component({
  selector: 'page-transfer-self',
  templateUrl: 'transfer-self.html'
})
export class TransferSelfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferSelfPage');
  }

  goToContact(){
     //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(TransferPage);
}

  goToSelf(){
     //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(TransferSelfPage);
}

presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  
}
