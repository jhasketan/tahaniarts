import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryListComponent } from './components/query-list/query-list.component';
import { QueryRoutingModule } from './query.routing';



@NgModule({
  declarations: [QueryListComponent],
  imports: [
    CommonModule,
    QueryRoutingModule
  ]
})
export class QueryModule { }
