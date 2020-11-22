import { browser, by, element } from 'protractor';

export class TodosPage {
  navigateTo() {
    return browser.get('#/panel/todos');
  }

  getInput() {
    return element(by.css('sigma-big-input input'));
  }

  getAddTodoButton() {
    return element(by.css('sigma-big-input-action button'));
  }

  getResults() {
    return element.all(by.css('mat-card.todo'));
  }
}
