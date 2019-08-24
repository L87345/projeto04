import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

export class ModalPage implements OnInit {

  constructor(public modalController: ModalController,public alertController: AlertController) { }
  peso:any;
  altura:any;
  imc:any;
  status:any;
  ngOnInit() {
  }
  async closeModal(){
    const onClosedData:string="Fechar";
    await this.modalController.dismiss(onClosedData);

  }
  async enviadados(){
    console.log(this.peso);
    console.log(this.altura);
    this.imc=this.peso/(this.altura*this.altura);
    console.log(this.imc);
      if(this.imc<20){
        this.status="Abaixo do peso";
      }
      if(this.imc>=20 && this.imc<=24){
        this.status="Peso normal";
      }
      if(this.imc>=24.1 && this.imc<=29){
        this.status="Acima do peso";  
      }
      if(this.imc>=29.1 && this.imc<=34){
        this.status="Obesidade";
      }
      if(this.imc>=34.1){
        this.status="Obesidade Morbida";  
      }

 console.log(this.status);

 const alert = await this.alertController.create({
  header: 'Seu índice de massa corpórea é:',
  subHeader: this.imc,
  message: this.status,
  buttons: [{
    text:'OK',
    handler:()=>{
      this.closeModal();
    }
  }]
});

await alert.present();
}

}
