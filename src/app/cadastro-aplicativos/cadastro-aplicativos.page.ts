import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AplicativoService } from '../services/aplicativo.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-aplicativos',
  templateUrl: './cadastro-aplicativos.page.html',
  styleUrls: ['./cadastro-aplicativos.page.scss'],
})
export class CadastroAplicativosPage implements OnInit {
  form: FormGroup;
  constructor(private aplicativoService: AplicativoService, private loadingCtrl: LoadingController, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl(null,[Validators.required]),
      bundleID: new FormControl(null,[Validators.required]),
    })
  }

  async cadastrarAplicativo(){
    
    const loading = await this.loadingCtrl.create({message: 'Cadastrando...'})
    loading.present();
    this.aplicativoService.cadastrarAplicativo(this.form.value).pipe(take(1)).subscribe(() => {
      this.form.reset();
      loading.dismiss();
     
        
      });
     
      this.router.navigateByUrl("/home")
  }


}
