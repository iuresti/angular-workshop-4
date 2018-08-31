import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  loading: number = 0;
  artist: any;
  tracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) {

    activatedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);

    })
  }

  ngOnInit() {
  }

  getArtist(artistId: string) {
    this.loading++;
    this.spotifyService.getArtist(artistId).subscribe(artist => {
      this.artist = artist;
      this.loading--;
    });
  }

  getTopTracks(artistId: string) {
    this.loading++;
    this.spotifyService.getTopTracks(artistId).subscribe(tracks => {
      this.tracks = tracks;
      console.log('tracks received')
      console.log(this.tracks);
      this.loading--;
    });
  }

}
