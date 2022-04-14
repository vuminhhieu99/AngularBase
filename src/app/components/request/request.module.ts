import { RequestComponent } from './request.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { ShareComponentModule } from 'src/app/shared/components/share-component.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    RequestComponent
  ],
  imports: [  
    CommonModule,
    RequestRoutingModule,
    TranslateModule,
    ShareComponentModule
  ]
})
export class RequestModule { }
