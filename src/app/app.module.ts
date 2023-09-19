import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemServiceService } from './services/item-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ItemServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
