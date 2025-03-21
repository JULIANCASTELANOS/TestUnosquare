import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickyMortyService {

  constructor(private http: HttpClient) { }

  getRickyMorty() {
    const randomPage = Math.floor(Math.random() * 42) + 1; // generar un número aleatorio entre 1 y 43
    return this.http.get<any>(`https://rickandmortyapi.com/api/character/?page=${randomPage}`);
  }
}



