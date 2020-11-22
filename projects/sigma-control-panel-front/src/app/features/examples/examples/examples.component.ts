import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'sigma-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'sigma.examples.menu.todos' },
    { link: 'stock-market', label: 'sigma.examples.menu.stocks' },
    { link: 'theming', label: 'sigma.examples.menu.theming' },
    { link: 'crud', label: 'sigma.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'sigma.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'sigma.examples.menu.form' },
    { link: 'notifications', label: 'sigma.examples.menu.notifications' },
    { link: 'elements', label: 'sigma.examples.menu.elements' },
    { link: 'authenticated', label: 'sigma.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
