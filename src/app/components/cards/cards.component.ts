import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent implements OnInit {

  @Input() item: any;

  constructor(private routerService: Router) {
  }

  ngOnInit() {
  }

  loadArtist(item: any) {

    let artistId: string = null;

    if (item.type === 'artist') {
      artistId = item.id;
    } else if (item.artists && item.artists.length) {
      artistId = item.artists[0].id;
    }

    if (artistId) {
      this.routerService.navigate(['/artist', artistId]);
    } else {
      console.log('artist id is not available');
    }
  }
}
