import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ParentComponent } from './parent/parent.component';
import { TemplateRefVariableComponent } from './template-ref-variable/template-ref-variable.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import  {SubscribeService}  from './subscribe.service';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,ProductListComponent,ParentComponent,TemplateRefVariableComponent,ViewChildrenComponent,TemplateDrivenFormComponent,Parent1Component,Parent2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[SubscribeService]
})
export class AppComponent {
  title = 'angular_learning';
  private name:string;
  constructor(private subService:SubscribeService){
    this.name="verma"
  }

  subscribe(){
    // Normal way tu use Subscribe.  (without dependency injection)
    //  let subService = new SubscribeService();
    //  subService.onSubscribe();

    // ---with dependency injection ---  (In normal way AppComponent is dependent on SubscribeService() to be instantiate it means AppComponent here tightly bound with SubscribeService So its a bad practice)
    // istead of doing it we can use dependency injection here we can say to angular to instantiate our services we mannualy not have to instantiate it . angular will do for us.

    this.subService.onSubscribe();
    console.log(this.name);
    
  }
}
