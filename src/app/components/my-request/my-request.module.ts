import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRequestRoutingModule } from './my-request-routing.module';
import { MyRequestComponent } from './my-request.component';
import { ShareComponentModule } from 'src/app/shared/components/share-component.module';


@NgModule({
  declarations: [
    MyRequestComponent
  ],
  imports: [
    CommonModule,
    MyRequestRoutingModule    
  ]
})
export class MyRequestModule { }
