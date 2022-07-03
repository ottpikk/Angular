import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariablesComponent } from './variables-parent/variables/variables.component';
import { HookOneComponent } from './hooks/hook-one/hook-one.component';
import { HookTwoComponent } from './hooks/hook-two/hook-two.component';
import { NavComponent } from './nav/nav.component';
import { HooksComponent } from './hooks/hooks.component';
import { VariablesParentComponent } from './variables-parent/variables-parent.component';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    VariablesParentComponent,
    HookOneComponent,
    HookTwoComponent,
    NavComponent,
    HooksComponent,
    VariablesParentComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
