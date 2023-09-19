import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/item';
import { ItemServiceService } from 'src/app/services/item-service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit  {
  public ItemList : Item[]= []

  constructor(private itemService : ItemServiceService){}

  ngOnInit(): void {
    try {
      this.ItemList = this.itemService.getItems()
    } catch (error) {
      console.log(error)
      throw new Error('En error happened');
    }
      
  }
}
