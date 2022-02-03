import { Component, OnInit } from '@angular/core';
//Composant qui est le menu principal de l'application, c'est à partir d'ici que l'on peux choisir les différents jeux proposés.
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
