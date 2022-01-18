import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection.component';



@NgModule({
    declarations: [
        CollectionComponent
    ],
    exports: [
        CollectionComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CollectionModule { }
