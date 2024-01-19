import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-children',
  standalone: true,
  imports: [],
  templateUrl: './view-children.component.html',
  styleUrl: './view-children.component.css'
})
export class ViewChildrenComponent  {


  @ViewChildren('inputText') inputTextref : QueryList<ElementRef>=undefined;

  SubmitName(){
    
    this.inputTextref.forEach((element) => {
      console.log(element.nativeElement.value);
    });
  }
  
}
