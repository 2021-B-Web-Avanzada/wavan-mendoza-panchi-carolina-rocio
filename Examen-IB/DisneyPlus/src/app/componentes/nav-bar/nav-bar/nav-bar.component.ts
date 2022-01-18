import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }
  @Input()
  imgPathProfile = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FB397A7BAD00E179E6A888CCCBFE5233B8651A60FED35181CB4E5904786464C0/scale?width=300&aspectRatio=1.00&format=png";

  @Input()
  imgPathProfile2 = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD2FA0F3965617FC515E3CEBD3AD51C00CCFFBF98F96448EFE46B82867FCE542/scale?width=300&aspectRatio=1.00&format=png";

  @Input()
  imgPathProfile3 = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/263F418F2C47943D98B2877ECAD174927FBBD359C4AFB45BE0C6A22AD589D22E/scale?width=300&aspectRatio=1.00&format=png";

  @Input()
  dimensionheight = 48;
  dimensionwidth = 48;
  ngOnInit(): void {
  }

  redirectSearchClick(){
    this.router.navigate(["/search"]);
  }

  redirectWatchlistClick(){
    this.router.navigate(["/watchlist"]);
  }

  redirectOriginalsClick(){
    this.router.navigate(["/originals"]);
  }

  redirectMoviesClick(){
    this.router.navigate(["/movies"]);
  }

  redirectSeriesClick(){
    this.router.navigate(["/series"]);
  }

}
