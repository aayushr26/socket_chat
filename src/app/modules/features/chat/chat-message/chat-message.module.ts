import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMessageComponent } from './component/chat-message.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SpaceDirectiveModule } from 'src/app/directives/space/space.directive';
import { DateFormatModule } from 'src/app/pipes/date-format/date-format.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatMenuModule } from '@angular/material';



@NgModule({
  declarations: [ChatMessageComponent],
  imports: [
    SpaceDirectiveModule,
    CommonModule,SharedModule,DateFormatModule,InfiniteScrollModule,MatMenuModule
  ],
  exports:[ChatMessageComponent]
})
export class ChatMessageModule { }
