import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsDataService } from './products-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Assignment5-Task2';
  products: any;
  
  constructor(private prodData: ProductsDataService) {
    this.prodData.products().subscribe((data: any) => {
      console.log(data);
      this.products = data;
      
      
      this.registerForm.patchValue({
        title: this.products.title,
        rate: this.products.rating,
        cat: this.products.category,
        stock: this.products.stock,
        descp: this.products.description
      })
    });
  } 

  registerForm = new FormGroup({
    title: new FormControl(''),
    rate: new FormControl(''),
    cat: new FormControl(''),
    stock: new FormControl(''),
    descp: new FormControl('')
  });

  saveinfo() {
    console.log(this.registerForm);
  }
}
