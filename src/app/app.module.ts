import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CrmModule } from './crm/crm.module';
import { SpaModule } from './spa/spa.module';

@NgModule({
  //components belong to AppModule
  declarations: [
    AppComponent,
  ],
  //This AppModule is dependent on below modules
  imports: [
    BrowserModule,
    SpaModule,
    CrmModule
  ],
  //AppModule is dependent on Angular Services-> Rest API
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
