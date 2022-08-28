import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alert, AlertType } from '../model/alert';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';
  @Input() fade = true;

  alertsArray: Alert[] = [];
  alertSubscription: Subscription = new Subscription();
  routeSubscription: Subscription = new Subscription();
  alertKept: Boolean = false;
  iconType: string = 'infoIcon';
  constructor(private router: Router, private alertService: AlertService) {}

  ngOnInit(): void {
    // subscribe to new alert notifications
    this.alertSubscription = this.alertService
      .onAlert(this.id)
      .subscribe((alertres) => {
        // clear alerts when an empty alert is received
        if (!alertres.message) {
          // filter out alerts without 'keepAfterRouteChange' flag
          this.alertsArray = this.alertsArray.filter(
            (alertres) => alertres.keepAfterRouteChange
          );

          // remove 'keepAfterRouteChange' flag on the rest
          this.alertsArray.forEach(
            (alertres) => delete alertres.keepAfterRouteChange
          );
          return;
        }

        // add alert to array
        this.alertsArray.push(alertres);

        // auto close alert if required
        if (alertres.autoClose) {
          setTimeout(() => this.removeAlert(alertres), 2000);
        }
      });

    // clear alerts on location change
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.alertService.clear(this.id);
      }
    });
  } // ========== end of ngOnInit()
  
  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    // check if already removed to prevent error on auto close
    if (!this.alertsArray.includes(alert)) return;

    if (this.fade) {
      // fade out alert
      alert.fade = true;

      // remove alert after faded out
      setTimeout(() => {
        this.alertsArray = this.alertsArray.filter((x) => x !== alert);
      }, 250);
    } else {
      // remove alert
      this.alertsArray = this.alertsArray.filter((x) => x !== alert);
    }
  }

  cssClass(alert: Alert) {
    if (!alert) return;

    // const classes = ['alert', 'alert-dismissable', 'mt-4', 'container'];
    const classes = ['alert', 'alert-dismissible', 'col-md-6 col-sm-12', 'mt-4', 'container'];

    const alertTypeClass = {
      [AlertType.Success]: 'alert alert-success',
      [AlertType.Error]: 'alert alert-danger',
      [AlertType.Info]: 'alert alert-info',
      [AlertType.Warning]: 'alert alert-warning',
    };

    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }

  getIconType(): string {
    return this.iconType;
  }

}