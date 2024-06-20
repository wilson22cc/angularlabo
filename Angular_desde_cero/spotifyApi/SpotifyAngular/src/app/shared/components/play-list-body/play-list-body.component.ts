import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.models';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: TrackModel[] = []
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
  constructor() { }
  ngOnInit(): void {
  }
}
