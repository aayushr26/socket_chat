import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpService } from './services/http.service';
import { UtilityService } from './services/utility.service';
import { RequestInterceptor } from '../../interceptors/request.interceptor';
import { HomeGuard } from '../../guards/home/home.guard';
import { AccountGuard } from '../../guards/account/account.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { AbsoluteRoutingModule } from '../../pipes/absolute-routing/absolute-routing.pipe';
import { MatIconModule, MatCardModule, MatDialogModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatSnackBarModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    AbsoluteRoutingModule
  ],
  declarations: [
    ConfirmationModalComponent,
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    AbsoluteRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    ConfirmationModalComponent
  ],
  providers: [
    HttpService,
    UtilityService,
    HomeGuard,
    AccountGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
