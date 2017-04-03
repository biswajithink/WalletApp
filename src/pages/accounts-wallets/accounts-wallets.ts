import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { AccountscardPage } from '../accountscard/accountscard';
import { PopoverPage } from '../popover/popover';


@Component({
  selector: 'page-accounts-wallets',
  templateUrl: 'accounts-wallets.html'
})
export class AccountsWalletsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountsWalletsPage');
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
