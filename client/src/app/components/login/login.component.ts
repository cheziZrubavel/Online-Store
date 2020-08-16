import { OrdersService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from './../../models/product';
import { ProductsService } from './../../services/products.service';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/models/order';
import { UserModel } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: boolean;
  public cart: boolean;
  public loginForm: FormGroup;
  public allProducts: ProductModel[] = [];
  public allOrders: OrderModel[] = [];
  public message: string;

  constructor(private myUsersService: UsersService,
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private orderService: OrdersService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      Identity: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],

    });
    this.productService.getAllProducts().subscribe(
      res => {
        this.allProducts = JSON.parse(JSON.stringify(res));
      },
      err => alert(err.error)
    );
    this.orderService.getAllOrders().subscribe(
      res => {
        this.allOrders = JSON.parse(JSON.stringify(res));
      },
      err => alert(err.error)
    );

    if (localStorage.getItem("user") && localStorage.getItem("theCart") && localStorage.getItem("currentCartItems")) {
      // If there is open cart:
      this.cart = true;
      this.user = true;
      let cartDetails = JSON.parse(localStorage.getItem("currentCartItems"));
      let openCart = JSON.parse(localStorage.getItem("theCart"));
      this.message = "Hi, You have open cart with total price: " + JSON.stringify(cartDetails[0].price) + " at Date: " + openCart.creationDate;
    } else if (localStorage.getItem("user") && !localStorage.getItem("theCart")) {
      // If there is not open cart:
      this.cart = false;
      this.user = true;
      let loggedInUser = JSON.parse(localStorage.getItem("user"));
      this.orderService.getOrderByUser(loggedInUser.user[0]._id).subscribe(
        res => {
          if (res) {
            this.message = "Hi, Your last purchase total price: " + JSON.stringify(res.totalPrice) + " at Date: " + res.shippingDate
          } else this.message = "Welcome to your first purchase!";
        }
      );
    }
    else this.message = "Welcome to your first purchase!";
  }

  public login(username: string, password: string) {

    const credentials = {
      "username": username,
      "password": password
    };
    this.myUsersService
      .postLoggedInUser(credentials)
      .subscribe(loggedInUser => {
        localStorage.setItem("user", JSON.stringify(loggedInUser))

        // If user is admin:
        if (localStorage.getItem("user")) {
          let admin = JSON.parse(localStorage.getItem("user"));
          if (admin.user[0].role === 'admin') {
            this.router.navigate(['admin']);
          };
        };
        this.user = true;
        // If there is open cart:
        if (localStorage.getItem("theCart") && localStorage.getItem("currentCartItems")) {
          this.cart = true;
          let cartDetails = JSON.parse(localStorage.getItem("currentCartItems"));
          let openCart = JSON.parse(localStorage.getItem("theCart"));
          this.message = "Hi, You have open cart with total price: " + JSON.stringify(cartDetails[0].price) + " at Date: " + openCart.creationDate;
        } else if (!localStorage.getItem("theCart") && localStorage.getItem("user")) {
          // If there is not open cart:
          this.cart = false;
          let loggedIn = JSON.parse(localStorage.getItem("user"));
          this.orderService.getOrderByUser(loggedIn.user[0]._id).subscribe(
            res => {
              if (res) {
                this.message = "Hi, Your last purchase total price: " + JSON.stringify(res.totalPrice) + " at Date: " + res.shippingDate
              } else this.message = "Welcome to your first purchase!";
            }
          );
        };
      },
        err => alert(err.message));
  };
  public goToProducts() {
    this.router.navigate(['products']);
  }
}
