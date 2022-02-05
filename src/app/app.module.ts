import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { PieceComponent } from './puzzle-game/piece/piece.component';
import { GoalComponent } from './puzzle-game/goal/goal.component';
import { PuzzleGameComponent } from './puzzle-game/puzzle-game.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { ResultDialogComponent } from './puzzle-game/result-dialog/result-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    PieceComponent,
    GoalComponent,
    PuzzleGameComponent,
    HomeComponent,
    ResultDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
