import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {


  // data recieving from parent 
  @Input() dataRecive:string;

  @Output() emmite=new EventEmitter();
  data:string="Verma"
  // data send to parent 
  OnClick(){
    this.emmite.emit(this.data);
  }

}
