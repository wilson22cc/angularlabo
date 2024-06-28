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
export class MediaPlayeComponent implements OnInit, OnDestroy {
  listObservers$: Array<Subscription> = []
  constructor(public multimediaService: MultimediaService) { }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }
}




