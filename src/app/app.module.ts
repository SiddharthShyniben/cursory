import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import {FormsModule} from '@angular/forms';
import { EditorParentComponent } from './components/editor-parent/editor-parent.component';

@NgModule({
	declarations: [
		AppComponent,
		EditorComponent,
		LayoutComponent,
		NavbarComponent,
		FooterComponent,
  EditorParentComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
