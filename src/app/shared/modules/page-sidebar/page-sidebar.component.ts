import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { baseFunction } from '../../function/function-base';
import { ModuleService } from '../../services/module/module.service';

declare var $: any;

@Component({
  selector: 'app-page-sidebar',
  templateUrl: './page-sidebar.component.html',
  styleUrls: ['./page-sidebar.component.scss']
})
export class PageSidebarComponent implements OnInit, OnDestroy {

  private _unDestroy: Subject<any> = new Subject<any>();

  // dữ liệu module cho sidebar
  modules: Array<any> = [];

  test: string = 'a';
  constructor(
    private moduleService: ModuleService,
    private zone: NgZone,
    private el: ElementRef,
    private translate: TranslateService,
    private router: Router) {    
  }

  ngOnDestroy(): void {
    baseFunction.unDestroy(this._unDestroy);
  }

  ngOnInit(): void {
    const me = this;
    this.moduleService.get().pipe(takeUntil(this._unDestroy)).subscribe(modules => {      
      me.modules = modules;
      var router = me.router.routerState.snapshot.url;
    });
    me.zone.runOutsideAngular(() => {
      $(window).resize(function () {
        if ($(window).width() <= 992) {
          $(me.el.nativeElement).find('.page-sidebar').addClass('sidebar-mini');
        }
        else {
          $(me.el.nativeElement).find('.page-sidebar').removeClass('sidebar-mini');
        }
      });
    });
    me.test = me.translate.instant("MTA");
  }
  showSideBar() {
    const me = this;
    me.zone.runOutsideAngular(() => {
      if ($(me.el.nativeElement).find('.page-sidebar').hasClass('sidebar-mini')) {
        $(me.el.nativeElement).find('.page-sidebar').removeClass('sidebar-mini');
      }
      else {
        $(me.el.nativeElement).find('.page-sidebar').addClass('sidebar-mini');
      }
    });
  }

  /**
   * Chọn modules
   * vmhieu 12.3.2022
   */
  chooseModule(module: any){    
    this.modules.forEach(m => {
      m.active = false;
    })
    module.active = true;
  }
}