import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent1',
  standalone: true,
  imports: [FormsModule,ChildComponent],
  templateUrl: './parent1.component.html',
  styleUrl: './parent1.component.css'
})
export class Parent1Component {
    Stock :number= 1;

    name:string ="";
    getChange(el:any){
      this.name=el.target.value;
    }
    OnClick(el:any){
      console.log(el.target.value);

    }

    // Sending data to child
    data:string="hello from parent";

    // reciving data from child
    greeting(e){
      console.log("helo"+e);
      
    }
}
