import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Filter } from 'src/app/interfaces/filter';
import { OrderOptions } from 'src/app/interfaces/order-options';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {

  // event to indicates to the parent component that must close the favorites lista¡
  @Output('close') close: EventEmitter<void> = new EventEmitter<void>();

  data: Array<Product>; // list with the favorite products data
  page: number; // currently page of the favorite products list view
  faTimesCircle: any = faTimesCircle; // icon for close button  
  lastFilter: Filter; // last values used for data filtering

  constructor(private productsService: ProductsService) { }
  
  /** 
  * @name ngOnInit
  * @description init the values of the component and calls one method of products service to get the data
  */
  ngOnInit(): void {

    this.data = [];
    this.page = 1;
    
    this.lastFilter = {
      name: '',
      price: 0,
      brand: 'Todos',
      type: 'Todos'
    };

    this.executeFilter(this.lastFilter, false);

  }


  /**
   * @name executeFilter
   * @description filters the data using the filter values received as a parameter
   * @param event object with the filter values
   * @param resetPage boolean that indicates if must reset the number of page to show to the first
   */
  executeFilter(event: Filter, resetPage: boolean = true): void {

    if (resetPage) {
      this.page = 1;
    }
    event.favorite = true;
    this.lastFilter = event;
    this.data = this.productsService.filterData(event);

  }

  /**
   * @name closeFavorites
   * @description emits the mesage to the parent component to close the favorites list
   */
  closeFavorites(): void {
    this.close.emit();
  }

  /**
  * @name getBrands
  * @description gets, using the products service, one list of the insurances brands
  * @returns an array of string
  */
  getBrands(): Array<string> {
    return this.productsService.getBrands();
  }

  /**
   * @name getTypes
   * @description gets, using the products service, one list of the insurances types
   * @returns an array of string
   */
  getTypes(): Array<string> {
    return this.productsService.getTypes();
  }

  /**
  * @name changePage
  * @description changes the page to show
  * @param page the new value for page
  */
  changePage(page: number): void {
    this.page = page;
  }

  /**
  * @name orderData
  * @description orders the data according with the options received as a parameter
  * @param options object with the options for order
  */
  orderData(options: OrderOptions): void {
    this.data = this.productsService.orderData(this.data, options);
  }
  
  /**
   * @name removeFavorite
   * @description modifies a register, using the products service, to eliminate it from the favorites list
   * @param id id of the product which be modified
   */
  removeFavorite(id: number): void {

    if(confirm(`¿Eliminar de favoritos ${this.productsService.getProductName(id)}?`)) {
      this.productsService.updateFavorite(id);
      this.executeFilter(this.lastFilter, false);
    }

  }

}
