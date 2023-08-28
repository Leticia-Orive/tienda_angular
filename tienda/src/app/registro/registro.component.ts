import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  nombre: string = '';
  correo: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}
  registradoExitosamente: boolean = false;
  registrarUsuario() {
    // Lógica para registrar al usuario en el servidor
    const newUser = {
      // Datos del nuevo usuario
      // Por ejemplo: nombre, correo, contraseña, etc.
    };
    // Mostrar mensaje de éxito y redirigir al inicio de sesión
    this.registradoExitosamente = true;
    // Hacer una solicitud POST al servidor para registrar al usuario
    this.http.post<any>('URL_DEL_ENDPOINT_DE_REGISTRO', newUser).subscribe(
      (response) => {
        // Registro exitoso
        this.registradoExitosamente = true;
        setTimeout(() => {
          this.router.navigate(['/inicio-sesion']);
        }, 2000);
      },
      (error) => {
        // Manejar error de registro
        console.error('Error en el registro:', error);
      }
    );
  }
}
