function pesquisar()
{
    let section = document.getElementById ("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa)
    {
        section.innerHTML = "<p>Nada foi encontrado, você precisa digitar algo!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let dado of dados)
    {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa))
        {
            resultados += 
            `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descrição-meta">${dado.descricao}</p>
                <a href=${dado.wiki} target="_blank">Wiki</a>
                <a href=${dado.social} target="_blank">Rede Social</a>
                <a href=${dado.spotify} target="_blank">Spotify</a>
            </div>
            `;
        }
    }

    if (!resultados)
    {
        resultados = "<p>Nada foi encontrado. Esse é um site sobre o BTS, lamentamos não poder trazer mais informações!</p>"
    }
    section.innerHTML = resultados;
}