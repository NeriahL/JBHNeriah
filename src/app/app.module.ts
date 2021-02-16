import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { LiveReportsComponent } from './components/live-reports/live-reports.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { LoadingComponent } from './components/loading/loading.component';
const routes: Routes = [
  {
    path: '', 
    component:HomeScreenComponent
  },
  {
    path: 'liveReports', 
    component:LiveReportsComponent
  },
  {
    path: 'AboutUs', 
    component:AboutUsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    LiveReportsComponent,
    AboutUsComponent,
    NavbarComponent,
    MoreInfoComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
