import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page1 } from '../page1/page1';
import { RegistrationPage } from '../registration/registration';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  username:string;
  password:any;
  msg:string="";
  msg1:string="";

  validateEmail(username) {
              var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(username);
      }




  goHome() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    
    if(this.username==""|| this.username==undefined){
      this.msg="Username can't be blank";
      console.log('Username can\'t be blank');
     
    }
    else if(!this.validateEmail(this.username)){
      this.msg="invalid email";
      
      }
    
   else if(this.password==""|| this.password==undefined){
      this.msg="";
     this.msg1="Password can't be blank";
     console.log('Password can\'t be blank');
    }
    else{
      this.navCtrl.setRoot(Page1);
    }
  }
  goRegistration() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(RegistrationPage);
  }

}
