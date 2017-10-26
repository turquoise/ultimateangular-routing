import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { DashboardModule } from './dashboard/dashboard.module';
import { MailModule } from './mail/mail.module';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './app.component';

// components

// routes
export const ROUTES: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
   { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
  imports: [
    BrowserModule,
    MailModule,
    DashboardModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
