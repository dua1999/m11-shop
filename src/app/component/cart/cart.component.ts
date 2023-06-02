import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:any=[]
  public totalPrice!: number 

  constructor(private cartService: CartService){

  }
  ngOnInit(): void {
    this.cartService.getproduct()
    .subscribe(res=> {
      this.products =res
      this.totalPrice = this.cartService.getTotalPrice()
    })
  }

  removeItem(item:any){
    this.cartService.removeCartItem(item)
  }
 

}
