import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  artistas: any = [];
  loading: boolean;
  // nuevasCanciones: any = [];


  constructor( private spotify:SpotifyService) {
    this.loading = false;
   }
   
  buscar(termino:string){
    this.loading = true;

    console.log(termino)
    this.spotify.getArtistas(termino)
        .subscribe((data:any) =>{
           this.artistas = data;
           this.loading = false;
        })
  }
}
