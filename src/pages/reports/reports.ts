import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import 'chart.js/src/chart';

@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html'
})
export class ReportsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  //line chart
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40, 28, 48, 40, 19, 86]
  ];
  public lineChartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public lineChartType:string = 'line';
  public chartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(210,243,248,0.5)',
      borderColor: 'rgba(23,204,233,1)',
      pointBackgroundColor: 'rgba(251,255,251,1)',
      pointBorderColor: '#28d7f0',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(253,159,72,0.8)'
    }
];


  //doughnut chart
  public doughnutChartLabels:string[] = ['Food', 'Housing','Electricity','Water'];
  public doughnutChartData:number[] = [400, 380,330,300];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartColors:Array<any> = [
      {
        fill: true,
        backgroundColor: [
          "#018cc3","#ec6755",'#b772ae','#00c17b'
        ]
      }
    ];

}
