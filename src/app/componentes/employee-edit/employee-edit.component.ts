import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/service/rest-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  tituloComp: string = 'Alterar Registro'

  constructor(
    public restApi: RestApiService,
    public router: Router,
    public copiaRota: ActivatedRoute,
  ) { }

  rotaCopiada = this.copiaRota.snapshot.params['id']

  atualizarDados: any = {

  }

  ngOnInit(): void {
    this.restApi.acessarUmRegistro(this.rotaCopiada).subscribe((dados:any) => {
      this.atualizarDados = dados
    })
  }

  atualizacaoRegistro(){
    if(confirm('Tem certeza que deseja alterar o registro?')){
      this.restApi.alterarDados(this.rotaCopiada, this.atualizarDados).subscribe(() => {
        this.router.navigate(['employee-list'])
      })
    }
  }
}
