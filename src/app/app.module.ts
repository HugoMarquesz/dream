import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { RouterModule } from '@angular/router';
import { UniqueItemComponent } from './unique-item/unique-item.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    UniqueItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: ItemComponent},
      { path: '**', redirectTo: 'home' },
      {path: 'item/:id',component: UniqueItemComponent},
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
