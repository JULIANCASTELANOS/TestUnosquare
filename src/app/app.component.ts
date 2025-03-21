import { Component } from '@angular/core';
import { RickyMortyService } from './services/ricky-morty.service';
import { Personaje } from './api.models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Api Ricky Morty';

  rickyMorty: Personaje[] = [];
  filtrercaracter: Personaje[] = [];
  searchcaracter: any = '';
  loading = true;

  constructor(private rickyMortyService: RickyMortyService) { }

  ngOnInit() {
    this.loading = true;
    this.rickyMortyService.getRickyMorty().subscribe({
      next: (data) => {
        this.rickyMorty = <any>data.results;
        this.filtrercaracter = data.results;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Info de la API obtenida con éxito');
        this.loading = false; 
      }
    });
  }

  search() {
    this.filtrercaracter = this.rickyMorty.filter((personaje) =>
      personaje.name.toLowerCase().includes(this.searchcaracter.toLowerCase())
    );
  }
}