import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  searchText:any;

  p: number = 1;
  placeholder: any = {}

  public posts!: Observable<object>;

  constructor(private http: HttpClient, private route:Router){}

  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(d=> console.log(d));

    this.posts = this.http.get('https://jsonplaceholder.typicode.com/posts')
  }


  navigateToItem(itemId:number){
    this.route.navigateByUrl(`/item/${itemId}`)
  }




}





