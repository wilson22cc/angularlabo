import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [ // Todo: declaraciones, componentes, directivas, pipes
    AppComponent,

  ],
  imports: [ // Todo: solo se importan otros modulos
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

