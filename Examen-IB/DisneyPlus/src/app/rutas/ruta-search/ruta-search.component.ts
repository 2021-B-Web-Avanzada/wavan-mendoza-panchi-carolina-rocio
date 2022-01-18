import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-search',
  templateUrl: './ruta-search.component.html',
  styleUrls: ['./ruta-search.component.scss']
})
export class RutaSearchComponent implements OnInit {

  arrayCollection = [
    {
      linkImage1: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/347EC372691353561469CBEABA9617695C5883698009EA7DD49413BD8ECE38D6/scale?width=400&aspectRatio=1.78&format=png",
      linkImage2: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9D4330FE6F445EC74D28A70D9F3D4CB471CD1220559EC00C5135D61BAE8B46F1/scale?width=400&aspectRatio=1.78&format=png",
      linkImage3: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EAD80D47301317F1925217C60B6DB59E9000EFB6B447E64D43292D9B25551C19/scale?width=400&aspectRatio=1.78&format=png",
      linkImage4: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1D18CE99DF53DF85EC45247C22DCD128F4E500A258B8802C3B05E749B481742F/scale?width=400&aspectRatio=1.78&format=png"

    },
    {
      linkImage1: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3B076BF12A665C92DDB5E175C93B500728F514BD6E1D09D854BE1032C2F30C81/scale?width=400&aspectRatio=1.78&format=png",
      linkImage2: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D557500E76698DD20054E9381A15C3D2FF11512F5DA3D64713E32FF168B042F3/scale?width=400&aspectRatio=1.78&format=png",
      linkImage3: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1D91B05BE0C33789494D923CDAB0A9EDE846BE5D4D55252A50F874963CDEF236/scale?width=400&aspectRatio=1.78&format=png",
      linkImage4: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/444A8C1BD9AF2625E97E5EA83DF2E8971CA81E878CC496138919014F4DD3566C/scale?width=400&aspectRatio=1.78&format=png"
    },
    {
      linkImage1: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AA73E93292B33DAD6E972F06F3530172C41D7E676ED05DE23CCB34370683B197/scale?width=400&aspectRatio=1.78&format=png",
      linkImage2: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D20847CAFE1F96B8ABE27CE546B23B7169EE40A32428E2E4DD4B70DA92F3C69C/scale?width=400&aspectRatio=1.78&format=png",
      linkImage3: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/84ABE24B1AE25B6546D0B0D0DA813AC6221599935696A9017A4F17647B86796F/scale?width=400&aspectRatio=1.78&format=png",
      linkImage4: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FC08962DDC031A59FAC19985B25C2E7D7C41B24255DEC033241A43F3409CA344/scale?width=400&aspectRatio=1.78&format=png"
    },
    {
      linkImage1: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DCBC16A2ABEF5B877A9AF7CA69944F828929E703E42E3523FA008CD3203BECBB/scale?width=400&aspectRatio=1.78&format=png",
      linkImage2: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/429C28EDA8AB93F9C347951ABF207B9F9F13FE3CB3624EC4C58930F59A28622B/scale?width=400&aspectRatio=1.78&format=png",
      linkImage3: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BA5D31B7889E04AE0499D1B83A6E563E95B031436225C68D69E4C4789E13F183/scale?width=400&aspectRatio=1.78&format=png",
      linkImage4: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D72AC7F11684F0C008BEA6D0E2486B7D6DF9AE1039DDE8F16E44028E742B3223/scale?width=400&aspectRatio=1.78&format=png"
    }
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
