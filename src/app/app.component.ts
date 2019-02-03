import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Filter } from './interfaces/filter';
import { Product } from './interfaces/product';
import { OrderOptions } from './interfaces/order-options';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  loading: boolean; // controls if data is loading
  error: boolean; // controls if an error has produced
  showFavorites: boolean; // control if must shows the favorites list
  data: Array<Product>; // list with the products data
  page: number; // currently page of the products list view
  lastFilter: Filter; // last values used for data filtering
  
  constructor(private productsService: ProductsService) {}

  /**
   * @name ngOnInit
   * @description init the values of the component and calls one method of products service to get the data
   */
  ngOnInit(): void {

    this.loading = true;
    this.error = false;
    this.page = 1;
    this.showFavorites = false;

    this.lastFilter = {
      name: '',
      price: 0,
      brand: 'Todos',
      type: 'Todos'
    };

    let dataLoader = this.productsService.setProductsData()
        .pipe(finalize(() => {
          this.loading = false;
          dataLoader.unsubscribe();
        }))
        .subscribe(
          data => {
            this.data = this.productsService.getRawData();
          },
          error => {            
            this.error = true;   
            this.loading = false;         
          });
      
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
   * @name executeFilter
   * @description filters the data using the filter values received as a parameter
   * @param event object with the filter values
   * @param resetPage boolean that indicates if must reset the number of page to show to the first
   */
  executeFilter(event: Filter, resetPage: boolean = true): void {

    if(resetPage) {
      this.page = 1;
    }
    
    event.favorite = false;
    
    this.lastFilter = event;

    this.data = this.productsService.filterData(event);

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
  orderData(options: OrderOptions):void {
    this.data = this.productsService.orderData(this.data, options);
  }

  /**
   * @name openFavorites
   * @description changes the value of 'showFavorites' to open the favorites list
   */
  openFavorites(): void {
    this.showFavorites = true;
  }

  /**
   * @name closeFavorites
   * @description changes the value of 'showFavorites' to close the favorites list 
   *              and updates the data by executing the filter to show the changes
   *              produced in the favorites list
   */
  closeFavorites(): void {
    this.showFavorites = false;
    this.executeFilter(this.lastFilter, false);
  }

  /**
   * @addFavorites
   * @description modify a register of the products list to indicate as a favorite
   * @param id identificator in the list of the product to modify
   */
  addFavorite(id: number): void {
    this.productsService.updateFavorite(id);
    this.executeFilter(this.lastFilter, false);
  }

}
