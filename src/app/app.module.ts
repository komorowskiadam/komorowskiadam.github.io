import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { OpinionComponent } from './components/opinion/opinion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillBarComponent,
    OpinionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
