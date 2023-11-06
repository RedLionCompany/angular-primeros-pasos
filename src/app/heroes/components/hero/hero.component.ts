import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'Spiderman';
  public age:number = 18;


  get capitalizeName(){
    return this.name.toUpperCase();
  }

  getDescription():string {
    return `El súper heroe ${ this.name } tiene ${ this.age } años` 
  }

  changeName():void {
    this.name = 'NICOLE Y YESID, SON ESPOSOS Y SE AMAN X SIEMPRE, PASAN TIEMPO JUNTOS Y SE ADORAN'
  }

  changeAge():void {
    this.age = 369
  }

  reset() {
    this.name = 'Spiderman';
    this.age = 18;
  }
}
