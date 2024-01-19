import { Component } from '@angular/core';
import { ChidComponent } from './chid/chid.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChidComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  // transfer to Child
  data :string = "Parent Data";

  // Reciving Data from child
  parentFunc(data:string){
    console.log(data);
    
  }
}
