import { Component, HostListener, Input, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-ah-button',
  templateUrl: './ah-button.component.html',
  styleUrls: ['./ah-button.component.scss']
})
export class AhButtonComponent implements OnInit {

   /**
   * icon sẽ hiển thị 
   * vmhieu 8.3.2022
   */
  @Input()
  icon: string ='';

  /**
   * Loại giao diện lấy theo boostrap
   */
   @Input()
  color = 'primary';  


  /**
   *Kiểu button lấy theo boostrap
   */
   private _type = '';
   @Input()
   get Type(){
     return this._type;
   }
   set Type(value: string){
     if(!value){
      value = '';
     }     
     this._type =`btn ${value}-${this.color}`;
   }
  
  /**
   * tên hiển thị của button
   * vmhieu 8.3.2022
   */
  @Input()
  text : string = '';

  @Output()
  btnClick: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('click', ['$event.target'])
  onCLick(btn: any){
    this.btnClick.emit(btn);
  }

  @HostBinding('style.padding')
  @Input() padding :string = '';

  constructor() { }
  

  ngOnInit(): void {
  }

}
