import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BankAccountsComponent } from './components/main/bank-accounts/bank-accounts.component';
import { GlobalsService } from './globals/globals.service';
import { BankAccountsService } from './services/bankAccounts/bank-accounts.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BankAccountsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    GlobalsService,
    BankAccountsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
