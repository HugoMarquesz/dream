import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'unique-item',
  templateUrl: './unique-item.component.html',
  styleUrls: ['./unique-item.component.css']
})
export class UniqueItemComponent implements OnInit{
  itemId: string
  item: any

  constructor(private http: HttpClient,private _Activatedroute:ActivatedRoute) {
  this.itemId = this._Activatedroute.snapshot.paramMap.get("id");

   }



  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts/' + this.itemId)
      .subscribe(plc=> {
        console.log(plc)
        this.item = plc
      });

  }


}




