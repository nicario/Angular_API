import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from 'src/app/service/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  tituloComp: string = 'Criar Registro'

  @Input() dadosRegistro = {
    name: '',
    email: '',
    phone: ''
  }

  constructor(
    public restApi: RestApiService,
    public router: Router,
  ) {}

  ngOnInit(): void {
  }

  inserirColaborador(){
    this.restApi.inserirDados(this.dadosRegistro).subscribe(() => {
      this.router.navigate(['/employee-list'])
    })
  }


}
