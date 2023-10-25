import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() inStock: number = 0 ;
  @Input() outStock: number = 0;

  selectedFilterRadioButton : string = 'All'
  
  @Output() selectedFilterRadioButtonChanged : EventEmitter<string> = new EventEmitter<string>;

  onSelectdFilterRadioButtonChanged(){
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
