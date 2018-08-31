import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDe3NLP0pJLrLOrCSvdMzSytLcP15Jw9sVoWCAnQVUPczS4tXZwVGEYauItFuDfjzQTP3LL-wFLpH11C-g'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {


    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }

  getArtists(searchString: string) {

    return this.getQuery(`search?q=${ searchString }&type=artist`)
      .pipe(map(data => data['artists'].items));
  }

  getArtist(artistId: string) {

    return this.getQuery(`artists/${ artistId }`);
  }

  getTopTracks(artistId: string) {

    return this.getQuery(`artists/${ artistId }/top-tracks?country=mx`)
      .pipe(map(data => data['tracks']));
  }
}
