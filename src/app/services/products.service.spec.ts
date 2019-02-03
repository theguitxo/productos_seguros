import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductsService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });

  it('Obtener lista de productos', async() => {
    const service: ProductsService = TestBed.get(ProductsService);    
    service.setProductsData().subscribe(
      (response) => {
        return expect(service.getRawData()).not.toBeNull();
      },
      (error) => fail(error)
    );
  });

});
