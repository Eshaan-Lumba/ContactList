import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';

import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Contact} from './contact';
import { map } from 'rxjs/operators';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
