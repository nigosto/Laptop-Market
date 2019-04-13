import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SharedModule } from './components/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResponseHandleInterceptorService } from './core/interceptors/response-handle-interceptor.service';
import { TokenInterceptorService } from './core/interceptors/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
      {
          provide: HTTP_INTERCEPTORS,
          useClass: ResponseHandleInterceptorService,
          multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
