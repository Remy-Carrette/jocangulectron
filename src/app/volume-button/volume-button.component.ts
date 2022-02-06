import { Component, OnInit } from '@angular/core';
/** Composant qui lance la musique et qui permet de mettre sur pause ou de relancer la musique. */
@Component({
  selector: 'app-volume-button',
  templateUrl: './volume-button.component.html',
  styleUrls: ['./volume-button.component.css'],
})
export class VolumeButtonComponent implements OnInit {
  /** variable qui va définir l'icone material dans le HTML du composant. */
  isPlaying = false;

  /** selection de la musique dans les assets. */
  music = new Audio('./assets/animal-crossing.mp3');

  /** variable qui permet de prévenir un problème de chargement de la musique.*/
  isLoaded = false;
  constructor() {}
  /** Lance la musique en boucle dès l'appel du composant. */
  ngOnInit(): void {
    this.music.loop = true;
    this.music.addEventListener('loadeddata', () => {
      this.isLoaded = true;
      this.music.play();
      this.music.volume = 0.1;
      this.isPlaying = true;
    });
  }

  /** Fonction qui permet de mettre sur pause ou de relancer la musique en fonction de la variable isPlaying */
  public playPause() {
    if (!this.isLoaded) return;
    if (this.isPlaying) {
      this.music.pause();
    } else {
      this.music.play();
    }
    this.isPlaying = !this.isPlaying;
  }
}
