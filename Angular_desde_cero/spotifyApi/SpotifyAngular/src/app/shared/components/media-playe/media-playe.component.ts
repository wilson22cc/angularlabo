import { ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  listObservers$: Array<Subscription> = []
  state: string = 'paused'
  constructor(public multimediaService: MultimediaService) { }
  ngOnInit(): void {
    const observer1$ = this.multimediaService.playerStatus$.subscribe(status => this.state = status)
    this.listObservers$ = [observer1$]
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }
  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x // 1050 - x
    const persentageFromX = (clickX * 100) / width
    console.log(`Click(x) : ${persentageFromX}`);
    this.multimediaService.seekAudio(persentageFromX)
  }
}





