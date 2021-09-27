import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../services/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
        apiUrl = 'http://127.0.0.1:8000/api'

        constructor(private http:HttpClient){}

        getProduct(): Observable<Pessoa[]> {
          return this.http.get<Pessoa[]>(`${this.apiUrl}/pessoas`);
        }

        cadastrarPessoa(pessoa: Pessoa): Observable<Pessoa>{
          return this.http.post<Pessoa>(`${this.apiUrl}/pessoas`, pessoa)
        }
}
