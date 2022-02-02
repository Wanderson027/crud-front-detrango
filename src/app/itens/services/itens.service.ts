import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Iten } from './../model/iten';
import { first, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ItensService {

  private readonly API = '/assets/iten.json';

  constructor(private httpCliente: HttpClient) { }

  list() {
   return this.httpCliente.get<Iten[]>(this.API)
   .pipe(
    first(),
    tap(itens => console.log(itens))
   );
  }
}
