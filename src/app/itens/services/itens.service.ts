import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Iten } from './../model/iten';
import { delay, first, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ItensService {

  private readonly API = 'api/itens';

  constructor(private httpCliente: HttpClient) { }

  list() {
   return this.httpCliente.get<Iten[]>(this.API)
   .pipe(
    first(),
    delay(1000),
    tap(itens => console.log(itens))
   );
  }

  update() {
    return this.httpCliente.get(this.API)
    .pipe(
     first(),
     delay(1000),
     tap(itens => console.log(itens))
    );
   }
}
