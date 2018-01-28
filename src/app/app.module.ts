import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OauthserverComponent } from './oauthserver/oauthserver.component';



@NgModule({
  declarations: [
    AppComponent,
    OauthserverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
