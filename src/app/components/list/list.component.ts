import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { faSortUp, faSortDown, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { OrderOptions } from 'src/app/interfaces/order-options';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {

  @Input('data') data: Array<Product>; // data to show in list
  @Input('page') page: number; // current page
  @Input('forPage') forPage: number; // items for page
  @Input('favoritesList') favoritesList: boolean; // to check if the list shows the favorites
  
  // event for indicate to the parent component that must order the data
  // sends an object with the options to order
  @Output('orderData') orderData: EventEmitter<OrderOptions> = new EventEmitter<OrderOptions>();
  // event for indicate to the parent component that must execute the action assigned to the registers the list
  // sends the id of the register
  @Output('lineAction') lineAction: EventEmitter<number> = new EventEmitter<number>();

  init: number; // the index of the data list where starts the registers to show
  finish: number; // the last index of the data list to show

  // icons for order data
  faSortUp: any;
  faSortDown: any;
  faStar: any;
  faTrash: any;

  constructor() { }

  /**
   * @name ngOnInit
   * @description initializes the needed values to the component
   */
  ngOnInit(): void {

    if(this.favoritesList === undefined) this.favoritesList = false;

    this.faSortUp = faSortUp;
    this.faSortDown = faSortDown;
    this.faStar = faStar;
    this.faTrash = faTrash;

  }

  /**
   * @name ngOnChanges
   * @description updates the values of the initial and finish indexes when the component detects a change
   */
  ngOnChanges(): void {
    this.init = (this.page - 1) * this.forPage;
    this.finish = this.init + this.forPage;
  }

  /**
   * @name callOrderData
   * @description emits a message to the parent component to order the data, according the options sendeed
   * @param field the field of the list that must be used for order
   * @param type the mode to order, can be ASC or DESC
   */
  callOrderData(field: string, type: string): void {

    let options: OrderOptions = {
      field,
      type
    };

    this.orderData.emit(options);

  }

  /**
   * @name iconFavorites
   * @description returns the right icon for show in the list for the action 
   *              of the registers, depending the list shows the favorites or not
   * @returns an icon
   */
  iconFavorites(): any {
    
    if(this.favoritesList) {
      return this.faTrash;
    } else {
      return this.faStar;
    }

  }

  /**
   * @name executeLineAction
   * @description emits a message to the parent component to execute the assigned action to the registers
   * @param id id of the register over which the action
   */
  executeLineAction(id: number) {
    this.lineAction.emit(id);    
  }

}
