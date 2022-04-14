import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ah-textbox',
  templateUrl: './ah-textbox.component.html',
  styleUrls: ['./ah-textbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AhTextboxComponent),
      multi: true
    }
  ]
})
export class AhTextboxComponent implements  ControlValueAccessor,OnInit {


  @Input()
  isHorizontal: boolean = false;

  @Input()
  isShowLabel: boolean = true;

  @Input()
  label: string ='';

  @Input() 
  name: string = "";

  @Input()
  value: any;

  @Output()
  valueChange = new EventEmitter<any>();

  @Input()
  error: any = {
    isError: false,
    text: ''
  }
  @Input()
  icon : string = '';

  @Input()
  iconRight: boolean = false;

  @Input()
  iconLeft: boolean = false;

 
  dataChanged(value: any){
    this.valueChange.emit(value);
  }
  
  onChange = (value: any)=>{};


  onTouched = (value: any)=>{};
  constructor() { }
  
  writeValue(obj: any): void {
    console.log("value change")
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  ngOnInit(): void {

  }

}
