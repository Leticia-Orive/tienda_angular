import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
})
export class InicioSesionComponent {
  correo: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private router: Router) {}

  iniciarSesion() {
    // Agrega aquí la lógica de autenticación con tu backend
    // Por ejemplo, puedes usar un servicio para verificar las credenciales

    // Si las credenciales son válidas, navegar a la página de inicio
    if (
      this.correo === 'usuario@example.com' &&
      this.password === 'contraseña'
    ) {
      this.router.navigate(['/inicio']);
    } else {
      this.error = true;
    }
  }
}
