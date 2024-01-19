import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  // reciveing Data
  @Input() datarecive:string;

  // sending data
  @Output() customEvent = new EventEmitter();

  name:string = "Verma";
  onClick(){
    this.customEvent.emit(this.name);
  }

}
