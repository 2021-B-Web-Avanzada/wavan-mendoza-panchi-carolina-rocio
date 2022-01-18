import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recommended-section',
  templateUrl: './recommended-section.component.html',
  styleUrls: ['./recommended-section.component.scss']
})
export class RecommendedSectionComponent implements OnInit {

  @Input()
  title= 'Recommended For You';

  @Input()
  section1='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC2BD3D0355C58B637CB6C5120D77996D7C0979AAB0C12B7A1E360EF18AA738F/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal';

  @Input()
  section2='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4C123159C993227B099A26AFAB346496145E0BE6180BF9F3C5B697D98E0F8D27/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal'

  @Input()
  section3='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BBE8B7E41DB075393FBC029DC564C385F3CFBD3F88A9BDB288DAAC4661374EF9/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal'

  @Input()
  section4='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AE3140956ABD946A7A7F6A3BA5609EF401DD8121265A3D2ABAEA4419E8402E46/scale?width=400&aspectRatio=1.78&format=jpeg'



  constructor() { }

  ngOnInit(): void {
  }

}
