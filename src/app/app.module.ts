import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RoomModule } from './views/room/room.module';
import { NoConnectionModule } from './shared/components/no-connection/no-connection.module';
import { AppComponent } from './app.component';
import { TopComponent } from './shared/components/top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RoomModule,
    NoConnectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
