import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TapService } from './tap.service';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { TapListComponent } from './tap-list/tap-list.component';
import { TapDetailComponent } from './tap-detail/tap-detail.component';
import { TapTileComponent } from './tap-tile/tap-tile.component';
import { TapAddComponent } from './tap-add/tap-add.component';
import { TapEditComponent } from './tap-edit/tap-edit.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TapListComponent,
    TapDetailComponent,
    TapTileComponent,
    TapAddComponent,
    TapEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ TapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
