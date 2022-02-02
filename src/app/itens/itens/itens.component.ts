import { HttpClient } from '@angular/common/http';
import { ItensService } from './../services/itens.service';
import { Iten } from './../model/iten';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {

  itens: Observable<Iten[]>;
  displayedColumns = ['tipoItem', 'descTipoItem'];

  //itensService: ItensService;

  constructor(private itensService: ItensService) {
   // this.itensService = new ItensService();
    this.itens = this.itensService.list();
  }

  ngOnInit(): void {
  }

}
