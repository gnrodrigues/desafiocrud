import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Pessoa } from '../services/pessoa.model';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-aplicativo',
  templateUrl: './aplicativo.component.html',
  styleUrls: ['./aplicativo.component.scss'],
})
export class AplicativoComponent implements OnInit {
  @Input() pessoa: Pessoa;

  constructor(private pessoasService: PessoaService, 
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController) { }

    

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
