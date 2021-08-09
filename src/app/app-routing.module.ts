import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditorParentComponent} from './components/editor-parent/editor-parent.component';

const routes: Routes = [
	{path: '/', component: EditorParentComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
