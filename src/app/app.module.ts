import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppStore } from './store/store.module';
import { AppServicesModule } from './app-services/app-services.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './components/app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppStore,
    AppServicesModule,
    ComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
