import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestsService } from './requests.service';
import { Product } from '../interfaces/product';
import { Filter } from 'src/app/interfaces/filter';
import { OrderOptions } from '../interfaces/order-options';
import { finalize } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private dataPath: string; // path of the data file
  private rawData: Array<Product>; // list of the products received from the file, without any modification
  private brands: Array<string>; // list of product brands
  private types: Array<string>; // list of product types

  /**
   * @name constructor
   * @description init the values that needs the service
   * @param requestsService instance of the class for make requests of files
   */
  constructor(private requestsService: RequestsService,
              private storageService: StorageService ) {

    this.dataPath = 'assets/data/InsurProducts.json';
    this.rawData = [];
    this.brands = [];
    this.types = [];

  }

  /**
   * @name getRawData
   * @description returns the products data
   * @returns array of objects
   */
  getRawData(): Array<Product> {
    return this.rawData;
  }

  /**
   * @name getBrands
   * @description returns the product brands list
   * @returns array of strings
   */
  getBrands(): Array<string> {
    return this.brands;
  }

  /**
   * @name getTypes
   * @description returns the product types list
   * @returns array of strings
   */
  getTypes(): Array<string> {
    return this.types;
  }

  /**
   * @name setProductsData
   * @description using the requested service, gets the products data and, if the request was successful, process it
   * @returns aan observable object that content any object
   */
  setProductsData(): Observable<any> {

    let observable = new Observable(observer => {

      this.requestsService.loadJSONData(this.dataPath)
        .pipe(finalize(() => {
          observer.complete();
        }))
        .subscribe(
          (rawData) => {
            this.processData(rawData);
            observer.next();
          },
          (error) => {            
            observer.error(error);            
          });

    });

    return observable;

  }

  /**
   * @name processData
   * @description put the data into the property of the component created for it, 
   *              adding a value for indicates if is a favorite product, 
   *              and creates the lists for brands and types of products
   * @param products array of objects
   */
  private processData(products: Array<any>): void {

    let favoritesLocal = [];

    if(this.storageService.keyExists('LOCAL', 'favorites')) {
      favoritesLocal = this.storageService.getJSONValue('LOCAL', 'favorites');
    }

    products.forEach(element => {

      let product: Product = {
        id: Number(element.id),
        name: element.name,
        brand: element.brand,
        brandImage: element["brand-image"],
        kind: element.kind,
        kindImage: element["kind-image"],
        price: Number(element.price),
        favorite: favoritesLocal.indexOf(Number(element.id)) !== -1 ? true : false
      };

      this.rawData.push(product);

      if(this.brands.indexOf(element.brand) === -1) {
        this.brands.push(element.brand)
      }

      if(this.types.indexOf(element.kind) === -1) {
        this.types.push(element.kind);
      }

    });

  }

  /**
   * @name filterData
   * @description filters the data according the options received as a parameter
   * @param filter object with the options to filter
   * @returns array of objects (the products)
   */
  filterData(filter: Filter): Array<Product> {

    if(!filter.name && !filter.price &&
      filter.brand === 'Todos' && filter.type === 'Todos') {

      if(filter.favorite) {
        return this.getRawData().filter(element => element.favorite);
      } else {
        return this.getRawData();
      }

    } else {

      return this.rawData.filter((element) => {

          let filterBrand: boolean = true;
          let filterType: boolean = true;
          let filterName: boolean = true;
          let filterPrice: boolean = true;
          let filterFavorite: boolean = true;

          if(filter.brand !== 'Todos') {
            filterBrand = element.brand === filter.brand;
          }

          if(filter.type !== 'Todos') {
            filterType = element.kind === filter.type;
          }

          if(filter.price && filter.price > 0) {
            filterPrice = element.price <= filter.price;
          }

          if(filter.name) {
            filterName = element.name.indexOf(filter.name) > -1;
          }

          if(filter.favorite) {
            filterFavorite = element.favorite;
          }

          return filterBrand && filterType && filterName && filterPrice && filterFavorite;

        });

    }
  }

  /**
   * @name orderData
   * @description orders the data according the options received as a parameter
   * @param data the data that must be ordered
   * @param options options that indicates how order the data
   * @returns array of objects (products)
   */
  orderData(data: Array<Product>, options: OrderOptions):Array<Product> {

    return data.sort((a, b) => {

      let valueA = a[options.field];
      let valueB = b[options.field];

      if(typeof valueA === 'string') {
        valueA = valueA.toUpperCase();
      }
      if(typeof valueB === 'string') {
        valueB = valueB.toUpperCase();
      }

      let result = 0;

      if(valueA > valueB) {
        result = 1;
      } else if(valueB >  valueA) {
        result = -1;
      }

      if(options.type === 'DESC') {
        result *= -1;
      }

      return result;

    });

  }

  /**
   * @name updateFavorite
   * @description updates the 'favorite' property of a product, turning upside down their value
   * @param id identificator of the product to update
   */
  updateFavorite(id: number): void {

    let index = this.getIndexFromId(id);
    this.rawData[index].favorite = !this.rawData[index].favorite;

    let favorites: Array<number> = this.rawData.filter(element => element.favorite).map(element => element.id);

    this.storageService.setJSONValue('LOCAL', 'favorites', favorites);

  }

  /**
   * @name getProductName
   * @description returns the name of a product
   * @param id id of the product
   * @returns a string
   */
  getProductName(id: number): string {
    return this.rawData[this.getIndexFromId(id)].name;
  }

  /**
   * @name getIndexFromId
   * @description searches the array index of a product by their id
   * @param id id of the product
   * @returns a number
   */
  private getIndexFromId(id: number): number {
    return this.rawData.findIndex(element => element.id === id);
  }

}
