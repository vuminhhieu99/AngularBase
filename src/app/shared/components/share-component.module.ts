import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuTooltbarComponent } from './menu-tooltbar/menu-tooltbar.component';
import { AhButtonComponent } from './ah-button/ah-button.component';
import { AhFormListComponent } from './ah-form-list/ah-form-list.component';
import { AhTextboxComponent } from './ah-textbox/ah-textbox.component';
import { AhGridComponent } from './ah-grid/ah-grid.component';



@NgModule({
  declarations: [
    MenuTooltbarComponent, 
    AhButtonComponent ,
    AhFormListComponent,
    AhTextboxComponent,
    AhGridComponent    
  ],
  imports: [   
    FormsModule,
    ReactiveFormsModule,
    CommonModule    
  ],
  exports: [
    MenuTooltbarComponent,
    AhButtonComponent,
    AhFormListComponent,
    AhTextboxComponent,
    AhGridComponent
  ]
})
export class ShareComponentModule { }
