import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from 'src/app/shared/components/base-list/base-list.component';

@Component({
  selector: 'app-topic-request',
  templateUrl: './topic-request.component.html',
  styleUrls: ['./topic-request.component.scss']
})
export class TopicRequestComponent extends BaseListComponent implements OnInit {

  columns= [
    { name: "name", type: "text", width: 250 },       
    { name: "description", type: "text", width: 450 },   
    { type: "control" }
  ]
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  addTopicRequest(){
    ;
  }
}
