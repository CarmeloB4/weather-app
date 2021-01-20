import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContainerComponent } from './core/feature/container/container.component';
import { ContainerSearchComponent } from './core/feature/container-search/container-search.component';
import { ContainerWidgetComponent } from './core/feature/container-widget/container-widget.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { NgModule } from '@angular/core';
import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeIt);
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContainerSearchComponent,
    ContainerWidgetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "it-IT" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
