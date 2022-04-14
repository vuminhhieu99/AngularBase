import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicRequestComponent } from './topic-request.component';

const routes: Routes = [
  {
    path: '',
    component: TopicRequestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicRequestRoutingModule { }
