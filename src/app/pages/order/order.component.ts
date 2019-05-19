import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  public billingForm: FormGroup;
  public isBillingFormSubmit = false;
  constructor() { 
    this.billingForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
    });
  }

  ngOnInit() {
  }

  submitOrder() {
    this.isBillingFormSubmit = true;
    console.log(this.billingForm);
  }
}
