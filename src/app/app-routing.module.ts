import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PuzzleGameComponent } from './puzzle-game/puzzle-game.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'puzzle-game', component: PuzzleGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
