const numbers = document.querySelectorAll('.h1_index')
const button_gerar = document.querySelector("button")
const gif_load = document.querySelector("#gif-load")
let array_confer = []

console.dir(gif_load)


//GEROU OS NÚMEROS E COLOCOU NO array_confer PARA CONFERIR 
const generate_numbers = () => {
    for (let i = 0; i < numbers.length; i++) {
        let element = Math.floor(Math.random() * 90.5);
        if(!array_confer.includes(element)&& element != 0){

            array_confer.push(element)     
        }else{
            i--
        }
    }

    return array_confer
}

 const print_numbers_page =()=>{
   for (let i = 0; i < array_confer.length; i++) {
    numbers[i].textContent=array_confer[i]
    
   }
 }

button_gerar.onclick = () => {
    //Gerou os numeros 
    generate_numbers();


    //Printa os numeros 
    print_numbers_page()

    setTimeout(()=>{
        button_gerar.style.display = "none";
    },50)
     gif_load.style.display = "flex";
     setTimeout(()=>{
        gif_load.style.display = "none";
        button_gerar.style.display = "flex";
        console.log("setinterval");
     },3000)

    array_confer = []
}
