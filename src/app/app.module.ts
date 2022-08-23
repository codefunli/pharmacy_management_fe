import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DefaultModule} from './layouts/default/default.module';
import {ImportStoreComponent} from './modules/import-store/import-store.component';
import {ExportStoreComponent} from './modules/export-store/export-store.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {LoginComponent} from "./login/singIn/login.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    ImportStoreComponent,
    ExportStoreComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
