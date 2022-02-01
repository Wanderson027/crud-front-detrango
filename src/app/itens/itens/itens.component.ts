import { Iten } from './../model/iten';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {

  itens: Iten [] = [
    { _id: '1 ', tipo_iten: '1 - Documentos', desc_iten: 'CNH'}
  ];
  displayedColumns = ['tipo_iten', 'desc_iten'];

  constructor() {

  }

  ngOnInit(): void {
  }

}
