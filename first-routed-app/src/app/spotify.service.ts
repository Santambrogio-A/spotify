import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAus1f-0kQC-IzZwrsv-H2JT1Tq5CYltMmLPglwsdcTHZV3SuYTv9j00jOa-a_JPlG5lVlOpQWnPtmpX-IZVGewYrLM4sV7KJ1ijYr2oFnPbBVCyfsh-6kFs49vdE8EgwcY24A1NS5qvKuK_WY8J7cOnY4GZ-GIklUO_n2JJBfV8MXCrZl0dTwnyvp1ZOg'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}