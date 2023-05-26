import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExemplosPipeComponent } from './exemplos-pipe/exemplos-pipe.component';
import { CamelCasePipe } from './camel-case.pipe';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { SettingsService } from './settings.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipeComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService: any) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
