let automobile = {
    marca: 'FIAT',
    modello: 'Panda',
    velocita: 100,
    //creo una funzione per l'oggetto corrente che incrementa la velocità di 20
    //sintassi ES6
    accelera() {
        this.velocita += 20;
        console.log('Ho accelerato!');
    },
    //creo una funzione per l'oggetto corrente che decrementa la velocità di 10
    //sintassi ES5
    frena: function() {
        this.velocita -= 10;
        console.log('Ho frenato!');
    },

    getMarca() {
        return this.marca;
    },

    getVelocitaTemporizzata() {

        /*

        The handling of this is also different in arrow functions compared to regular functions.

        In short, with arrow functions there are no binding of this.

        In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

        With arrow functions the this keyword always represents the object that defined the arrow function.

        Let us take a look at two examples to understand the difference.

        Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

        The first example uses a regular function, and the second example uses an arrow function.

        The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.

        Da: https://www.w3schools.com/js/js_arrow_function.asp

        */

        //con una arrow function funziona!
        setTimeout(() => {
            console.log('L\'auto viaggia a: ' + this.velocita + 'km/h');
        }, 2000);

        // non funziona, visto che this si riferisce alla funzione anonima definita
        //setTimeout(function() {
        //    console.log('L\'auto viaggia a: ' + this.velocita + 'km/h');
        //}, 2000);

    }

};

console.log(automobile.getMarca());
automobile.accelera();
automobile.frena();
automobile.getVelocitaTemporizzata();