import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean = false;

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
  }

  search(searchString: string) {
    if(searchString.length > 2) {
      this.loading = true;
      this.artists = [];
      console.log(`doing a search of ${ searchString }`);
      this.spotifyService.getArtists(searchString).subscribe((data: any) => {
        console.log(data);
        this.artists = data;
        this.loading = false;
      });
    }
  }

}
