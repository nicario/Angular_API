import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  tituloComp: string = 'Lista Colaboradores - Employee List'

  listaColaboradores: any = [];

  constructor(
    public restApi: RestApiService,
  ) { }

  ngOnInit(): void {
    this.exibirRegistros();
  }

  exibirRegistros(){
    this.restApi.lerDadosColabs().subscribe((dados: {}) => {
      this.listaColaboradores = dados
    })
  }

  excluirColaborador(id: any){
    if(confirm('Tem certeza que deseja excluir este registro?')){
      this.restApi.excluirDados(id).subscribe(() => {
        this.exibirRegistros()
      });
    }
  }

}
