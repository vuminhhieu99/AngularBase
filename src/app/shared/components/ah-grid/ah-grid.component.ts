import { HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModuleCode } from '../../enumaration/module-code';
import { StatusCode } from '../../enumaration/status-code';
import { baseFunction } from '../../function/function-base';
import { ResponseService, StatusResponse } from '../../models/response-service';
import { HttpService, IRequestOptions } from '../../services/http/http.service';
declare const $: any;

@Component({
  selector: 'app-ah-grid',
  templateUrl: './ah-grid.component.html',
  styleUrls: ['./ah-grid.component.scss']
})
export class AhGridComponent implements OnInit, AfterViewInit {

  private _unDestroy: Subject<any> = new Subject<any>();

  @ViewChild('jsGridDom', { static: true }) jsGrid!: ElementRef;


  @Input() moduleCode: ModuleCode = ModuleCode.Dashboard;

  pageSize: number = 10;

  //Cấu hình đầu vào của JS grid
  @Input() columns: any;

  @Input() customUrl: string = '';


  total: number = 0;
  total_pages: number = 0;

  pageIndex: number = 1;

  typeUser: string = "admin";

  from_date: string = '';

  to_date: string = '';

  page_number: number = 0;

  order_by: string = 'asc';

  @Input('searchText')
  search_name: string = '';


  @Input()
  method: string = "GET";

  // @Input()
  // rendercolumn

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.configGrid();

  }
  ngAfterViewInit(): void {
    // this.configGrid();
  }

  pageSizeChange(e: any) {  
    $(this.jsGrid.nativeElement).jsGrid("loadData");
  }

  //Cấu hình grid
  configGrid() {
    const me = this;
    $(this.jsGrid.nativeElement).jsGrid({
      height: "auto",
      width: "100%",
      filtering: false,
      sorting: false,
      autoload: true,
      paging: true,
      pageLoading: true,

      pageIndex: 1,
      pageSize: this.pageSize,
      pageButtonCount: 15,
      pagerFormat: "Show: {pageIndex} &nbsp;&nbsp; {first} {prev} {pages} {next} {last} &nbsp;&nbsp; total pages: {pageCount}",
      pagePrevText: "<",
      pageNextText: ">",
      pageFirstText: "<<",
      pageLastText: ">>",
      loadIndication: true,
      loadIndicationDelay: 200,
      loadMessage: "Please, wait...",     

      fields: me.columns,
      controller: {
        // Lấy dữ liệu từ grid
        loadData: function (filter: any) {
          var d = $.Deferred();
          if (filter.pageIndex <= 0) {
            filter.pageIndex = 1;
          }
          me.pageIndex = filter.pageIndex;
          let enpoint = '';
          if (!me.customUrl && me.moduleCode) {
            enpoint = `${me.typeUser}/${me.moduleCode.toLowerCase()}`;
          }
          else {
            enpoint = me.customUrl;
          }
          let params: any;
          params = {};
          if (!baseFunction.IsNullOrEmpty(me.from_date)) {
            params["from_date"] = me.from_date;
          }
          if (me.pageIndex) {
            params["page"] = me.pageIndex;
          }
          if (!baseFunction.IsNullOrEmpty(me.to_date)) {
            params["to_date"] = me.to_date;
          }
          if (me.pageSize > 0) {
            params["page_size"] = me.pageSize;
          }
          // if(me.page_number > 0){
          //   params.append("page_number", me.page_number.toString());
          // }
          if (!baseFunction.IsNullOrEmpty(me.order_by)) {
            params["order_by"] = me.order_by;
          }
          if (!baseFunction.IsNullOrEmpty(me.search_name)) {
            params["search_name"] = me.search_name;
          }


          if (!baseFunction.IsNullOrEmpty(enpoint)) {
            if (me.method === "GET") {
              me.httpService.get(enpoint, baseFunction.ConverParamUrl(params)).pipe(takeUntil(me._unDestroy)).subscribe((response: ResponseService) => {
                if (response.code == StatusCode.Success || response.message?.status == StatusResponse.success || response.data) {
                  const data = response.data[me.moduleCode.toLowerCase()];

                  var da = {
                    data: response.data[me.moduleCode.toLowerCase()],
                    itemsCount : response.data['total']
                  }
                  d.resolve(da);
                  // d.resolve(response.data[me.moduleCode.toLowerCase()]);
                  me.total = response.data['total'];
                  me.total_pages = response.data['total_pages'];

                }
              })
            }
          }
          return d.promise();
        },

        insertItem: $.noop,
        updateItem: $.noop,
        deleteItem: $.noop
      },
      rowClass: function (item: any, itemIndex: any) {

      },
      rowClick: function (args: any) { },
      rowDoubleClick: function (args: any) { },
    });
  }


}
