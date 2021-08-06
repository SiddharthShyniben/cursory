import { TestBed } from '@angular/core/testing';

import { MarkdownParserService } from './markdown-parser.service';

describe('MarkdownParserService', () => {
  let service: MarkdownParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkdownParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
