import { Component, OnInit } from '@angular/core';
import { DataService } from '../../svc/data.service';

@Component({
  selector: 'app-linkfeed',
  templateUrl: './linkfeed.component.html',
  styleUrls: ['./linkfeed.component.css']
})
export class LinkfeedComponent implements OnInit {
  data: Array<Object>;
  constructor(private ds: DataService) {
    this.data = this.ds.getData();
  }

  ngOnInit() {
  }

  



}