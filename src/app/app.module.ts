import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BankAccountsComponent } from './components/main/bank-accounts/bank-accounts.component';
import { GlobalsService } from './globals/globals.service';
import { BankAccountsService } from './services/bankAccounts/bank-accounts.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BankAccountsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GlobalsService,
    BankAccountsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
