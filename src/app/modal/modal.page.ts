import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) { }
  peso:any;
  altura:any;
  imc:any;
  ngOnInit() {
  }
  async closeModal(){
    const onClosedData:string="Fechar";
    await this.modalController.dismiss(onClosedData);

  }
enviadados(){
  console.log(this.peso);
  console.log(this.altura);
this.imc=this.peso/(this.altura*this.altura);
console.log(this.imc);
}

}
