import { CategoriesService } from './../../services/categories.service';
import { CategoryModel } from './../../models/category';
import { ProductModel } from './../../models/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  public addProductForm: FormGroup;
  public editProductForm: FormGroup;
  public viewMode = 'all-products';
  public category: CategoryModel[] = [];
  public allProducts: ProductModel[] = [];
  public productsByCategoryArr: ProductModel[] = [];
  public countVal = 1;
  public chosenProduct: ProductModel;
  public showEditForm: boolean = false;
  public productDetails: ProductModel;
  public imageFile: File;
  nrSelect = "5ef8636cd61ec32ac0e71990"

  constructor(private productService: ProductsService, private categoryService: CategoriesService, private http: HttpClient) { 
    
    this.addProductForm = new FormGroup({
      name: new FormControl(''),   
      id: new FormControl(''),   
      price: new FormControl(''),   
      image: new FormControl(''),   
      category: new FormControl('')
   });
   this.editProductForm = new FormGroup({
    name: new FormControl(''),   
    id: new FormControl(''),   
    price: new FormControl(''),   
    image: new FormControl(''),   
    category: new FormControl('')
 });
  }

  ngOnInit() {
    //Toggle Click Function
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    this.productService.getAllProducts().subscribe(
      res => {
        this.allProducts = JSON.parse(JSON.stringify(res));
      },
      err => alert(err.error)
    );
    let user = JSON.parse(localStorage.getItem("user"));
    this.categoryService.getAllCategories(user.token).subscribe(
      res => {
        this.category = JSON.parse(JSON.stringify(res));
      }
    );
    
  };

  public productsByCategory(c) {
    this.viewMode = c.categoryName;
    switch (c.id) {
      case '5ef86303d61ec32ac0e71960':
        this.productsByCategoryArr = this.allProducts.filter((i) => i.categoryId === "5ef86303d61ec32ac0e71960");
        break;
      case '5ef86351d61ec32ac0e71986':
        this.productsByCategoryArr = this.allProducts.filter((i) => i.categoryId === "5ef86351d61ec32ac0e71986");
        break;
      case '5ef8636cd61ec32ac0e71990':
        this.productsByCategoryArr = this.allProducts.filter((i) => i.categoryId === "5ef8636cd61ec32ac0e71990");
        break;
      case '5ef8638fd61ec32ac0e71996':
        this.productsByCategoryArr = this.allProducts.filter((i) => i.categoryId === "5ef8638fd61ec32ac0e71996");
        break;
      default:
        break;
    }
  }
  public searchProduct(e: Event) {
    let target = e.target as HTMLInputElement;
    this.productsByCategoryArr = this.allProducts.filter(el => el.productName.toLowerCase().indexOf(target.value.toLowerCase()) !== -1);
    this.viewMode = 'search';
  };

  public chooseProduct(product: ProductModel) {
    this.chosenProduct = product;
  };

  public addNew() {
    
    const formData = new FormData();
    formData.append('name', this.addProductForm.get('name').value);
    formData.append('id', this.addProductForm.get('id').value);
    formData.append('price', this.addProductForm.get('price').value);
    formData.append('category', this.addProductForm.get('category').value);
    formData.append('image', this.imageFile);
     const options = {
      method: "POST",
      body: formData
  };
  fetch("http://localhost:3000/api/products/add-product", options)
      .then(() => alert("product added!"))
      .catch(err => alert(err.message));
  };

  public uploadImage(e: Event){
    let target = e.target as HTMLInputElement;
    if(target.files && target.files[0]){
      this.imageFile = target.files[0];
    }
  };

  public fillEditForm(product: ProductModel) {
    this.showEditForm = true;
    this.productDetails = {
      _id: product._id,
      productName: product.productName,
      categoryId: product.categoryId,
      price: product.price,
      image: product.image 
    };
  };

  public editProduct() {
    
    const formData = new FormData();
    formData.append('name', this.editProductForm.value.name);
    formData.append('id', this.productDetails._id);
    formData.append('price', this.productDetails.price);
    formData.append('category', this.productDetails.categoryId);
    formData.append('image', this.imageFile);
     const options = {
      method: "PUT",
      body: formData
  };
  fetch("http://localhost:3000/api/products/edit-product", options)
      .then(() => alert("product edited!"))
      .catch(err => alert(err.message));
  };
  

}
  