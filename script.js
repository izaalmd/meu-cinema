const filmes = [
    { titulo: "Sociedade dos Poetas Mortos", ano: "1989", poster: "https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", descricao: "O novo professor de Inglês John Keating é introduzido a uma escola preparatória de meninos que é conhecida por suas antigas tradições e alto padrão. Ele usa métodos pouco ortodoxos para atingir seus alunos, que enfrentam enormes pressões de seus pais e da escola.", diretor: "Peter Weir", duracao: "2h 8m", lancamento: "28 de fevereiro de 1990" },
    { titulo: "Clube da Luta", ano: "1999", poster: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg", descricao: "Um funcionário de escritório insone e um fabricante de sabão formam um clube de luta clandestino que evolui para algo muito mais.", diretor: "David Fincher", duracao: "2h 19m", lancamento: "15 de outubro de 1999" },
    { titulo: "Star Wars", ano: "1977", poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg", descricao: "Luke Skywalker se junta a um Cavaleiro Jedi, um piloto arrogante, um Wookiee e dois droides para salvar a galáxia do Império, enquanto também tenta resgatar a Princesa Leia do misterioso Darth Vader.", diretor: "George Lucas", duracao: "2h 1m", lancamento: "25 de maio de 1977" },
    { titulo: "O Hobbit", ano: "2012", poster: "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg", descricao: "Um hobbit relutante, Bilbo Bolseiro, parte para a Montanha Solitária com um grupo vigoroso de anões para reclamar sua casa na montanha e o ouro dentro dela do dragão Smaug.", diretor: "Peter Jackson", duracao: "2h 49m", lancamento: "14 de dezembro de 2012" },
    { titulo: "Senhor dos Anéis", ano: "2001", poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg", descricao: "Um manso hobbit da Terra-média e oito companheiros partem em uma jornada para destruir o poderoso Um Anel e salvar a Terra-média do Lorde das Trevas Sauron.", diretor: "Peter Jackson", duracao: "2h 58m", lancamento: "19 de dezembro de 2001" },
    { titulo: "Alice no País das Maravilhas", ano: "2010", poster: "https://image.tmdb.org/t/p/w500/o0kre9wRCZz3jjSjaru7QU0UtFz.jpg", descricao: "Alice de dezenove anos retorna ao mundo mágico de sua infância, onde se reúne com seus velhos amigos e aprende sobre seu verdadeiro destino: acabar com o reinado de terror da Rainha Vermelha.", diretor: "Tim Burton", duracao: "1h 48m", lancamento: "5 de março de 2010" },
    { titulo: "Onde Está Segunda?", ano: "2017", poster: "https://m.media-amazon.com/images/M/MV5BMjQwODQwNTg4OV5BMl5BanBnXkFtZTgwMTk4MTAzMjI@._V1_SX300.jpg", descricao: "Uma mulher acorda sem memória e descobre que está vivendo a mesma segunda-feira repetidamente. Ela precisa descobrir o que aconteceu e como quebrar o ciclo.", diretor: "Dean Israelite", duracao: "1h 36m", lancamento: "16 de março de 2017" },
    { titulo: "Como Eu Era Antes de Você", ano: "2016", poster: "https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_SX300.jpg", descricao: "Uma garota em uma pequena cidade forma um vínculo improvável com um homem recentemente paralisado que ela está cuidando.", diretor: "Thea Sharrock", duracao: "1h 50m", lancamento: "23 de junho de 2016" }
];

const series = [
    { titulo: "Brooklyn Nine-Nine", ano: "2013", poster: "https://image.tmdb.org/t/p/w500/hgRMSOt7a1b8qyQR68vUixJPang.jpg", descricao: "Jake Peralta, um detetive imaturo mas talentoso do NYPD, deve aprender a seguir as regras quando um capitão exigente assume o comando de seu esquadrão.", diretor: "Dan Goor, Michael Schur", duracao: "22 min por episódio", lancamento: "17 de setembro de 2013", temporadas: "8 temporadas" },
    { titulo: "The Office", ano: "2005", poster: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg", descricao: "Uma equipe de funcionários de escritório trabalha em uma filial da Dunder Mifflin Paper Company em Scranton, Pensilvânia, sob a liderança do egoísta Michael Scott.", diretor: "Greg Daniels", duracao: "22 min por episódio", lancamento: "24 de março de 2005", temporadas: "9 temporadas" },
    { titulo: "Sandman", ano: "2022", poster: "https://image.tmdb.org/t/p/w500/q54qEgagGOYCq5D1903eBVMNkbo.jpg", descricao: "Após anos de aprisionamento, Morpheus embarca em uma jornada através de mundos diferentes para encontrar o que foi roubado dele e restaurar seu poder.", diretor: "Neil Gaiman, David S. Goyer", duracao: "50 min por episódio", lancamento: "5 de agosto de 2022", temporadas: "1 temporada" },
    { titulo: "Breaking Bad", ano: "2008", poster: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg", descricao: "Um professor de química diagnosticado com câncer pulmonar inoperável se volta para a fabricação e venda de metanfetamina para garantir o futuro de sua família.", diretor: "Vince Gilligan", duracao: "47 min por episódio", lancamento: "20 de janeiro de 2008", temporadas: "5 temporadas" },
    { titulo: "The Boys", ano: "2019", poster: "https://image.tmdb.org/t/p/w500/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg", descricao: "Um grupo de vigilantes se propõe a derrubar super-heróis corruptos que abusam de seus superpoderes.", diretor: "Eric Kripke", duracao: "60 min por episódio", lancamento: "26 de julho de 2019", temporadas: "4 temporadas" },
    { titulo: "Suits", ano: "2011", poster: "https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", descricao: "Um talentoso advogado de Nova York contrata um brilhante estudante universitário que nunca frequentou a faculdade de direito, mas possui um talento excepcional.", diretor: "Aaron Korsh", duracao: "42 min por episódio", lancamento: "23 de junho de 2011", temporadas: "9 temporadas" },
    { titulo: "Gossip Girl", ano: "2007", poster: "https://image.tmdb.org/t/p/w500/hvDlmhoImfX5oUYS2gXxsMrpSTB.jpg", descricao: "Adolescentes privilegiados de Manhattan enfrentam drama, romance e intrigas enquanto uma blogueira anônima revela seus segredos mais sombrios.", diretor: "Josh Schwartz, Stephanie Savage", duracao: "42 min por episódio", lancamento: "19 de setembro de 2007", temporadas: "6 temporadas" },
    { titulo: "Black Mirror", ano: "2011", poster: "https://image.tmdb.org/t/p/w500/7PRddO7z7mcPi21nZTCMGShAyy1.jpg", descricao: "Uma antologia de histórias que exploram um futuro próximo distorcido onde as maiores inovações da humanidade e os instintos mais sombrios colidem.", diretor: "Charlie Brooker", duracao: "60 min por episódio", lancamento: "4 de dezembro de 2011", temporadas: "6 temporadas" },
    { titulo: "Lucifer", ano: "2016", poster: "https://image.tmdb.org/t/p/w500/ekZobS8isE6mA53RAiGDG93hBxL.jpg", descricao: "Entediado com sua vida no inferno, o diabo se muda para Los Angeles, abre uma boate e faz consultoria para o Departamento de Polícia de Los Angeles.", diretor: "Tom Kapinos", duracao: "45 min por episódio", lancamento: "25 de janeiro de 2016", temporadas: "6 temporadas" }
];

const animes = [
    { titulo: "Castelo Animado", ano: "2004", poster: "https://m.media-amazon.com/images/M/MV5BMTY1OTg0MjE3MV5BMl5BanBnXkFtZTcwNTUxMTkyMQ@@._V1_SX300.jpg", descricao: "Sophie, uma jovem chapeleira, tem sua vida transformada quando é amaldiçoada por uma bruxa e envelhece prematuramente. Ela busca ajuda no castelo ambulante do mago Howl.", diretor: "Hayao Miyazaki", duracao: "1h 59m", lancamento: "20 de novembro de 2004" },
    { titulo: "Fullmetal Alchemist", ano: "2003", poster: "https://cdn.myanimelist.net/images/anime/10/75815.jpg", descricao: "Os irmãos Edward e Alphonse Elric usam alquimia para tentar ressuscitar sua mãe, mas o ritual dá errado e eles pagam um preço terrível. Agora buscam a Pedra Filosofal para recuperar seus corpos.", diretor: "Seiji Mizushima", duracao: "24 min por episódio", lancamento: "4 de outubro de 2003", temporadas: "1 temporada" },
    { titulo: "Violet Evergarden", ano: "2018", poster: "https://cdn.myanimelist.net/images/anime/1795/95088.jpg", descricao: "Violet Evergarden, uma ex-soldado, trabalha como escritora de cartas para ajudar outros a expressar seus sentimentos, enquanto busca compreender o significado das últimas palavras de seu comandante.", diretor: "Taichi Ishidate", duracao: "24 min por episódio", lancamento: "11 de janeiro de 2018", temporadas: "1 temporada" },
    { titulo: "Attack on Titan", ano: "2013", poster: "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg", descricao: "A humanidade vive cercada por muralhas gigantes para se proteger dos Titãs, criaturas humanoides gigantes que devoram humanos. Eren Yeager jura exterminar todos os Titãs após sua mãe ser morta.", diretor: "Tetsuro Araki", duracao: "24 min por episódio", lancamento: "7 de abril de 2013", temporadas: "4 temporadas" },
    { titulo: "JoJo's Bizarre Adventure", ano: "2012", poster: "https://cdn.myanimelist.net/images/anime/3/40409.jpg", descricao: "A saga épica da família Joestar através de gerações, cada uma enfrentando ameaças sobrenaturais com poderes únicos chamados Stands em aventuras bizarras e emocionantes.", diretor: "Naokatsu Tsuda", duracao: "24 min por episódio", lancamento: "6 de outubro de 2012", temporadas: "6 temporadas" },
    { titulo: "Vidas ao Vento", ano: "2013", poster: "https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_SX300.jpg", descricao: "Jiro Horikoshi sonha em voar e projetar belos aviões. Inspirado pelo famoso designer italiano Caproni, ele se torna um dos mais importantes engenheiros aeronáuticos do Japão.", diretor: "Hayao Miyazaki", duracao: "2h 6m", lancamento: "20 de julho de 2013" },
    { titulo: "Cemitério dos Vagalumes", ano: "1988", poster: "https://image.tmdb.org/t/p/w500/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg", descricao: "Durante a Segunda Guerra Mundial no Japão, dois irmãos órfãos lutam para sobreviver após perderem sua mãe em um bombardeio. Uma história tocante sobre amor fraternal e os horrores da guerra.", diretor: "Isao Takahata", duracao: "1h 29m", lancamento: "16 de abril de 1988" }
];

function createCard(item) {
    return `
        <div class="card" onmouseenter="showModal(${JSON.stringify(item).replace(/"/g, '&quot;')})" onmouseleave="hideModal()">
            <img src="${item.poster}" alt="${item.titulo}" class="card-poster" onerror="this.src='https://via.placeholder.com/300x450/1a1a1a/ff0066?text=${encodeURIComponent(item.titulo)}'">
            <div class="card-info">
                <h3>${item.titulo}</h3>
                <p>${item.ano}</p>
            </div>
        </div>
    `;
}

function showModal(item) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <img src="${item.poster}" alt="${item.titulo}">
        <div class="modal-info">
            <h2>${item.titulo}</h2>
            <p class="descricao">${item.descricao}</p>
            <p><strong>Data de lançamento:</strong> ${item.lancamento}</p>
            <p><strong>Diretor:</strong> ${item.diretor}</p>
            <p><strong>Duração:</strong> ${item.duracao}</p>
            ${item.temporadas ? `<p><strong>Temporadas:</strong> ${item.temporadas}</p>` : ''}
        </div>
    `;
    modal.style.display = 'flex';
}

function hideModal() {
    document.getElementById('modal').style.display = 'none';
}

function renderFilmes() {
    const grid = document.getElementById('filmes-grid');
    grid.innerHTML = filmes.map(createCard).join('');
}

function renderSeries() {
    const grid = document.getElementById('series-grid');
    grid.innerHTML = series.map(createCard).join('');
}

function renderAnimes() {
    const grid = document.getElementById('animes-grid');
    grid.innerHTML = animes.map(createCard).join('');
}

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});

// Fechar modal ao clicar fora
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        hideModal();
    }
});

renderFilmes();
renderSeries();
renderAnimes();
