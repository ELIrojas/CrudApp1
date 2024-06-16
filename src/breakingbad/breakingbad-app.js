
//rergesar un object 
/**
 * 
 * @returns {Promise<Object}quote information
 */
const fetchQuote = async() =>{
    // Realiza una solicitud HTTP GET a la URL especificada para obtener una cita de "Breaking Bad".
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    // const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    //para obtener el body de la peticion 
    const data = await res.json();//Espera la respuesta de la solicitud y la convierte en un objeto JSON.
    return data[0];//devuelve la primera consulta del array
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BrekingbadApp =async (element)=>{
    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    // element.innerHTML = 'Loading...';
    // const quote = await fetchQuote();//obtener la consulta y esperar que se resuelva
    // element.innerHTML = 'We have Data';
//creams elements de HTML
const quoteLabel = document.createElement ('blockquote');
const authoLabel = document.createElement('h3');
const nextQuoteButtom = document.createElement('button');
nextQuoteButtom.innerText  = 'Next Quote';

const renderQuote = (data)=>{
    quoteLabel.innerHTML=data.quote;
    authoLabel.innerHTML=data.author;
    element.replaceChildren(quoteLabel,authoLabel,nextQuoteButtom);
}
//añadir listener
 nextQuoteButtom.addEventListener("click", async()=>{
    element.innerHTML = 'Loading...';//show looadiing message
    const newQuote=await fetchQuote();//get new data
    renderQuote(newQuote); // Render new data
 });


fetchQuote()
.then(renderQuote);
}

 