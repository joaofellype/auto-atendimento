import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
//import { CalendarModule } from 'primeng/calendar';
//import { SelectItem } from 'primeng/api';
//import { SelectItemGroup } from 'primeng/api';
import { Table } from 'primeng/table';
import { SolicitantesService } from './solicitanteservice';
import { SolicitantesInterface } from './solicitante';
import { PrimeNGConfig } from 'primeng/api';

interface Solicitante {
  tipo: string;
  codigo: number;
}
interface Status {
  tipo: string;
  codigo: number;
}
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  solicitantes: Solicitante[];
  seletecdSolicitante: Solicitante;
  status: Status[];
  selectedStatus: Status;
  solicitantesTable: SolicitantesInterface[];

  constructor(
    private solicitanteService: SolicitantesService,
    private primengConfig: PrimeNGConfig
  ) {
    this.solicitantes = [
      { tipo: 'Solicitante', codigo: 1 },
      { tipo: 'Responsável', codigo: 2 },
      { tipo: 'Assunto', codigo: 2 },
      { tipo: 'Mês', codigo: 3 },
      { tipo: 'Semana', codigo: 4 },
      { tipo: 'Grupo', codigo: 5 },
      { tipo: 'Área', codigo: 6 }
    ];
    this.status = [
      { tipo: 'Aberto', codigo: 1 },
      { tipo: 'Fechado', codigo: 2 }
    ];
  }
  ngOnInit() {
    this.solicitanteService.getSolicitantes().then(dados => {
      console.log(dados);
      this.solicitantesTable = dados;
    });
  }
}
