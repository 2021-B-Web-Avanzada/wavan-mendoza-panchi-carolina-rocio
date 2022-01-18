import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  @Input()
  collection1='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9B76B0A70DBCC06BC622B3138A0B557CD9DE09138FC952CC809FC998A7B83C63/scale?width=400&aspectRatio=1.78&format=png'

  @Input()
  collection2='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/84E223A42FB7FAB7FE44D50ACD212AD95077BE7F3DCE644CAB279D0B64D0EDCC/scale?width=400&aspectRatio=1.78&format=png'

  @Input()
  collection3='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EADBAA522677E58EFBA29AEDB77DED928EAFADAE62DC325414A996583A1C48A6/scale?width=400&aspectRatio=1.78&format=png'

  @Input()
  collection4='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6325B69DA9F443F25EAE6C90ADEA67B0BB3A8B061D0505290A40FF1A50942E2A/scale?width=400&aspectRatio=1.78&format=png'

  constructor() { }

  ngOnInit(): void {
  }

}
