let data = [{
    'uf':'',
    'suspeitos': `<div class='spiner blue'></div>`,
    'confirmados':`<div class='spiner gold'></div>`,
    'mortos': `<div class='spiner red'></div>`}];

const showData = (data) =>{
divCriada = document.createElement('div');
divCriada.innerHTML = ` <div class="brasil">Brasil ${data.uf}</div>
<div class="suspeitos" id="caixas">Supeitos<br> ${data.suspeitos}</div>
<div class="confirmados" id="caixas">Confirmado<br> ${data.confirmados}</div>
<div class="mortos" id="caixas">Mortos <br> ${data.mortos}</div>`;
const texto = document.querySelector('.texto');
texto.removeChild(texto.firstChild);
texto.appendChild(divCriada);

}


const coronaVirus  = async ()=>{
const  url = `https://covid19-brazil-api.now.sh/api/report/v1/brazil`;
const getApi = await fetch(url);
const json = await getApi.json();

document.querySelector('.confirmados').innerHTML=` Confirmado<br> ${json.data.confirmed}`;
document.querySelector('.mortos').innerHTML=` Mortos<br> ${json.data.deaths}`;

}

const getCoronaState  = async ()=>{
    const  url = `https://covid19-brazil-api.now.sh/api/report/v1/`;
    const getApi = await fetch(url);
    const json = await getApi.json();
    
    data = await json.data;

}

const findEvent = (evento)=>{
    const ufMap = evento.target.id;
    const json = data.find (state=> state.uf.match(ufMap)); // aqui esta pegando os dados do banco de dados e verificando o estado clickado e selecionado no banco o estado conforme o clickado.
    document.querySelector('.brasil').innerHTML=`Estado ${json.uf}`;
    document.querySelector('.suspeitos').innerHTML=`Suspeitos <br>${json.suspects}`;
    document.querySelector('.confirmados').innerHTML=`Confirmado <br>${json.cases}`;
    document.querySelector('.mortos').innerHTML=`Mortos<br> ${json.deaths}`;
  
}
document.querySelector('svg').addEventListener('mouseover', findEvent);

showData(data[0]);
coronaVirus();
getCoronaState();