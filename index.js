const numbers = document.querySelectorAll('.h1_index')

const button_gerar = document.querySelector("#btn1")

const gif_load = document.querySelector("#gif-load")

let array_confer = []



//GEROU OS NÚMEROS E COLOCOU NO array_confer PARA CONFERIR 
const generate_numbers = () => {
    for (let i = 0; i < numbers.length; i++) {

        let element = Math.floor(Math.random() * 90.5);

        if (!array_confer.includes(element) && element != 0) {

            array_confer.push(element)

        } else {

            i--

        }
    }

    return array_confer
}

const print_numbers_page = () => {
    for (let i = 0; i < array_confer.length; i++) {

        numbers[i].textContent = array_confer[i]

    }
}

button_gerar.onclick = () => {
    //Gerou os numeros 
    generate_numbers();


    //Printa os numeros 
    print_numbers_page()


    array_confer = []
}
