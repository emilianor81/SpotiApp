import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;

  constructor( private router: ActivatedRoute,
                private spotify: SpotifyService) {
                  this.loading = true;              

    this.router.params.subscribe(params =>{
      this.loading = false;

      this.getArtista(params['id'])
    })
   }

   getArtista( id: string){
     this.spotify.getArtista(id)
                .subscribe((artista:any) =>{
                  this.artista = artista;
                  console.log(artista,'este artista')
                });
              }
              
  

}
