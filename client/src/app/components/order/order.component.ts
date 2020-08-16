import { OrderModel } from './../../models/order';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public orderForm: FormGroup;
  public cartArr = Array();
  public total: Number = 0;
  public searchResult = Array();
  public searchMode: boolean = false;
  public order: OrderModel;
  public submitted = false;
  public startIndex;
  public endLength;
  public matchingString;
  public filter;
  public content;

  constructor(private router: Router) {

    this.orderForm = new FormBuilder().group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      shippingDate: ['', Validators.required],
      creditCard: ['', Validators.required],
    });
  };

  ngOnInit() {
    if ((localStorage.getItem("currentCartItems")) && JSON.parse(localStorage.getItem("currentCartItems")).length > 0) {
      this.cartArr.push(...JSON.parse(localStorage.getItem("currentCartItems")));
      this.total = this.cartArr.reduce((accum, item) => accum + item.price * item.quantity, 0);
    };
  };

  public searchProduct(e: Event) {
    let target = e.target as HTMLInputElement;
    this.searchResult = this.cartArr.filter(el => {
      this.startIndex = el.productName.toLowerCase().indexOf(target.value.toLowerCase());
      if (this.startIndex != -1) {
        this.endLength = target.value.length;
        this.matchingString = el.productName.substr(this.startIndex, this.endLength);
        return el.productName.replace(this.matchingString, "<span>" + this.matchingString + "</span>");
      }
    });
    this.searchMode = true;
    this.searchResult[0].productName.replace(this.matchingString, "<span style='background-color: yellow;'>" + this.matchingString + "</span>");

  };
  public highlight(c) {

    this.content = c;
    this.searchMode = true;
    return this.content.replace(new RegExp(this.filter, "gi"), match => {
      console.log(match);
    });
  }
  public setDetails() {
    let details = JSON.parse(localStorage.getItem("user")).user[0];
    this.orderForm.patchValue({
      city: details.city,
      street: details.street
    })
  }
  
  // convenience getter for easy access to form fields
  get f2() { return this.orderForm.controls; }

  public performOrder() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.orderForm.invalid) {
      return;
    };
    let user = JSON.parse(localStorage.getItem("user"));
    let cart = JSON.parse(localStorage.getItem("theCart"));
    this.order = {
      "user_id": user.user[0]._id,
      "cart_id": cart._id,
      "totalPrice": this.total,
      "city": this.orderForm.get('city').value,
      "street": this.orderForm.get('street').value,
      "shippingDate": this.orderForm.get('shippingDate').value,
      "orderDate": new Date(),
      "fourDigitOfCreditCard": this.orderForm.get('creditCard').value
    };

    const options = {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.order)
    };
    fetch("http://localhost:3000/api/products/add-order", options)
      .then(() => {
        alert("order added!"),
          this.router.navigateByUrl("/receipt")
      })
      .catch(err => alert(err.message));
  };
  
}
