import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {

  @Input('page') page: number; // currently page
  @Input('numItems') numItems: number; // total of registers (of the list that is showing)
  @Input('forPage') forPage: number; // items for page in the list

  // event to trigger when the user changes the page
  @Output('changePage') changePage: EventEmitter<number> = new EventEmitter<number>();

  numPages: number; // number of pages
  pageButtons: Array<number>; // list of buttons to show

  constructor() { }

  /**
   * @name ngOnChanges
   * @description updates the values of the object when a changes as detected
   */
  ngOnChanges(): void {         
    this.initPaginatorValues();
  }

  /**
   * @name initPaginatorValues
   * @description calculates the values for number of pages and the list of buttons
   */
  initPaginatorValues(): void {    
    this.calculateNumPages();
    this.calculatePageButtons();
  }

  /**
   * @name calculateNumPages
   * @description calculates the number of pages
   */
  calculateNumPages(): void {    
    this.numPages = Math.ceil(this.numItems / this.forPage);
  }

  /**
   * @name calculatePageButtons
   * @description according the values received and calculated, makes a list with the buttons needed to the pagination
   */
  calculatePageButtons(): void {
    this.pageButtons = [];
    
    let start: number = null;
    let end: number = null;
    
    switch(this.numPages) {
      case 1:
        start = end = 1;
      break;
      case 2:
        start = 1;
        end = 2;
      break;
      default:
        if(this.page === 1) {
          start = 1;
          end = 3;
        } else if(this.page === this.numPages) {
          start = this.numPages - 2;
          end = this.numPages;
        } else {
          start = this.page - 1;
          end = this.page + 1;
        }
      break;
    }

    for(let i = start; i <= end; i++) {
      this.pageButtons.push(i);
    }

  }

  /**
   * @name goToPage
   * @description updates the current page and the list of buttons to show
   * @param page the new current page
   */
  goToPage(page: number) {
    this.page = page;
    this.calculatePageButtons();
    this.changePage.emit(this.page);
  }
  
}
