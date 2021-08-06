import {Injectable} from '@angular/core';
import * as MarkdownIt from 'markdown-it';

@Injectable({
	providedIn: 'root'
})
export class MarkdownParserService {
	md: MarkdownIt = new MarkdownIt({
		html: true,
		linkify: true,
		typographer: true
	});

	parseMarkdown(markdown: string): string {
		return this.md.render(markdown)
	}
}
