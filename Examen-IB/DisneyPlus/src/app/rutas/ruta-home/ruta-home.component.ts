import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.scss']
})
export class RutaHomeComponent implements OnInit {

  arrayNewSection = [
    {
    title:"new to disney+",
    linkImage1: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/978F2C7585B3C15F38E08A0C7B6C305AF2B950B35069D8E5F8910161C3AE250D/scale?width=800&aspectRatio=1.78&format=jpeg",
    linkImage2:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FB3D468E7E02EEB216BDD799014D4C6EA47FCB0AF6C8B345F8207A73B294C6B9/scale?width=800&aspectRatio=1.78&format=jpeg",
    linkImage3: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7018DD904EAB1683F438F64193C5413A3637B2114BA8E20C3AFC506020507336/scale?width=800&aspectRatio=1.78&format=jpeg",
    linkImage4: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/91A2B0C8071640883CAB0A75421F9D4D445838D020B772CC167B98A75F7C3448/scale?width=800&aspectRatio=1.78&format=jpeg",

  },
    {
      title:"continue watching",
      linkImage1: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C89246146D8FF4CB13327F054990B8187FE1EDB0A61DE64CD218404683C771F7/badging?width=800&aspectRatio=NaN&format=jpeg&label=disneyplusoriginal",
      linkImage2:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F23DCD0E58BFF92DCDD1D4B3EEECA368C332921C8540C2D7828DDB2C1B7C6C2/badging?width=800&aspectRatio=NaN&format=jpeg&label=disneyplusoriginal",
      linkImage3: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2604045F76DEAB54D0499A8CC9FDC17F374BD3CFCBDBCCC14A70B9A44A6512CF/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      linkImage4: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CF503DE0F5DD9284A3B8C865FC3344A7A42985D46CF2D368154FAFE9DCB362BD/scale?width=800&aspectRatio=1.78&format=jpeg",

    },
    {
      title:"because you watched the falcon and the winter soldier",
      linkImage1: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC2BD3D0355C58B637CB6C5120D77996D7C0979AAB0C12B7A1E360EF18AA738F/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      linkImage2:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B05758F8AF77246839207F142947870F009D826F78AA0DC1CEB63B5721AACFF5/scale?width=800&aspectRatio=1.78&format=jpeg",
      linkImage3: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8636C5AE7FA84D97161FCFBAC498975B26E38399FC699AFFEE35A0389FCF6738/scale?width=800&aspectRatio=1.78&format=jpeg",
      linkImage4: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1C3CD1CF83181D919221F40CBC6FB955977CBF1469C691C7E3DDF9532D18B425/scale?width=800&aspectRatio=1.78&format=jpeg",

    },
    {
      title:"originals",
      linkImage1: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4C123159C993227B099A26AFAB346496145E0BE6180BF9F3C5B697D98E0F8D27/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      linkImage2:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B69C1CFE62468AD0D679AE7957B02F65E1704CA724CCB1F78EF9D7913397BC2A/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      linkImage3: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F23DCD0E58BFF92DCDD1D4B3EEECA368C332921C8540C2D7828DDB2C1B7C6C2/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      linkImage4: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1CF376B3CFFFD376CB4AD2AD3A9C11C72448118A6A958B5A5E86235888CD2B3C/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",

    },
    {
      title:"critically acclaimed",
      linkImage1: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CF503DE0F5DD9284A3B8C865FC3344A7A42985D46CF2D368154FAFE9DCB362BD/scale?width=800&aspectRatio=1.78&format=jpeg",
      linkImage2:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CEDD6C41669D66AA313F61A674D5D4F35FBA02B75C01BEE5DC0A5A8612B618FD/scale?width=800&aspectRatio=1.78&format=jpeg",
      linkImage3: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D996CC2741BDE27977FE05B817239F56936A63EB789EB7D43EF825824A53514E/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      linkImage4: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EFBF275B5DB70E26FF02BF8BDCB3D7CB3A331096FAFA63861C324564553A6585/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",

    },
    {
      title:"marvel cinematic universe",
      linkImage1: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4C123159C993227B099A26AFAB346496145E0BE6180BF9F3C5B697D98E0F8D27/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      linkImage2:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3E65BFC754EF88361356B74E42028D818A1813FB80DC27E30688ADAB05418E2A/scale?width=800&aspectRatio=1.78&format=jpeg",
      linkImage3: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/16E5ED404575E7FBD43496A1226D3796378F261A5E29FDD40D03CE9F061CE75F/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      linkImage4: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AE3140956ABD946A7A7F6A3BA5609EF401DD8121265A3D2ABAEA4419E8402E46/scale?width=800&aspectRatio=1.78&format=jpeg",

    },
    {
      title:"animated series",
      linkImage1: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/08A110106EAB4C93630632C54714CFDD06A65815B11A33E6EEFDC636F466D71E/scale?width=800&aspectRatio=1.78&format=jpeg",
      linkImage2:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9ECED3B72B0653D9FC401B794AACA96CF9FC6E8D4BB535DE2F42BE0E6D6A69F8/scale?width=800&aspectRatio=1.78&format=jpeg",
      linkImage3: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C30DF344E414E74D43202D87C847ED2F640F3EA048EAC58B52409E75153E79F4/scale?width=800&aspectRatio=1.78&format=jpeg",
      linkImage4: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F3A317FB5FBA40BB2696F412FC871E70FFF75517E6D51CE29D2482EF9DD3D796/scale?width=800&aspectRatio=1.78&format=jpeg",

    },
    {
      title:"magical adventures",
      linkImage1: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CF503DE0F5DD9284A3B8C865FC3344A7A42985D46CF2D368154FAFE9DCB362BD/scale?width=800&aspectRatio=1.78&format=jpeg",
      linkImage2:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/905DDF6A8F4C2E7E095AD6A5756094AE815BBD34C494540435E9178BD6D175E5/scale?width=800&aspectRatio=1.78&format=jpeg",
      linkImage3: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D79D4496C6A8E37B4CA4176B8B6AE2DB05BBA8D4DE18DE0A2AF24344512D7ADB/scale?width=800&aspectRatio=1.78&format=jpeg",
      linkImage4: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F037CC7022344C624D0AB012767645C4CB0ADC773B563F6652262F6C0F554605/scale?width=800&aspectRatio=1.78&format=jpeg",

    },
    {
      title:"because you watched wandaVision",
      linkImage1: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC2BD3D0355C58B637CB6C5120D77996D7C0979AAB0C12B7A1E360EF18AA738F/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      linkImage2:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C89246146D8FF4CB13327F054990B8187FE1EDB0A61DE64CD218404683C771F7/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      linkImage3: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/825BE4A837FD462FF7CD6981B5ECFA0F020B10A9A6476F123A5286D544D0C160/scale?width=800&aspectRatio=1.78&format=jpeg",
      linkImage4: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/705201D1B22DDE561452A0FE1C58AC8E53C7E7F12D7FE4589118228FE3CEF025/scale?width=800&aspectRatio=1.78&format=jpeg",

    },
    {
      title:"trending",
      linkImage1: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C8DF7B893EDCCFFDEDB67CBB0D9CF2F33A690A2B35838EC95677819C8C7B8A9A/scale?width=800&aspectRatio=1.78&format=jpeg",
      linkImage2:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CF503DE0F5DD9284A3B8C865FC3344A7A42985D46CF2D368154FAFE9DCB362BD/scale?width=800&aspectRatio=1.78&format=jpeg",
      linkImage3: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B69C1CFE62468AD0D679AE7957B02F65E1704CA724CCB1F78EF9D7913397BC2A/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      linkImage4: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4C123159C993227B099A26AFAB346496145E0BE6180BF9F3C5B697D98E0F8D27/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",

    },
    {
      title:"collections",
      linkImage1: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1C13F3828966FC658F062F61524299D40C97813C058265153461051C6989C6C0/scale?width=800&aspectRatio=1.78&format=png",
      linkImage2:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/635A1EDEDABC8DDCB2C404313C9D3EFAA077F98B510F78CBE3F5399878E1C3A1/scale?width=800&aspectRatio=1.78&format=png",
      linkImage3: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EAD80D47301317F1925217C60B6DB59E9000EFB6B447E64D43292D9B25551C19/scale?width=800&aspectRatio=1.78&format=png",
      linkImage4: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/84E223A42FB7FAB7FE44D50ACD212AD95077BE7F3DCE644CAB279D0B64D0EDCC/scale?width=800&aspectRatio=1.78&format=png",

    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
