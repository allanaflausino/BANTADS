import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../services';
import { Gerente } from 'src/app/shared';

@Component({
  selector: 'app-administrador-inicial',
  templateUrl: './administrador-inicial.component.html',
  styleUrls: ['./administrador-inicial.component.css']
})

export class AdministradorInicialComponent implements OnInit {
  gerente: Gerente[] = []

constructor(private administradorService: AdministradorService) {}

ngOnInit(): void {
  this.listar();
}

listar(): void { 
  this.administradorService.listarTodos().subscribe((data: Gerente[]) => {
    if (data == null) {
      this.gerente = [];
    } else {
      this.gerente = data.map((gerente) => ({
        ...gerente,
        idGerente: gerente.id,
      }));
    }
  });
  }
}
