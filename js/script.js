let diceRoll = 1;

let boxitem = document.getElementById("box1");
let pRedState = 1;
let pBlueState = 1;
let pRedstartState = 0;
let pBluestartState = 0;
let turn = true;

function rollDice() {

     let num = Math.floor((Math.random() * 6) + 1);

     console.log(num);

     if (turn) {
          if (pRedstartState != 0) {
               move(num);
          } else {
               if (num == 1) {
                    pRedstartState = 1;
               }
          }
     } else {
          if (pBluestartState != 0) {
               move(num);
          } else {
               if (num == 1) {
                    pBluestartState = 1;
               }
          }
     }

     turn = !turn;
}

function move(num) {
     switch (num) {
          case 1:
               dice.src = "images/one.png";
               break;

          case 2:
               dice.src = "images/two.png";
               break;

          case 3:
               dice.src = "images/three.png";
               break;

          case 4:
               dice.src = "images/four.png";
               break;

          case 5:
               dice.src = "images/five.png";
               break;

          case 6:
               dice.src = "images/six.png";
               break;

          default:
               break;

     }
     // pRedState += num;
     diceRoll = num;

     setPosition(num);
}

boxitem.innerHTML = '<img src="images/red.png" height="50px" width="50px" id="pred" alt="" />';

let ps1 = 0;

function setPosition() {

     if ((diceRoll + pRedState) <= 100) {

          switch (pRedState + diceRoll) {
               case 2:
                    // boxitem.innerHTML = pRedState;
                    boxitem.innerHTML = "";
                    pRedState = 23;
                    break;

               case 8:
                    // boxitem.innerHTML = pRedState;
                    boxitem.innerHTML = "";
                    pRedState = 34;
                    break;

               case 20:
                    // boxitem.innerHTML = pRedState;
                    boxitem.innerHTML = "";
                    pRedState = 77;
                    break;

               case 29:
                    // boxitem.innerHTML = pRedState;
                    boxitem.innerHTML = "";
                    pRedState = 9;
                    break;

               case 32:
                    // boxitem.innerHTML = pRedState;
                    boxitem.innerHTML = "";
                    pRedState = 68;
                    break;

               case 38:
                    // boxitem.innerHTML = pRedState;
                    boxitem.innerHTML = "";
                    pRedState = 15;
                    break;

               case 41:
                    // boxitem.innerHTML = pRedState;
                    boxitem.innerHTML = "";
                    pRedState = 79;
                    break;

               case 53:
                    // boxitem.innerHTML = pRedState;
                    boxitem.innerHTML = "";
                    pRedState = 33;
                    break;

               case 62:
                    // boxitem.innerHTML = pRedState;
                    boxitem.innerHTML = "";
                    pRedState = 37;
                    break;

               case 74:
                    // boxitem.innerHTML = pRedState;
                    boxitem.innerHTML = "";
                    pRedState = 88;
                    break;

               case 82:
                    // boxitem.innerHTML = pRedState;
                    boxitem.innerHTML = "";
                    pRedState = 100;
                    break;

               case 85:
                    // boxitem.innerHTML = pRedState;
                    boxitem.innerHTML = "";
                    pRedState = 95;
                    break;

               case 86:
                    // boxitem.innerHTML = pRedState;
                    boxitem.innerHTML = "";
                    pRedState = 54;
                    break;

               case 92:
                    // boxitem.innerHTML = pRedState;
                    boxitem.innerHTML = "";
                    pRedState = 70;
                    break;

               case 97:
                    // boxitem.innerHTML = pRedState;
                    boxitem.innerHTML = "";
                    pRedState = 25;
                    break;

               default:
                    pRedState += diceRoll;
                    // boxitem.innerHTML = pRedState - diceRoll;
                    boxitem.innerHTML = "";
                    break;
          }
          let id = "box" + pRedState;
          boxitem = document.getElementById(id);

          boxitem.innerHTML = '<img src="images/red.png" height="50px" width="50px" id="pred" alt="" />';

     } else {
          console.error(diceRoll, pRedState);
     }
}