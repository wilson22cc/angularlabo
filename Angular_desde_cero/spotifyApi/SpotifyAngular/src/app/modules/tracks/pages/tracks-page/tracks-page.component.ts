import { OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrackModel } from '../../../../core/models/tracks.models';
import { TrackService } from '../../services/track.service';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []
  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()

  }
  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()

  }
  loadDataRandom(): void {
    this.trackService.getAllRandom$()
      .subscribe((response: TrackModel[]) => {
        this.tracksRandom = response

      })

  }

  ngOnDestroy(): void {

  }
}
