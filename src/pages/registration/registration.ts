import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage} from '../login/login';

/*
  Generated class for the Registration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  firstname:string;
lastname:string;
username:string;
phnumber:number;
email:string;
password:any;
con_password:any;
msg:string="";
msg1:string="";
msgNo:string="";
msgconpass:string;

validateEmail(username) {
              var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(username);
      }

        goHome() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    //this.navCtrl.setRoot(Page1);
    if(this.username==""|| this.username==undefined){
      this.msg="Username can't be blank";
      console.log('Username can\'t be blank');
     
    }else if(!this.validateEmail(this.username)){
      this.msg="invalid email";
      
    }else if(this.phnumber==NaN || this.phnumber==undefined){
      this.msg="";
      this.msgNo="Please input your phone number.";     
    }else if(this.password==""|| this.password==undefined){
      this.msg="";
      this.msgNo="";
     this.msg1="Password can't be blank";
     console.log('Password can\'t be blank');
    }else if(this.con_password=='' || this.con_password== undefined || this.con_password != this.password ){
      this.msg1="";
      this.msgNo="";
      this.msgconpass="Please input same password as avobe.";     
    }else{
      this.navCtrl.setRoot(LoginPage);
    }
  }
}
