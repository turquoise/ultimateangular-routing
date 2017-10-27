import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, Route, RouterModule, PreloadingStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MailModule } from './mail/mail.module';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AuthGuard } from './auth/auth.guard';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './app.component';

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? fn() : Observable.of(null);
  }
}

// components

// routes
export const ROUTES: Routes = [
  { path: 'dashboard', canLoad: [AuthGuard],data: { preload: true}, loadChildren: './dashboard/dashboard.module#DashboardModule'},
   { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
  imports: [
    BrowserModule,
    MailModule,
    AuthModule,
    DashboardModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreload })
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store,
    CustomPreload
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
