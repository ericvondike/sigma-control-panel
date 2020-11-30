import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../panel.state';

@Component({
  selector: 'sigma-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  panel = [
    { link: 'todos', label: 'sigma.panel.menu.todos' },
    { link: 'stock-market', label: 'sigma.panel.menu.stocks' },
    { link: 'theming', label: 'sigma.panel.menu.theming' },
    { link: 'crud', label: 'sigma.panel.menu.crud' },
    {link: 'address', label: 'sigma.panel.menu.address'},
    {
      link: 'simple-state-management',
      label: 'sigma.panel.menu.simple-state-management'
    },
    { link: 'form', label: 'sigma.panel.menu.form' },
    { link: 'notifications', label: 'sigma.panel.menu.notifications' },
    { link: 'elements', label: 'sigma.panel.menu.elements' },
    { link: 'authenticated', label: 'sigma.panel.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
