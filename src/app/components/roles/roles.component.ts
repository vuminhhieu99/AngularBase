import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from 'src/app/shared/components/base-list/base-list.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent extends BaseListComponent implements OnInit {

  columns = [
    { name: "description", type: "text", width: 450 },
    { name: "name", type: "text", width: 250 },       
    { type: "control" }
  ]

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  /**
   * Thêm quyền
   * vmhieu
   */
  addRole(){
;
  }

}
