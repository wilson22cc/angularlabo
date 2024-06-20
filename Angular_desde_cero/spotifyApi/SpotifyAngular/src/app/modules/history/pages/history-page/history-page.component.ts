import { Component, OnInit } from '@angular/core';
import { TrackModel } from '../../../../core/models/tracks.models';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listResult: TrackModel[] = []

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }
  receiveData(event: string): void {
    //Todo aqui agarra el termino y sabe que solo cuando tiene mas de 3
    console.log('🤷‍♂️ estoy en el padre -->', event)
    this.searchService.searchTracks$(event)
      .subscribe(({ data }) => {
        this.listResult = data
        console.log('.........', data);
      })
  }
}

