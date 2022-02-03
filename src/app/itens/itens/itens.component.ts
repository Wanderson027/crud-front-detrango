import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Iten } from './../model/iten';
import { ItensService } from './../services/itens.service';


@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {

  itens$: Observable<Iten[]>;
  displayedColumns = ['tipoItem', 'descTipoItem', 'actions'];

  //itensService: ItensService;

  constructor(
    private itensService: ItensService,
    public dialog: MatDialog
    ) {
   // this.itensService = new ItensService();
    this.itens$ = this.itensService.list()
    .pipe(
      catchError(error => {
        this.onError('Error ao carregar Items!!')
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
