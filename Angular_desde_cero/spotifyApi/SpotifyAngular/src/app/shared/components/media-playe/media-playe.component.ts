import { OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrackModel } from '../../../core/models/tracks.models';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-media-playe',
  templateUrl: './media-playe.component.html',
  styleUrl: './media-playe.component.css'
})
export class MediaPlayeComponent implements OnInit, OnDestroy{
  mockCover: TrackModel = {
    cover: 'https://lastfm.freetls.fastly.net/i/u/300x300/1a1cc9431ffacc1b7be877d61975dfc8.jpg',
    album: 'Gioly & Assia',
    name: 'BEBE(Oficial)',
    url: 'http://localhost/track.mp3',
    _id: 1
  }
  listObservers$: Array<Subscription> = []
  constructor(private multimediaService: MultimediaService) { }
  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo cancion...', response);
      }
    )
    this.listObservers$ = [observer1$]
  }
  ngOnDestroy(): void {}
}


