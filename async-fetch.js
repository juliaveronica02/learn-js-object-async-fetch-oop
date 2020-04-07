fetch('https://swapi.co/api/people/1')
.then(response =>{
    // console.log(response)
    return response.json()//dalam bentuk json.
})
.then(data =>{//data sebagai alias dalam bentu json.
    console.log(data);//apa saja datanya
    const {name, skin_color, gender, films} = data;//films ada array

    let linksFilm ='';
    films.forEach((item,index) =>{//item array dari film dan index dimulai dari array pertama yaitu 0.
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
const serverWanderLink = 'http://35.240.201.155:3000/'
fetch (`${serverWanderLink}api/v1/wanderlink/show/idn/destination`)
.then (response =>{
    return response.json();
})
.then (data =>{
    console.log(data)
    data.forEach(item =>{
        const stringHTMl =`
        <div class="col-sm-6 col-md-4">
        <img width = "100%" height="100px" src="${serverWanderLink}${item.images && item.images[0]}"/>
        ${item.destinationName}
        <br>
        ${item.address}
        <br>
        ${item.city}
        </div>
        `;
        document.getElementById('wanderlink').innerHTML += stringHTMl;
    })
})