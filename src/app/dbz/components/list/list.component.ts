import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

@Input()
  public charactersComponent:Character[] = [{
    name: 'Vegeta',
    power: 8000
  },{
    name: 'Goku',
    power: 9630
  }];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();
  


  onDeleteCharacter(index:number):void{
    this.onDelete.emit(index);
  }

}
