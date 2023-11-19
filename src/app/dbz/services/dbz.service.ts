import { Injectable } from '@angular/core';
import { SalesLine } from '../interfaces/salesLine.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public salesLines:SalesLine[] = [{
    id: uuid(),
    name: 'Papa',
    price: 70000,
    quantity: 150
},{
    id: uuid(),
    name: 'Zanahoria',
    price: 170000,
    quantity: 15
},{
    id: uuid(),
    name: 'Repollo',
    price: 170000,
    quantity: 15
},{
  id: uuid(),
  name: 'Aguacate',
  price: 170000,
    quantity: 15
},{
    id: uuid(),
    name: 'Mora',
    price: 170000,
    quantity: 15
}];

 addCharacter(salesLine: SalesLine):void {
   const newCharacter: SalesLine = { id: uuid(), ...salesLine }
    this.salesLines.push(newCharacter);   
 } 

//  onDeleteCharacterMain(index:number):void {
//     console.log(index);
//     this.characters.splice(index,1);
//  }

deleteCharacterById(id:string):void {
    this.salesLines = this.salesLines.filter(character => character.id !== id);
}

}
