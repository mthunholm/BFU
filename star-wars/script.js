console.log('hello obi waan')


const helpObiButton = document.querySelector('#help-obi')
const resultsSection = document.querySelector('.results')

helpObiButton.addEventListener('click', getInfoFromApi)


async function getInfoFromApi() {
    const query = document.querySelector('#character-id').value.trim();
    if (!query){
        resultsSection.innerText = 'Who are you looking for?';
        return;}

    if (!isNaN(query)) {
    const baseUrl = `https://swapi.dev/api/people/${query}/`;
        try{
        const response = await fetch(baseUrl);
        if (!response.ok){
            throw new Error('Character not found');}
            
    const data = await response.json();
    displayCharacterInfo(data);} 
    catch (error) {
        resultsSection.innerText = `${error.message}`;}} 
        else {
        const baseUrl = `https://swapi.dev/api/people/?search=${query}`;
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        if (data.count === 0) {
            throw new Error('Character not found');}
        displayCharacterInfo(data.results[0]);}
        catch (error) {
            resultsSection.innerText = `${error.message}`;
        }
}
}


function displayCharacterInfo(data){
    const infoObi = `
        Name: ${data.name}
        Height: ${data.height} cm
        Mass: ${data.mass} kg
        Hair Color: ${data.hair_color}
        Skin Color: ${data.skin_color}
        Eye Color: ${data.eye_color}
        Birth Year: ${data.birth_year}
        Gender: ${data.gender}
    `;
    
    resultsSection.innerText = infoObi;

    }