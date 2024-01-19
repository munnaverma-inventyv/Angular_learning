import { Component } from '@angular/core';

@Component({
  selector: 'app-template-ref-variable',
  standalone: true,
  imports: [],
  templateUrl: './template-ref-variable.component.html',
  styleUrl: './template-ref-variable.component.css'
})
export class TemplateRefVariableComponent {
  data:string;
  getDataFromInput(data:HTMLInputElement){
    // console.log(data);
    
    this.data=data.value;
    // console.log(this.data);
    
  }
}
