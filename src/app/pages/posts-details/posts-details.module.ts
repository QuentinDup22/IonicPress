import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsDetailsPageRoutingModule } from './posts-details-routing.module';

import { PostsDetailsPage } from './posts-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsDetailsPageRoutingModule
  ],
  declarations: [PostsDetailsPage]
})
export class PostsDetailsPageModule {}
