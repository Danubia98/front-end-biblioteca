import { AutorModule } from './autores/autor.module';
import { LivroModule } from './livros/livro.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LivroModule,
    AutorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
