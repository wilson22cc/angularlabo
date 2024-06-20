import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  src: string = '' // esta variable contendra el nombre del artista a buscar
  @Output() callbackData: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  callSearch(term: string): void {
    if (term.length >= 3) {
      this.callbackData.emit(term)
      console.log('💋---->', term)
    }
  }
}
