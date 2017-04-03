import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { MakaePaymentPage } from '../makae-payment/makae-payment';
import { MerchantsPage } from '../merchants/merchants';
import { AirtimePage } from '../airtime/airtime';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html'
})
export class PaymentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsPage');
  }

     goToHistoryp() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(HistoryPage);
  }
  goToMakaePayment(){
     //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(MakaePaymentPage);
}
  
   goToPayments(){
     //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(PaymentsPage);
}
goToMerchants(){
     //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(MerchantsPage);
}
goToAirtime(){
     //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(AirtimePage);
}

presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
