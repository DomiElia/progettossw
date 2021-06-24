
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { VisualizzaComponent } from './visualizza/visualizza.component';
import { NuovopostComponent } from './nuovopost/nuovopost.component';
import { KeyvalueService } from './keyvalue.service';
import { AccediComponent } from './accedi/accedi.component';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule],
  declarations: [ AppComponent, VisualizzaComponent, NuovopostComponent, AccediComponent ],
  bootstrap:    [ AppComponent ],
  providers: [KeyvalueService]
})
export class AppModule { }
