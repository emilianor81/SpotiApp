import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('Servicio cargado...')
  }

      getQuery(query: string){
        const url = `https://api.spotify.com/v1/${query}`;

        const headers = new HttpHeaders({
          'Authorization': 'Bearer BQBEjpAoIHav0vUKHXWyg8YI3HtU-vT76ltzurN-7qxXP7IK8do73gnSKkCPWoegTHxa6DtoQRQXMDDzRH4'
        })
        return this.http.get( url , {headers})

      }


    getNewReleases(){
        return this.getQuery('browse/new-releases?limit=20')
                .pipe(map( (data:any) =>data.albums.items));
              
    }

    getArtistas( termino: string){
          return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe(map( (data:any) => data.artists.items));
    }


    getArtista( id: string){
       return this.getQuery(`artists/${ id}`)
    }


}
