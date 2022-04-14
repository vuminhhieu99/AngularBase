import { Component, Directive, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ModuleCode } from '../../enumaration/module-code';
import { baseFunction } from '../../function/function-base';

@Directive()
export abstract class BaseListComponent implements OnInit, OnDestroy {

  private _unDestroy: Subject<any> = new Subject<any>();

  public moduleCode = ModuleCode;
  isCheckboxList = false;

  // tìm kiếm của màn hình danh sách
  searchText = '123';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    baseFunction.unDestroy(this._unDestroy);
  }

}
