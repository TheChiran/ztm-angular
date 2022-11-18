import { BooksEffect } from './store/books.effect';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bookReducer } from './store/books.reducer';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature('mybooks', bookReducer),
    EffectsModule.forFeature([BooksEffect]),
  ],
})
export class BooksModule {}
