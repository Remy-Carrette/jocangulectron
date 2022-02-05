import { MutationObserverFactory } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume-button',
  templateUrl: './volume-button.component.html',
  styleUrls: ['./volume-button.component.css'],
})
export class VolumeButtonComponent implements OnInit {
  isPlaying = false;
  private music = new Audio('./assets/animal-crossing.mp3');
  private isLoaded = false;
  constructor() {}

  ngOnInit(): void {
    this.music.loop = true;
    this.music.addEventListener('loadeddata', () => {
      this.isLoaded = true;
      this.music.play();
      this.isPlaying = true;
    });
  }
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
