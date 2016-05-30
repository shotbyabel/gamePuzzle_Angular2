import {Component} from 'angular2/core';
import {GameComponent} from './game/game.component';

@Component({
    selector: 'my-app',
    template: `
      <my-game></my-game>
    `,
    directives: [GameComponent]
})

export class AppComponent {

}