import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aplicativo, PessoaAplicativo } from '../services/aplicativo.model';
import { Pessoa } from './pessoa.model';
@Injectable({
  providedIn: 'root'
})
export class AplicativoService {

  apiUrl = 'http://127.0.0.1:8000/api'

  constructor(private http:HttpClient){}

  getProduct(): Observable<Aplicativo[]> {
    return this.http.get<Aplicativo[]>(`${this.apiUrl}/aplicativos`);
  }

  cadastrarAplicativo(aplicativo: Aplicativo): Observable<Aplicativo>{
    return this.http.post<Aplicativo>(`${this.apiUrl}/aplicativos`, aplicativo)
  }



  cadastrarPessoaAplicativo(pessoaAplicativo: PessoaAplicativo): Observable<PessoaAplicativo>{
    return this.http.post<PessoaAplicativo>(`${this.apiUrl}/aplicativos`, pessoaAplicativo)
  }

  atualizarAplicativo(id: number, aplicativo: Aplicativo): Observable<Aplicativo>{
    return this.http.put<Aplicativo>(`${this.apiUrl}/aplicativos/${id}`, aplicativo)
  }

}
