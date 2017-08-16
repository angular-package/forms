// external
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// @ngx
import { NavigationService } from '@ngx-ui/navigation';

@Component({
  selector: 'app-ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss']
})
export class UiHeaderComponent implements AfterViewInit, OnDestroy, OnInit {
  public selected: Object;
  private subscription: any;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private navigationService: NavigationService
  ) { }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.navigationService.selectedObservable('docs').subscribe(selected => {
      this.selected = selected;
    });
  }
}
