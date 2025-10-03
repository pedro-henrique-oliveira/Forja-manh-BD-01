const resultsDiv = document.getElementById("results")

async function fetchCarros(){
    resultsDiv.innerHTML = "<p>Carregando...</p>"

    try {
        const response = await fetch('../Dados/data.json')
        const data = await response.json()
        //console.log(data)

        if(data.error){
            resultsDiv.innerHTML = "<p>Erro ao buscar produtos!!!</p>"
            return
        }
        resultsDiv.innerHTML = ''

        data.forEach(Carros => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img src="${Carros.imagem}" alt="${Carros.nome}">
                <h2>${Carros.nome}</h2>
                <h2>${Carros.descricao}</h3>
                <p>$${Carros.preco.toFixed(3)}</p>              
            `

            resultsDiv.appendChild(card)
        });

    } catch (error) {
         resultsDiv.innerHTML = "<p>Erro ao buscar produtos!!!</p>"
    }
}

fetchCarros()