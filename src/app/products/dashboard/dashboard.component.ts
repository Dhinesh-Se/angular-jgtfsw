import { Component, OnInit } from '@angular/core';
import { ProductCountComponent } from './product-count.component';
@Component({
  standalone:true,
  imports:[ProductCountComponent],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}