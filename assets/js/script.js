const url = 'https://api.adviceslip.com/advice';
const p = document.getElementById('p');

async function Gerar (){
    p.innerHTML = 'Sua jornada de inspiração está prestes a começar...'

    const response = await fetch(url);
    const data = await response.json();
    let msg = await data.slip.advice;

    const urlTraducao = `https://api.mymemory.translated.net/get?q=${msg}&langpair=en-GB|pt-BR`;
    
    async function traduzir() {
    const response = await fetch(urlTraducao);
    const data = await response.json()

    p.innerHTML = data.responseData.translatedText;
}
    traduzir()
}



