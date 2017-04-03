import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { AccountsWalletsPage } from '../accounts-wallets/accounts-wallets';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-accountscard',
  templateUrl: 'accountscard.html'
})
export class AccountscardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountscardPage');
  }

  goToAccountsWallets() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(AccountsWalletsPage);
  } 
  
  goToAccountscard() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(AccountscardPage);
  }
  
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
