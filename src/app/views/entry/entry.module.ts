import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { EntryComponent } from './entry.component';
import { EntryRoutingModule } from './entry-routing.module';

@NgModule({
  imports: [
    EntryRoutingModule,
    ChartsModule
  ],
  declarations: [ EntryComponent ]
})
export class EntryModule { }
