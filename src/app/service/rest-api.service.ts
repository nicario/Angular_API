import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

@Injectable()

export class RestApiService {

  apiURL: string = 'http://localhost:3000'



  constructor(private reqHttp: HttpClient) { }

  autorizacaoAcesso = {
    headers: new HttpHeaders ({
      'Content-type': 'application/json'
    })
  }

  lerDadosColabs(): Observable<Employee>{
    return this.reqHttp.get<Employee>(this.apiURL+'/employees').pipe(
      retry(1),
      catchError(this.tratarErro)
    )
  }
  acessarUmRegistro(id: any): Observable<Employee>{
    return this.reqHttp.get<Employee>(this.apiURL + 'employees/' + id).pipe(
      retry(1),
      catchError(this.tratarErro)
    )
  }

  inserirDados(dadosRecebidos: any): Observable<Employee>{
    return this.reqHttp.post<Employee>(this.apiURL + '/employees', JSON.stringify(dadosRecebidos), this.autorizacaoAcesso).pipe(
      retry(1),
      catchError(this.tratarErro)
    )
  }

  alterarDados(id: any, novosDados: any): Observable<Employee>{
    return this.reqHttp.put<Employee>(this.apiURL + '/employees/' + id, JSON.stringify(novosDados), this.autorizacaoAcesso).pipe(
      retry(1),
      catchError(this.tratarErro)
    )
  }

  excluirDados(id: any){
    return this.reqHttp.delete<Employee>(this.apiURL + '/employees/'+ id, this.autorizacaoAcesso).pipe(
      retry(1),
      catchError(this.tratarErro)
    )
  }

  tratarErro(erro: any){
    let mensagemErro: any = ''

    if(erro.error instanceof ErrorEvent){
      mensagemErro = erro.error.message;
    }else{
      mensagemErro = `Codigo erro: ${erro.status}\nMensagem do erro é: ${erro.message}`
    }
    alert(mensagemErro);
    return throwError(() => mensagemErro)
  }
  
}

