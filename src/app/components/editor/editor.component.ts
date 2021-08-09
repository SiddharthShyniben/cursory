import {Component, OnInit} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {MarkdownParserService} from 'src/app/services/markdown-parser.service';
import {StorageService} from 'src/app/services/storage.service';

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
	markdownBody: string = '';
	currentFile: string = localStorage.getItem('latestFileEdit') || 'undefined.md';
	newFileName: string = this.currentFile;

	constructor(private markdownParser: MarkdownParserService, private storageService: StorageService) {}

	parseMD(markdown: string): SafeHtml {
		return this.markdownParser.parseMarkdown(markdown);
	}

	ngOnInit(): void {
		if (!Object.keys(this.storageService._get()).length) this.storageService.writeFile('untitled.md', 'Hey there!');
		if (!localStorage.getItem('latestFileEdit')) localStorage.setItem('latestFileEdit', 'untitled.md')
		this.loadFile();
	}

	writeFile() {
		this.storageService.writeFile(this.currentFile, this.markdownBody);
	}

	loadFile() {
		this.markdownBody = this.storageService.getFiles()[this.currentFile] || '';
	}

	updateFileName() {
		this.storageService.removeFile(this.currentFile);
		this.storageService.writeFile(this.newFileName, this.markdownBody);
		this.currentFile = this.newFileName;
		localStorage.setItem('latestFileEdit', this.currentFile)
	}

	getFileList() {
		return Object.keys(this.storageService.getFiles())
	}

	openFile(filename: string) {
		this.currentFile = this.newFileName = filename;
		this.markdownBody = this.storageService.getFiles()[filename];
	}
}
