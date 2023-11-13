import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters:Character[] = [{
    name: 'Trunks',
    power: 1200
},{
    name: 'Goku',
    power: 963000
},{
    name: 'Vegeta',
    power: 693000
},{
    name: 'Gotten',
    power: 1100
}];

 onNewCharacterMain(character: Character):void {
    this.characters.push(character);   
 } 

 onDeleteCharacterMain(index:number):void {
    console.log(index);
    this.characters.splice(index,1);
 }

}
