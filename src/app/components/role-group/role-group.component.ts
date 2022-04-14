import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-group',
  templateUrl: './role-group.component.html',
  styleUrls: ['./role-group.component.scss']
})
export class RoleGroupComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
