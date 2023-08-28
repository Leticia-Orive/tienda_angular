import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InicioSesionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
