import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

/*
  Generated class for the MakaePayment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-makae-payment',
  templateUrl: 'makae-payment.html'
})
export class MakaePaymentPage {
  min:any= 0;
  max:any= 100;
  currentRange:any=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}
  
   test(){
    if(this.currentRange>50){
        this.currentRange=100;
    }else{
        this.currentRange=0;
    }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakaePaymentPage');
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
