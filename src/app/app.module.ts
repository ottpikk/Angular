import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariablesComponent } from './variables-parent/variables/variables.component';
import { NavComponent } from './nav/nav.component';
import { HooksComponent } from './hooks/hooks.component';
import { HookOneComponent } from './hooks/hook-one/hook-one.component';
import { HookTwoComponent } from './hooks/hook-two/hook-two.component';
import { VariablesParentComponent } from './variables-parent/variables-parent.component';
import { TablesComponent } from './tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    HookOneComponent,
    HookTwoComponent,
    NavComponent,
    HooksComponent,
    VariablesParentComponent,
    TablesComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
