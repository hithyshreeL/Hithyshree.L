let teacount=0;
let coffeecount=0;
let badammilkcount=0;
let lemonteacount=0;
 let mintteacount=0;

let tearate=15;
let coffeerate=20;
let badammilkrate=25;
let lemontearate=15;
let minttearate=10;

    function add(){
        const selectedDrink=document.querySelector('input[name="drink"]:checked').value;
        if(selectedDrink==='tea'){
            // const drinktype= selectedDrink.value;
            teacount++;
            document.getElementById("teacount").textContent=teacount;
        }
        else if(selectedDrink==='coffee'){
            // const drinktype= selectedDrink.value;
            coffeecount++;
            document.getElementById("coffeecount").textContent=coffeecount;
         }
        else if(selectedDrink==='badammilk'){
            // const drinktype= selectedDrink.value;
            badammilkcount++;
            document.getElementById("badammilkcount").textContent=badammilkcount;
         }
        else if(selectedDrink==='lemontea'){
            // const drinktype= selectedDrink.value;
            lemonteacount++;
            document.getElementById("lemonteacount").textContent=lemonteacount;
         }
        else if(selectedDrink==='minttea'){
            // const drinktype= selectedDrink.value;
            mintteacount++;
            document.getElementById("mintteacount").textContent=mintteacount;
        }
    }
        function total(){
            let total=0;

            total += parseInt(document.getElementById("teacount").textContent)*tearate;
            total += parseInt(document.getElementById("coffeecount").textContent)*coffeerate;
            total +=  parseInt(document.getElementById("badammilkcount").textContent)*badammilkrate;
            total += parseInt(document.getElementById("lemonteacount").textContent)*lemontearate;
            total += parseInt(document.getElementById("mintteacount").textContent)*minttearate;

            document.getElementById('bill').textContent=total;
        }
    
