import {Injectable} from '@angular/core';
import * as MarkdownIt from 'markdown-it';
import * as MarkdownItAnchor from 'markdown-it-anchor';

@Injectable({
	providedIn: 'root'
})
export class MarkdownParserService {
	md: MarkdownIt = new MarkdownIt({
		html: true,
		linkify: true,
		typographer: true
	}).use(MarkdownItAnchor);

	parseMarkdown(markdown: string): string {
		return this.md.render(markdown)
	}
}
