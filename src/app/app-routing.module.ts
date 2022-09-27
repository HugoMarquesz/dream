import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';



@NgModule({
  imports: [
     RouterModule.forRoot([
    {path: 'item/:id',component: ItemComponent},
  ])],

  exports: [RouterModule]
})

export class AppRoutingModule { }
