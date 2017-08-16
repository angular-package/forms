// external
import { Component, OnInit } from '@angular/core';

// internal
import { docsApiInput } from './../../../shared/docs/docs-api-input.shared';

@Component({
  selector: 'app-api-input',
  templateUrl: './api-input.component.html'
})
export class ApiInputComponent implements OnInit {
  public docs = docsApiInput;
  constructor() { }

  ngOnInit() { }
}
