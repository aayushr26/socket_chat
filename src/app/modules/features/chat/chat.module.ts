import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './component/chat.component';
import { ChatMessageModule } from './chat-message/chat-message.module';
import { UserListModule } from './user-list/user-list.module';
import { Routes, RouterModule } from '@angular/router';
import { DataLoaderModule } from '../../shared/components/data-loader';

const routes: Routes = [
  { path: '', component: ChatComponent }
]

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule, ChatMessageModule, UserListModule, RouterModule.forChild(routes),DataLoaderModule
  ]
})
export class ChatModule { }
