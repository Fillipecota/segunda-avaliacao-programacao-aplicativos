var carros = [];

function adicionarCarros(){
    const input = document.getElementById("modelo-do-veiculo");
    const input1 = document.getElementById("carro-ano")
    const input2 = document.getElementById("carro-imagem")
    const  modeloDoVeiculo = input.value.trim();
    const  carroAno = input1.value.trim();
    const  carroImagem = input2.value.trim();

    if(modeloDoVeiculo === '' ||  carroAno === '' || carroImagem === ''){
        alert("VOCÊ TENTOU ADICIONAR UM CARRO SEM AS INFORMAÇOES");
        return;
    }

    const novoCarro = {
        id: Math.floor(Math.random() * 1000000),
        nome: modeloDoVeiculo,
        carroAno:carroAno,
        carroImagem: carroImagem
        
    }

    carros.push(novoCarro);

    localStorage.setItem("carro", JSON.stringify(carros))
    render()
    input.value = "";
    input.focus();
    console.log (carros)
}



function render() {
    const Carros = document.getElementById("novoCarro");
    Carros.innerHTML = "";

    for(var i = 0; i < Carros.length; i++){
        const li = document.createElement("li");
        if(carros[i].completed === true){
            li.classList.add("completed");
        }

        const img = document.createElement("img");
        img.src = carros[i].text;

         const deletar = document.createElement("button");
        deletar.textContent = "Deletar";
        deletar.classList.add("delete");
        deletar.setAttribute("onclick", `deletarTarefa(${carros[i].id})`)

        const div = document.createElement("div");

        div.appendChild(deletar)

        li.appendChild(img);
        li.appendChild(div);

        listaCarros.appendChild(li);
    }
}

function deletarTarefa(id){
    const index = carros.findIndex(carros => carros.id === id);
    carros.splice(index,1);
    localStorage.setItem("carros", JSON.stringify(carros))
    render(); 
}

function addPeloEnter(evento){
    if (evento.key === `Enter`){
        adicionarCarro();
    }
}

function adicionarCarro(){
    const carrosLocalStore = localStorage.getItem("carros")
    if(carrosLocalStore){
        carros = JSON.parse(carrosLocalStore);
        render();
    }
}