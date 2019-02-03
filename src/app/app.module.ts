import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { AppComponent } from './app.component';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { OptionsFilterComponent } from './components/options-filter/options-filter.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ListComponent } from './components/list/list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';
import { MessagesBoxComponent } from './components/messages-box/messages-box.component';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    ModalContainerComponent,
    LoadingSpinnerComponent,
    OptionsFilterComponent,
    PaginatorComponent,
    ListComponent,
    FavoritesListComponent,
    MessagesBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
