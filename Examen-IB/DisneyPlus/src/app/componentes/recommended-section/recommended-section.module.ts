import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendedSectionComponent } from './recommended-section/recommended-section.component';



@NgModule({
  declarations: [
    RecommendedSectionComponent
  ],
  exports: [
    RecommendedSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecommendedSectionModule { }
