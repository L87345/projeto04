import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-troco',
  templateUrl: './troco.page.html',
  styleUrls: ['./troco.page.scss'],
})
export class TrocoPage implements OnInit {

  constructor(public trocoController: ModalController,public alertController: AlertController) { }
  Dinheiro:any;
  Valorcompra:any;
  troco:any;
  status:any;
  ngOnInit() {
  }
  async closeModal(){
    const onClosedData:string="Fechar";
    await this.trocoController.dismiss(onClosedData);
  }
  async enviadados(){
    console.log(this.Dinheiro);
    console.log(this.Valorcompra);
     this.troco=this.Dinheiro-this.Valorcompra;
    console.log(this.troco);
   
      if(this.Dinheiro<this.Valorcompra){
        this.status="Faltou dinheiro";
      }
      else{
        this.status="Compra Finalizada";
      }
     
 console.log(this.status);
 
 const alert = await this.alertController.create({
  header: 'Seu troco é:',
  subHeader: " R$ " + this.troco + " reais ",
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


