import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './shared/material.module';
import { NgModule } from '@angular/core';
import { ContainerComponent } from './core/feature/container/container.component';
import { ContainerSearchComponent } from './core/feature/container-search/container-search.component';
import { ContainerWidgetComponent } from './core/feature/container-widget/container-widget.component';

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
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
