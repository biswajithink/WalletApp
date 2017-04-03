import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { PaymentsPage } from '../payments/payments';
import { AirtimePage } from '../airtime/airtime';
import { PopoverPage } from '../popover/popover';

/*
  Generated class for the Merchants page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-merchants',
  templateUrl: 'merchants.html'
})
export class MerchantsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MerchantsPage');
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
