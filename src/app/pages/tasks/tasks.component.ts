import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AppService } from '../../app.service';
import { NotifierService } from '../../services/notifier/notifier.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  /** Based on the screen size, switch from standard to one column per row */
  isHandset: Boolean = false;
  isHandsetObserver = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }
      return false;
    })
  );

  constructor
  (
    private breakpointObserver: BreakpointObserver,
    public appService: AppService,
    public notifierService: NotifierService
  ) {}
  
  cols_1 = 1;
  cols_2 = 2;
  rows_1 = 1;
  rows_2 = 2;
  ngOnInit() {
    this.isHandsetObserver.subscribe(currentObserverValue => {
      switch (currentObserverValue) {
        case true:
          this.cols_1 = 2;
          this.cols_2 = 2;
          //this.notifierService.showNotificationDefault('mobile');
          this.notifierService.showNotificationComponentDefault('mobile','ok','error');
          break;
      
        default:
          this.cols_1 = 1;
          this.cols_2 = 2;
          //this.notifierService.showNotificationDefault('web');
          this.notifierService.showNotificationComponentDefault('web','ok','success');
          break;
      }
    });
  }
}
