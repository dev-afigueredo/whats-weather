import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { BookmarksPage } from './container/bookmarks.page';
import { bookmarkReducer } from './state/bookmarks.reducer';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
  ],
  declarations: [
    BookmarksPage,
  ]
})
export class BookmarksModule { }