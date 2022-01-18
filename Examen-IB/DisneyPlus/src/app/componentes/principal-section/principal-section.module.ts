import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalSectionComponent } from './principal-section/principal-section.component';



@NgModule({
  declarations: [
    PrincipalSectionComponent
  ],
  exports: [
    PrincipalSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrincipalSectionModule { }
