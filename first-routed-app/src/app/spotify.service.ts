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
        'Bearer BQBQdpgneJLCMxfCGflR-ShGuMV2y28P8y-u-aW3x5g3u7LHDSXP7iTvnst8L7YBPpPIe_7r3ctZaJG5suSA7ZIRyYyzpQzpGp_qIk6I5aYF9qxcNuXGI_D3lXnorc89lkWdNG4yE42h26IUiDXpic3fYMrxgWs9KPVPMDnktJJnFiyLB7mxkfcUyrAWZoE'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}