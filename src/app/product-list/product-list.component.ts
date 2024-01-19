import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SearchComponent,CommonModule,ProductComponent,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    // making one product object
    name="Munna Verma";
     product = [{
      name:"Samsung Galaxy",
      price : 50000,
      id:1,
      discount: 8.5,
      inStock : 2
  },{
    name:"Samsung ",
    price : 5000,
    id:2,
    discount: 9.5,
    inStock : 5
}]
    addToCartItem:number=0;
    boolVal:boolean=false;
    // discountPrice(){
      // return this.product.price-(this.product.price*this.product.discount/100)
    // }
    decrementItem(){
      if(this.addToCartItem > 0){

        this.addToCartItem--;
      }else{
        this.boolVal=true;
        
      }
    }
    // incrementItem(){
    //   if(!(this.product.inStock<=this.addToCartItem)){
    //     this.addToCartItem++;
    //   }
    // }

    // Radio Button Code 
    selectedFileRadioButton:string='true'
    changeInput=''
}
