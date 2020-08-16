import { CartItemsModel } from '../../models/cart-items';
import { Component, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receipt',
  providers: [FileSaverService],
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  public fileName: string;
  public receipt: {}[];
  public receipt2: string;
  public text: CartItemsModel[] = [];
  
  constructor(private _FileSaverService: FileSaverService, private router: Router) { }

  ngOnInit() {
    this.text = JSON.parse(localStorage.getItem("currentCartItems"));
    this.receipt = this.text.map(p => {
      return {
        productName: p.productName,
        quantity: p.quantity,
        price: p.price
      }
    });
    this.receipt2 = JSON.stringify(this.receipt);
    this.receipt2 = this.receipt2.split('},').join("},\r\n");

  }
  //saving
  public onDown(type: string) {
    const fileName = `receipt.${type}`;
    const fileType = this._FileSaverService.genType(fileName);
    const txtBlob = new Blob([this.receipt2 as unknown as BlobPart], { type: fileType });
    this._FileSaverService.save(txtBlob, fileName);
  };
  public confirm() {
    localStorage.removeItem("theCart");
    localStorage.removeItem("currentCartItems");
    this.router.navigateByUrl("/login");
  }

}
