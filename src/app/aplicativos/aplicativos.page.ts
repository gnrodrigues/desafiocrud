import { Component, Input, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AplicativoService } from '../services/aplicativo.service';
import { Aplicativo } from '../services/aplicativo.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aplicativos',
  templateUrl: './aplicativos.page.html',
  styleUrls: ['./aplicativos.page.scss'],
})

export class AplicativosPage implements OnInit {
  @Input() aplicativo: Aplicativo;
  aplicativos$:Observable<Aplicativo[]>;
  constructor(private aplicativosService: AplicativoService, 
    private loadingCtrl: LoadingController, private route: Router) { }

    
  doRefresh(event) {

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  async ngOnInit(){
    const loading  = await this.loadingCtrl.create({message: 'Aguardando...'})
    loading.present();

    this.aplicativos$ = this.aplicativosService.getProduct().pipe(
      map(aplicativo => {
        loading.dismiss();
        return aplicativo;
      })
    );
  }

  editarAplicativo() {
    this.route.navigate(['/editar-aplicativos']);
  }


}
