import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SalesLine } from '../../interfaces/salesLine.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

@Input()
  public charactersComponent:SalesLine[] = [{
    name: 'Papa',
    quantity: 0,
    price: 90000
  },{
    name: 'Zanahoria',
    quantity: 0,
    price: 80000
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id:string):void{
    if(!id) return;
    this.onDelete.emit(id);
  }

}
