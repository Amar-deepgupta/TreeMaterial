import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//  import { NgxContextModule } from 'ngx-context';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TreeComponent } from './tree/tree.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import {  MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { AdBannerComponent } from './adbanner/ad-banner.componen';
import { HeroJobAdComponent } from './adbanner/hero-job-ad.component';
import { HeroProfileComponent } from './adbanner/hero-profile.component';
import { AdService } from './adbanner/ad.service';
import { TabProcessComponent } from './tab-process/tab-process.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component5Component } from './component5/component5.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TreeComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    TabProcessComponent,
    Component1Component,
  
    Component2Component,
    Component3Component,
    Component4Component,
    Component5Component,
    
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    HttpClientModule,
    MatTabsModule
      // NgxContextModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
