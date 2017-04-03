import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ProfilePage } from '../pages/profile/profile';
import { HistoryPage } from '../pages/history/history';
import { AccountscardPage } from '../pages/accountscard/accountscard';
import { AccountsWalletsPage } from '../pages/accounts-wallets/accounts-wallets';
import { PaymentsPage } from '../pages/payments/payments';
import { MakaePaymentPage } from '../pages/makae-payment/makae-payment';
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
import { ChartPage } from '../pages/chart/chart';
import { RegistrationPage } from '../pages/registration/registration';
import { TransferContributePage } from '../pages/transfer-contribute/transfer-contribute';


//chart
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    ProfilePage,
    HistoryPage,
    AccountscardPage,
    AccountsWalletsPage,
    PaymentsPage,
    MakaePaymentPage,
    MerchantsPage,
    AirtimePage,
    TransferPage,
    TransferSelfPage,
    CashCashoutPage,
    CashCashcancelPage,
    SettingsPage,
    ReportsPage,
    TransferAcceptedPage,
    TutorialsPage,
    SettingshelpPage,
    ReportsContinuedPage,
    CalculatorPage,
    PopoverPage,
    RegistrationPage,
    LoginPage,
    ChartPage,
    TransferContributePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    ProfilePage,
    HistoryPage,
    AccountscardPage,
    AccountsWalletsPage,
    PaymentsPage,
    MakaePaymentPage,
    MerchantsPage,
    AirtimePage,
    TransferPage,
    TransferSelfPage,
    CashCashoutPage,
    CashCashcancelPage,
    SettingsPage,
    ReportsPage,
    TransferAcceptedPage,
    TutorialsPage,
    SettingshelpPage,
    ReportsContinuedPage,
    CalculatorPage,
    PopoverPage,
    RegistrationPage,
    LoginPage,
    ChartPage,
    TransferContributePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
