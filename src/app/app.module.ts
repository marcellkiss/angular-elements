import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [CalendarComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [CalendarComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const calendar = createCustomElement(CalendarComponent, { injector });
    customElements.define('ng-calendar', calendar);
  }

  ngDoBootstrap() {}
}
