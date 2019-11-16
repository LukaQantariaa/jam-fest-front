import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  facebookLogoUrl: string = '../../assets/pictures/fb-01.png';
  instagramLogoUrl: string = '../../assets/pictures/insta-01.png';
  twitterLogoUrl: string = '../../assets/pictures/twitter-01.png';
  
  constructor() { }

  ngOnInit() {
  }

}
