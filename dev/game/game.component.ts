import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({

  selector: 'my-game'
  template: `

      <section class="setup">
        <h3>Setup the Game</h3>
        Tell us your name:
        <input type="text" #name (keyup)="0">
       </section>

       <section 
       [ngClass]="{

         game: true,
         solved: sw1.value == sw1Number && 
                 sw2.value == sw2Number && 
                 sw3.value == sw3Number && 
                 sw4.value == sw4Number
         }" 
       

       [ngStyle]="{display: name.value === '' ? 'none' : 'block'}">
         
         <h4>

         DA GAME |
         {{sw1.value == sw1Number && 
                 sw2.value == sw2Number && 
                 sw3.value == sw3Number && 
                 sw4.value == sw4Number ? 'Solved!' : 'NOT solved!!'}}

         </h4>
         
           <p>Hey, Welcome <span class="name">{{name.value}}</span></p>
            <br>
            SWITCH 1:
              <input type="text" (keyup)="0" #sw1><br>
            SWITCH 2:
              <input type="text" (keyup)="0" #sw2><br>
            SWITCH 3:
              <input type="text" (keyup)="0" #sw3><br>
            SWITCH 4:
              <input type="text" (keyup)="0" #sw4><br>                           
       </section> 


       <h1 [hidden]="sw1.value != sw1Number || 
                 sw2.value != sw2Number || 
                 sw3.value != sw3Number || 
                 sw4.value != sw4Number" >Way to go {{name.value}}, you did it!</h1>

`,
})

export class GameComponent implements OnInit {

  sw1Number: number;
  sw2Number: number;
  sw3Number: number;
  sw4Number: number;

  ngOnInit() {
    // return null;
    this.sw1Number = Math.round(Math.random());
    this.sw2Number = Math.round(Math.random());
    this.sw3Number = Math.round(Math.random());
    this.sw4Number = Math.round(Math.random());


    console.log(this.sw1Number, this.sw2Number, this.sw3Number, this.sw4Number);
  }

  
}

