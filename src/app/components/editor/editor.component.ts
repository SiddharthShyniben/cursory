import {Component} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {MarkdownParserService} from 'src/app/services/markdown-parser.service';

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

	formInput: string = '';

	constructor(private markdownParser: MarkdownParserService) {}

	parseMD(markdown: string): SafeHtml {
		return this.markdownParser.parseMarkdown(markdown)
	}

}
