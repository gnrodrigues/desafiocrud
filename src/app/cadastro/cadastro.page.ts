import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Aplicativo, PessoaAplicativo } from '../services/aplicativo.model';
import { AplicativoService } from '../services/aplicativo.service';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  pessoaAplicativo: PessoaAplicativo;
  aplicativos$: Observable<Aplicativo[]>;

  form: FormGroup;

  constructor(private pessoaService: PessoaService, private loadingCtrl: LoadingController, private router: Router, private aplicativosService: AplicativoService) {
    this.form = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      cpf: new FormControl(null, [Validators.required]),
      rg: new FormControl(null, [Validators.required]),
      perfilId: new FormControl(null, [Validators.required]),
      dataNascimento: new FormControl(null, [Validators.required]),
      aplicativoId: new FormArray([])
    })

  }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({ message: 'Aguardando...' })
    loading.present();
    this.aplicativos$ = this.aplicativosService.getProduct().pipe(
      map(aplicativo => {
        loading.dismiss();
        return aplicativo;
      })
    );
  }

  async ngOnChanges() {
  }

  marcarAplicativo(apId) {
    (this.form.controls.aplicativoId as FormArray).push(apId);
  }

  desmarcarAplicativo(apId) {
    this.form.controls.aplicativoId.patchValue((this.form.controls.aplicativoId.value).filter(a => a.id !== apId));
  }

  selecionaApli(elem) {
    const apId = elem.value;

    console.log('Elem', apId);
    console.log('ap id', apId);

    const estaSelectionado = this.form.controls.aplicativoId.value.find(a => a.id === apId);
    if (estaSelectionado.length > 0) {
      this.desmarcarAplicativo(apId);
    } else {
      this.marcarAplicativo(apId)
    }
  }


  async cadastrarPessoa() {

    const loading = await this.loadingCtrl.create({ message: 'Cadastrando...' })
    loading.present();
    this.pessoaService.cadastrarPessoa(this.form.value).pipe(take(1)).subscribe((pessoa) => {
      console.log(pessoa.id)
      console.log(this.form.value.aplicativoId)
      //  this.pessoaAplicativo.aplicativoId = 1
      
      this.pessoaAplicativo = {
        pessoaId: pessoa.id,
        aplicativoId: 1
      }

      console.log(this.pessoaAplicativo)
      this.aplicativosService.cadastrarPessoaAplicativo(this.pessoaAplicativo).pipe(take(1)).subscribe(() => {


      });

      this.form.reset();
      loading.dismiss();
      this.router.navigateByUrl("/home")

    });

  }

}
