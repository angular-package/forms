import { Component, OnInit } from '@angular/core';

import { NavigationService } from '@ngx-ui/navigation';

@Component({
  selector: 'app-docs-start',
  styleUrls: [ 'docs-start.component.scss' ],
  templateUrl: 'docs-start.component.html'
})
export class DocsStartComponent implements OnInit {
  constructor(
    public navigationService: NavigationService
  ) { }

  ngOnInit() {
  }
}
