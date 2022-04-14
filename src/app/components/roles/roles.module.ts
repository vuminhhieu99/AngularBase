import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { ShareComponentModule } from 'src/app/shared/components/share-component.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [RolesComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    TranslateModule,
    ShareComponentModule
  ]
})
export class RolesModule { }
