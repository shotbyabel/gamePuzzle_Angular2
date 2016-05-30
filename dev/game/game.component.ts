import {Component} from 'angular2/core';

@Component({

  selector: 'my-game'
  template: `

      <section class="setup">
        <h3>Setup the Game</h3>
        Tell us your name:
        <input type="text" #name (keyup)="0">
       </section>


       <section 
       [ngClass]="{game: true}" 
       [style.display]="name.value === '' ? 'none' : 'block'">
         <h4>DA GAME</h4>
           <p>Hey, Welcome <span class="name">xxx</span></p>
            <br>
            SWITCH 1:
              <input type="text" #sw1><br>
            SWITCH 2:
              <input type="text" #sw2><br>
            SWITCH 3:
              <input type="text" #sw3><br>
            SWITCH 4:
              <input type="text" #sw4><br>                           
       </section> 


       <h1>Way to go xxx, you did it!</h1>

`,
})

export class GameComponent {

  sw1Number: number;
  sw2Number: number;
  sw3Number: number;
  sw4Number: number;
  
}

