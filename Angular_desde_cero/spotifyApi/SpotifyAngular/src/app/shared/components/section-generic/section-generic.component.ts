import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Component, input } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.models';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent implements OnInit{
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<TrackModel> = []
  constructor() { }
  ngOnInit(): void {

  }
}
