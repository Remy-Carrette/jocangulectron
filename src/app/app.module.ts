import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { PieceBleueComponent } from './piece-bleue/piece-bleue.component';
import { PieceVerteComponent } from './piece-verte/piece-verte.component';
import { PieceRougeComponent } from './piece-rouge/piece-rouge.component';

@NgModule({
  declarations: [
    AppComponent,
    PieceBleueComponent,
    PieceVerteComponent,
    PieceRougeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
