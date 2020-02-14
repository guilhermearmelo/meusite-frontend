import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobreComponent } from './sobre/sobre.component';
import { EducacaoComponent } from './educacao/educacao.component';
import { InteressesComponent } from './interesses/interesses.component';
import { CertificacoesComponent } from './certificacoes/certificacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobreComponent,
    EducacaoComponent,
    InteressesComponent,
    CertificacoesComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
