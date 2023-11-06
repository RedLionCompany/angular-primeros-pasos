import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public listName:string[] = ["Superman", "Wonder woman", "Batman", "Flash","Acuaman"];
  public itemToDelete?:string ;

  deleteItem():void{
    var aa = this.listName.pop();
    this.itemToDelete = aa;
  }

}
