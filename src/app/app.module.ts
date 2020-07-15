import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { LoaderModule } from './components/loader/loader.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastNotificationModule } from './components/toast-notification/toast-notification.module';
import { DatePipe } from '@angular/common';
import { SocketService } from './modules/shared/services/socket.service';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoaderModule,
    SharedModule,
    HttpClientModule,
    ToastNotificationModule
  ], 
  providers:[DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
