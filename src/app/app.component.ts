import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, PopoverController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ProfilePage } from '../pages/profile/profile';
import { HistoryPage } from '../pages/history/history';
import { AccountscardPage } from '../pages/accountscard/accountscard';
import { AccountsWalletsPage } from '../pages/accounts-wallets/accounts-wallets';
import { PaymentsPage } from '../pages/payments/payments';
import { MakaePaymentPage } from './pages/makae-payment/makae-payment';
import { MerchantsPage } from '../pages/merchants/merchants';
import { AirtimePage } from '../pages/airtime/airtime';
import { TransferPage } from '../pages/transfer/transfer';
import { TransferSelfPage } from '../pages/transfer-self/transfer-self';
import { CashCashoutPage } from '../pages/cash-cashout/cash-cashout';
import { CashCashcancelPage } from '../pages/cash-cashcancel/cash-cashcancel';
import { SettingsPage } from '../pages/settings/settings';
import { ReportsPage } from '../pages/reports/reports';
import { TransferAcceptedPage } from '../pages/transfer-accepted/transfer-accepted';
import { TutorialsPage } from '../pages/tutorials/tutorials';
import { SettingshelpPage } from '../pages/settingshelp/settingshelp';
import { ReportsContinuedPage } from '../pages/reports-continued/reports-continued';
import { CalculatorPage } from '../pages/calculator/calculator';
import { PopoverPage } from '../pages/popover/popover';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any, menuicon: string}>;
  icons: Array<string>;

  constructor(public platform: Platform, private menu: MenuController) {
    this.initializeApp();
    this.menu = menu;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Page1 , menuicon: 'ios-home'},
      { title: 'Accounts', component: AccountscardPage, menuicon: 'ios-key'},
      { title: 'Transfer', component: TransferPage, menuicon: 'md-arrow-round-forward'},
      { title: 'Payments', component: PaymentsPage, menuicon: 'ios-card'},
      { title: 'Cash', component: CashCashoutPage, menuicon: 'md-cash'},
      { title: 'Settings', component: SettingsPage, menuicon: 'md-cog'},
      { title: 'Reports', component: ReportsPage, menuicon: 'ios-document'},
      { title: 'Help', component: SettingshelpPage, menuicon: 'md-help'},
      { title: 'Logout', component: LoginPage, menuicon: 'md-close'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.menu.close();
  }
}

class MyPage {
  constructor(public popoverCtrl: PopoverController) {
  } 

 presentPopover(event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: event
    });
  }
  
  
}
