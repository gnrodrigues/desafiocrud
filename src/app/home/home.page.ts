import { Component } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Pessoa } from '../services/pessoa.model';
import { PessoaService } from '../services/pessoa.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pessoas$:Observable<Pessoa[]>;
  constructor(private route: Router) {

  }

  listaPessoas() {
    this.route.navigate(['/pessoas']);
  }

  listaAplicativos() {
    this.route.navigate(['/aplicativos']);
  }

}
