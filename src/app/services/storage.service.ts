import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StorageService {
	writeFile(name: string, contents: string = ''): void {
		let data = this._get();
		data[name] = contents;
		this._set(data)
	}

	getFiles(): {[x: string]: string} {
		return this._get();
	}

	removeFile(key: string): void {
		let data = this._get();
		delete data[key];
		this._set(data);
	}

	_set(data: {[x: string]: string}): void {
		localStorage.setItem('files', JSON.stringify(data));
	}

	_get(): {[x: string]: string} {
		return JSON.parse(localStorage.getItem('files') || '{}');
	}
}
