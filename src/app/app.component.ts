import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PBC_TALLER_IMC';

  nombre:string= '';
  resultado:string= '';
  imcR:string= '';

  persona= {

    edad: '',
    sexo: '',
    peso: 0,
    estatura: 0, 

    imc: 0,
  };

  imc() {

    this.persona.imc = this.persona.peso / (this.persona.estatura * this.persona.estatura);

    let imcredondeau:string= this.persona.imc.toFixed(1);
    this.imcR= imcredondeau;

    if (this.persona.imc <= 18.5){
      this.resultado=" " + this.imcR +", tienes BAJO PESO";

    } else if (this.persona.imc > 18.5 && this.persona.imc < 24.9) {
      this.resultado=" " + this.imcR +", tienes PESO NORMAL";

    } else if (this.persona.imc > 24.9 && this.persona.imc < 29.9) {
      this.resultado=" " + this.imcR +", tienes SOBREPESO";

    } else if (this.persona.imc > 29.9) {
      this.resultado=" " + this.imcR +", tienes OBESIDAD";
    }

  }
  
}
