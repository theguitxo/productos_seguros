import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Filter } from 'src/app/interfaces/filter';

@Component({
  selector: 'app-options-filter',
  templateUrl: './options-filter.component.html',
  styleUrls: ['./options-filter.component.scss']
})
export class OptionsFilterComponent implements OnInit {

  @ViewChild('filters') viewFilters: ElementRef; // reference to a element in the page

  @Input('brands') brands: Array<string>; // list of product brands
  @Input('types') types: Array<string>; // list of product types
  @Input('favorites') favorites: boolean; // for control if the filter is in the general list or the favorites list

  // for control if must be create the objects of the filter, helps for avoid 
  //problems when the favorites list is opened and two filters object are in the same time in the screen
  @Input('createFilters') createFilters: boolean;

  @Output('filter') filter: EventEmitter<Filter> = new EventEmitter<Filter>(); // action for triggering when the user press the button to filter

  brandSelected: string; // the brand selected to filter
  typeSelected: string; // the product type selected to filter

  name: string; // string to filter by name
  price: number; // maximum price to filter

  textButtonFilters: string; // string that is shown in the button to show and hide the filters

  constructor() { }

  /**
   * @name ngOmInit
   * @description init the needed values for the component
   */
  ngOnInit(): void {

    if (this.favorites === undefined) this.favorites = false;
    if (this.createFilters === undefined) this.createFilters = true;

    if(this.brands.indexOf('Todos') === -1) {
      this.brands.sort().unshift('Todos');
    }
    this.brandSelected = 'Todos';

    if(this.types.indexOf('Todos') === -1) {
      this.types.sort().unshift('Todos');
    }
    this.typeSelected = 'Todos';
    
    this.name = '';
    this.price = 0;
    
    this.textButtonFilters = 'Mostrar filtros';

  }

  /**
   * @name executeFilter
   * @description emits a signal to the parent component to indicates that the user 
   *              pressed the button, sending the values of the filter
   */
  executeFilter(): void {

    let filterOptions: Filter = {
      brand: this.brandSelected,
      type: this.typeSelected,
      name: this.name,
      price: this.price
    };

    this.filter.emit(filterOptions);    

  }

  /**
   * @name positiveNumbersOnly
   * @description checks if the key pressed, received as a parameter, is a number
   * @param event keyboard event object with the information of the pressed key
   * @retruns a boolean, true if is a number, otherwise, false
   */
  positiveNumbersOnly(event: KeyboardEvent): boolean {
    return event.charCode > 47
  }
  
  /**
   * @name resetFilter
   * @description returns the values of the filter to the initials and execute it
   */
  resetFilter(): void {

    this.brandSelected = 'Todos';
    this.typeSelected = 'Todos';
    this.price = 0;
    this.name = '';

    this.executeFilter();
    
  }

  /**
   * @name updateTextButtonFilters
   * @description updates the text to show in the button that show / hide the filters
   */
  updateTextButtonFilters(): void {
    
    if(getComputedStyle(this.viewFilters.nativeElement).display !== 'none') {
      this.textButtonFilters = 'Mostrar filtros';
    } else {
      this.textButtonFilters = 'Ocultar filtros';
    }
    
  }

}
