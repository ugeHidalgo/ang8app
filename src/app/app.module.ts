import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/main/notFound/not-found.component';
import { GlobalsService } from './globals/globals.service';
import { BankAccountsService } from './services/bankAccounts/bank-accounts.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalRoutingModule } from './globals/global-routing.module';

import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { ConceptsComponent } from './components/main/concepts/concepts/concepts.component'
import { BankAccountsComponent } from './components/main/bankAccounts/bank-accounts/bank-accounts.component';
import { MainScreenComponent } from './components/main/mainScreen/main-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BankAccountsComponent,
    ConceptsComponent,
    MainScreenComponent,
  ],
  imports: [
    GlobalRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [
    GlobalsService,
    BankAccountsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
