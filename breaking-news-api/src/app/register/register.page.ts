import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  isEmailValid: boolean = false;
  showModal: boolean = false;

  constructor(private navCtrl: NavController) {} // Injeta NavController

  // Função para validar o email
  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.isEmailValid = emailPattern.test(this.email);
  }

  // Função chamada quando o botão "Cadastrar" for clicado
  onRegister() {
    if (this.isEmailValid) {
      // Exibir modal de sucesso
      this.showModal = true;
      // Navegar para a página de apresentação após 2 segundos
      setTimeout(() => {
        this.navCtrl.navigateRoot('/presentation'); // Navega para a página de apresentação
      }, 2000); // Tempo de espera antes de navegar
    }
  }

  // Função para fechar o modal
  closeModal() {
    this.showModal = false;
  }
}
