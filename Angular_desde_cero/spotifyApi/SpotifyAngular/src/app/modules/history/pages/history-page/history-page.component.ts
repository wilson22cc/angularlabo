import { Component, OnInit } from '@angular/core';
import { TrackModel } from '../../../../core/models/tracks.models';
import { SearchService } from '../../services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements OnInit {
  listResults$: Observable<any> = of([])

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }
  receiveData(event: string): void {
    //Todo aqui agarra el termino y sabe que solo cuando tiene mas de 3
    console.log('🤷‍♂️ estoy en el padre -->', event)
    this.listResults$ = this.searchService.searchTracks$(event)

  }
}


