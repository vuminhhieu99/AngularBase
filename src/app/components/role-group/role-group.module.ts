import { RoleGroupComponent } from './role-group.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleGroupRoutingModule } from './role-group-routing.module';


@NgModule({
  declarations: [RoleGroupComponent],
  imports: [
    CommonModule,
    RoleGroupRoutingModule
  ]
})
export class RoleGroupModule { }
