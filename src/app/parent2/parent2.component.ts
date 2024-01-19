import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-parent2',
  standalone: true,
  imports: [FormsModule,Child2Component],
  templateUrl: './parent2.component.html',
  styleUrl: './parent2.component.css'
})
export class Parent2Component {

  Stock:number = 0;

  Onchange(el:any){
    console.log(el.target.value);
    console.log(el); 
  }

  name:string=""

  // data sending to child
  data:string = "data from parent"

  //reciviend data from parent 
  reciveDta(e:any){
    console.log(e);
    
  }
}
