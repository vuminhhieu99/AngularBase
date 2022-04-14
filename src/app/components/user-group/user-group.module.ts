import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserGroupRoutingModule } from './user-group-routing.module';
import { UserGroupComponent } from './user-group.component';


@NgModule({
  declarations: [UserGroupComponent],
  imports: [
    CommonModule,
    UserGroupRoutingModule
  ]
})
export class UserGroupModule { }
