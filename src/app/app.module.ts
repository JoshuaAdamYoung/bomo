import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { MdButtonModule, MdToolbarModule, MdTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { LinkfeedComponent } from './component/linkfeed/linkfeed.component';
import { DashComponent } from './component/dash/dash.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'dash', pathMatch: 'full'},
  {path: 'dash', component: DashComponent},
  {path: 'linkfeed', component: LinkfeedComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LinkfeedComponent,
    DashComponent
  ],
  imports: [
    
    BrowserModule,
    RouterModule.forRoot(appRoutes),

    MdButtonModule,
    MdTabsModule,
    MdToolbarModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    AngularFireModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
