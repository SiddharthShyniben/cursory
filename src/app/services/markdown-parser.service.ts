import {Injectable} from '@angular/core';
import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from 'markdown-it-anchor';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Injectable({
	providedIn: 'root'
})
export class MarkdownParserService {
	md: MarkdownIt = new MarkdownIt({
		html: true,
		linkify: true,
		typographer: true
	}).use(MarkdownItAnchor);

	constructor(private sanitizer: DomSanitizer) {}

	parseMarkdown(markdown: string): SafeHtml {
		return this.sanitizer.bypassSecurityTrustHtml(this.md.render(markdown))
	}
}
