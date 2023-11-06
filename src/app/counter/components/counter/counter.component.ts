import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
        <h1>Hello my Beautiful World, {{  title }}</h1>
        <hr>
        <p>This is my first goal, counter of times: {{ count }} </p>

        <button (click)="add()">+1</button>
        <button (click)="reset()">Reset</button>
        <button (click)="less()">-1</button>
    `,

})
export class CounterComponent {

    public title: String = 'I am here to be the best person in the world';

    public count: number = 10;
  
    add(): void {
      this.count = this.count + 1;
    }
  
    less(): void {
      this.count = this.count -1;
    }
  
    increase( value: number): void {
      this.count = this.count + value;
    }
  
    reset(): void {
      this.count = 10;
    }


}