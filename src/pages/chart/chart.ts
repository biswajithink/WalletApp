import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html'
})
export class ChartPage {

  constructor(private navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');
  }

}
