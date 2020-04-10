fetch('https://swapi.co/api/people/1')
    .then(response => {
        // console.log(response)
        return response.json() //dalam bentuk json.
    })
    .then(data => { //data sebagai alias dalam bentu json.
        console.log(data); //apa saja datanya
        const {
            name,
            skin_color,
            gender,
            films
        } = data; //films ada array

        let linksFilm = '';
        films.forEach((item, index) => { //item array dari film dan index dimulai dari array pertama yaitu 0.
            linksFilm += `<a href="${item}">film ${index+1}</a>`;
        })
        const peopleHTMLString = `
    <div class="col-sm-6 col-md-4"> 
    name: ${name}
    <br>
    skin color: ${skin_color}
    <br>
    gender: ${gender}
    <br>
    films: ${linksFilm}
    </div>`
        document.getElementById('starwars').innerHTML = peopleHTMLString;
    })

//wanderlink api
// const serverWanderLink = 'http://35.240.201.155:3000/'
// fetch(`${serverWanderLink}api/v1/wanderlink/show/idn/destination`)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data)
//         data.forEach(item => {
//             const {
//                 destinationName,
//                 address,
//                 city,
//                 images
//             } = item;
//             const stringHTMl = `
//         <div class="col-sm-6 col-md-4">
//         <img width = "100%" height="100px" src="${serverWanderLink}${item.images && item.images[0]}"/>
//         ${item.destinationName}
//         <br>
//         ${item.address}
//         <br>
//         ${item.city}
//         </div>
//         `;
//             document.getElementById('wanderlink').innerHTML += stringHTMl;
//         })
//     })

//wanderlink API 2
const addWonderlink = (item,nomor) => {
    const {
        destinationName,
        address,
        city,
        images
    } = item;

    const stringHTMl = `
    <div class="col-sm-6 col-md-4">
        <img width = "100%" height="100px" src="${serverWonderlink}${item.images && item.images[0]}"/>
        ${nomor}${item.destinationName}
        <br>
        ${item.address}
        <br>
        ${item.city}
        </div>
    `;
    document.getElementById('wanderlink').innerHTML += stringHTMl;
}
const serverWonderlink = 'http://35.240.201.155:3000/'
fetch(`${serverWonderlink}api/v1/wanderlink/show/idn/destination`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        // for (let i = 10; i < 20; i++) {
        //     addWonderlink(data[i]);
        // }
        dataWonderlink = data;
        next();
    })
    let dataWonderlink = [];
    let currentPages = 0;

    const show10 = (noIndex = 0)=>{
        const maxNomor = 10 + noIndex;
        document.getElementById('wanderlink').innerHTML ="";
        for (noIndex; noIndex < maxNomor;noIndex++){
            addWonderlink(dataWonderlink[noIndex], noIndex);
        }
        currentPages = maxNomor;
    }
    const previous = ()=>{
        show10 (currentPages -20);
    }
    const next = ()=>{
        show10 (currentPages);
    }