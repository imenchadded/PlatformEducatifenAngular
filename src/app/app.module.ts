import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ChangecolorComponent } from './changecolor/changecolor.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ChangecolorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Ajoutez FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
