import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from './Components/section-header/section-header.component';

@NgModule({
  declarations: [
    SectionHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SectionHeaderComponent

  ]
})
export class SharedModule { }