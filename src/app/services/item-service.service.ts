import { Injectable } from '@angular/core';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  

  constructor() {
   }

   getItems() {
     return [
       {
         id : 1,
         name : "Item 1",
         description : "Sample Description 1"
         
       },
       {
        id : 2,
        name : "Item 2",
        description : "Sample Description 2"
        
      },
      {
        id : 3,
        name : "Item 3",
        description : "Sample Description 3"
        
      },
      {
        id : 4,
        name : "Item 4",
        description : "Sample Description 4"
        
      },
      {
        id : 5,
        name : "Item 5",
        description : "Sample Description 5"
        
      }

     ]
   }
}
