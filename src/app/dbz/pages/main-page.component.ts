import { Component } from "@angular/core";
import { SalesLine } from '../interfaces/salesLine.interface';
import { DbzService } from '../services/dbz.service';





@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor (private dbzService: DbzService){}


    get characters():SalesLine[] {
        return [...this.dbzService.salesLines];
    }

    addCharacter(character:SalesLine):void{
        this.dbzService.addCharacter(character);
    }

    deleteCharacterById(id:string):void{
        this.dbzService.deleteCharacterById(id);
    }
}
