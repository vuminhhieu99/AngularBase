import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from 'src/app/shared/components/base-list/base-list.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent extends BaseListComponent implements OnInit {

  columns = [
    {
      name: "question", type: "text", width: 350,
      itemTemplate: function (value: any, item: any) {
        return `<div class="line-text-3 break-word" title="${value}">${value}</div>`;
      },
    },
    {
      name: "answer", type: "text", width: 450,
      itemTemplate: function (value: any, item: any) {
        return `<div class="line-text-3 break-word" title="${value}">${value}</div>`;
      },
    },
    { type: "control" }
  ]
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  addRequest() {
    ;
  }
}
