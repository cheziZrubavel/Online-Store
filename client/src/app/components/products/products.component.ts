import { cartsService } from './../../services/carts.service';
import { CartItemsModel } from './../../models/cart-items';
import { CartModel } from './../../models/cart';
import { CategoriesService } from './../../services/categories.service';
import { CategoryModel } from './../../models/category';
import { ProductModel } from './../../models/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  public viewMode = 'all-products';
  public category: CategoryModel[] = [];
  public allProducts: ProductModel[] = [];
  public productsByCategoryArr: ProductModel[] = [];
  public countVal = 1;
  public chosenProduct: CartItemsModel;
  public cartArr: CartItemsModel[] = [];
  public theCart: CartModel;
  public total: Number = 0;
  public currentCartItems: String;

  constructor(private productService: ProductsService,
    private categoryService: CategoriesService,
    private cartService: cartsService) { }

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
    if (localStorage.getItem("currentCartItems")){
      this.cartArr.push(...JSON.parse(localStorage.getItem("currentCartItems")));
    }
    this.cartService.createNewCart(user.user[0], user.token).subscribe(
      res => {
      this.theCart = JSON.parse(JSON.stringify(res)),
      localStorage.setItem("theCart", JSON.stringify(res))
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

  public chooseProduct(product: CartItemsModel) {
    this.chosenProduct = product;
  };

  public addToCart() {
    this.chosenProduct = Object.assign(this.chosenProduct, {
      quantity: this.countVal,
      cartId : this.theCart._id
    });
    this.cartArr.push(this.chosenProduct);
    this.total = this.cartArr.reduce((accum, item) => accum + item.price * item.quantity, 0);
    localStorage.setItem("currentCartItems", JSON.stringify(this.cartArr));
  };

  public emptyCart() {
    while (this.cartArr.length > 0) {
      this.cartArr.pop();
    };
    this.total = 0;
    localStorage.removeItem("currentCartItems");
  };

  public deleteProduct(product: ProductModel) {
    let id = product._id;
    let index = this.cartArr.findIndex((element) => element._id === id);
    this.cartArr.splice(index, 1);
    this.total = this.cartArr.reduce((accum, item) => accum + item.price * item.quantity, 0);
    localStorage.setItem("currentCartItems", JSON.stringify(this.cartArr));
  };
}
