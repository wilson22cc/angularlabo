import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.models';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit{
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };
  constructor(private multimediaService: MultimediaService) { }
  ngOnInit(): void {
  }
  sendPlay(track: TrackModel): void {
    this.multimediaService.trackInfo$.next(track) //enviamos la cancion track por el servicio
  }
}

