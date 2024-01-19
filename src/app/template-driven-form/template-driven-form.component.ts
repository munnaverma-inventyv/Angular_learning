import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  @ViewChild('FormData') data :NgForm;
  OnSubmit(){
    console.log(this.data);
    console.log(this.data.controls['email'].value);
    
    console.log(this.data.value.email);
    console.log(this.data.value.password);
    
    
  }
}
