import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchValue: string = '';

  @Output() SearchTextChanged : EventEmitter<string> =  new EventEmitter<string>();

  changeSearchValue(eventData: Event){
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }

  onSearchTextChanged(input:HTMLInputElement){
    this.SearchTextChanged.emit(this.searchValue)
    this.searchValue = input.value;
  }
}