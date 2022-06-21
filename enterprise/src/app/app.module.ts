import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';
import { RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* outros imports */
import { ToolbarModule } from 'primeng/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpClientModule } from '@angular/common/http';
import { InputMaskModule } from 'primeng/inputmask';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    ListagemComponent,
    EdicaoComponent,
    VisualizacaoComponent,
    ListagemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    PasswordModule,
    CardModule,
    InputTextModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    HttpClientModule,
    InputMaskModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  exports: [
    LoginComponent,
    ListagemComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
