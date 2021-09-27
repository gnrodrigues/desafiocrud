import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Pessoa } from '../services/pessoa.model';
import { DataService, Message } from '../services/data.service';
import { PessoaService } from '../services/pessoa.service';
import { AplicativoComponent } from '../aplicativo-modal/aplicativo.component';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.page.html',
  styleUrls: ['./pessoas.page.scss'],
})
export class PessoasPage implements OnInit  {
  pessoas$:Observable<Pessoa[]>;
  constructor(private pessoasService: PessoaService, 
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController) {

  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async ngOnInit(){

   await this.carregarLista();

  }

  async ngOnChanges(){

    await this.carregarLista();
 
   }
 

 async carregarLista(){
  const loading  = await this.loadingCtrl.create({message: 'Aguardando...'})
  loading.present();
  this.pessoas$ = this.pessoasService.getProduct().pipe(
    map(pessoas => {
      loading.dismiss();
      return pessoas;
    })
  );
  }

 async abrirAplicativosModal(pessoa: Pessoa){
    const modal = await this.modalCtrl.create({
      component: AplicativoComponent,
      componentProps: { pessoa },
     })
     modal.present();
  }

}
