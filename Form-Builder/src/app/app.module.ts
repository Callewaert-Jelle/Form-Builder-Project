import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormBuilderModuleModule } from './form-builder-module/form-builder-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormBuilderModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
