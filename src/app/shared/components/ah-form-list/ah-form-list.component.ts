import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ah-form-list',
  templateUrl: './ah-form-list.component.html',
  styleUrls: ['./ah-form-list.component.scss']
})
export class AhFormListComponent implements OnInit {

  @Input()
  toolbar!: TemplateRef<any>;

  @Input()
  toolbarCheckbox!: TemplateRef<any>;

  @Input()
  grid!: TemplateRef<any>;

  @Input()
  sidebarRight!: TemplateRef<any>;
  constructor() { }

  /**
   * Người dùng có đang tích 1 bản ghi
   */
  @Input()
  isCheckboxList: boolean = false;

  /**
   * Show sidebar
   */
  isShowSideBarRight: boolean = true;
  ngOnInit(): void {
  }
  

}
