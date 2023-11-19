import { Component, EventEmitter, Output } from '@angular/core';
import { SalesLine } from '../../interfaces/salesLine.interface';



@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<SalesLine> = new EventEmitter();


  public salesLine:SalesLine = {
    name: '',
    quantity: 0,
    price: 90000
  }

  transferCharacter():void{
      console.log(this.salesLine);
      if (this.salesLine.name.length === 0) return;
      
      this.onNewCharacter.emit(this.salesLine);

      this.salesLine = {name: '', price: 90000, quantity: 0}
  }

}
