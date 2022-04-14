import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicRequestRoutingModule } from './topic-request-routing.module';
import { TopicRequestComponent } from './topic-request.component';
import { ShareComponentModule } from 'src/app/shared/components/share-component.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [TopicRequestComponent],
  imports: [
    CommonModule,
    TopicRequestRoutingModule,
    TranslateModule,
    ShareComponentModule
  ]
})
export class TopicRequestModule { }
