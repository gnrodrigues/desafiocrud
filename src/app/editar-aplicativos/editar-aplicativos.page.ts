import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AplicativoService } from '../services/aplicativo.service';

@Component({
  selector: 'app-editar-aplicativos',
  templateUrl: './editar-aplicativos.page.html',
  styleUrls: ['./editar-aplicativos.page.scss'],
})
export class EditarAplicativosPage implements OnInit {
  form: FormGroup;
  id:any;
  constructor(private aplicativoService: AplicativoService, private loadingCtrl: LoadingController, private router: Router, private activatedRoute:ActivatedRoute) { }
 
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.id)

    this.form = new FormGroup({
      nome: new FormControl(null,[Validators.required]),
      bundleID: new FormControl(null,[Validators.required]),
    })
  }

  async editarAplicativo(){
 
    const loading = await this.loadingCtrl.create({message: 'Cadastrando...'})
    loading.present();
    this.aplicativoService.atualizarAplicativo(this.id, this.form.value).pipe(take(1)).subscribe(() => {
      this.form.reset();
      loading.dismiss();
    
      });
      this.router.navigateByUrl("/home")
    
  }


}
