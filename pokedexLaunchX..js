const fetchPokemon = () =>{
    const pokeName = document.getElementById("pokeName")
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=>{
        if(res.status !="200"){
            console.log(res);
            pokeImage("https://media.giphy.com/media/UHAYP0FxJOmFBuOiC2/giphy.gif");
        }else{
            return res.json()
        }
    }).then((data)=>{
        console.log(data);
        let pokeImg= data.sprites.front_default;
       
        //console.log(pokeImg);
        //console.log(data.name)
        pokeImage(pokeImg);
        fetchNombre();
        //pokeNombre(pokeNombre);
    })
}
fetchPokemon();
const fetchNombre = () =>{
    const pokeName = document.getElementById("pokeName")
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=>{
        return res.json;
    }).then((data) =>{
        let pokeNombre=data.name;
        pokeName(pokeNombre);
    })
}


// const pokeNombre=(url) =>{
//     const pokeNombre = document.g
// }
const pokeImage = (url) => {
    const pokeImg= document.getElementById("pokeImg");
    pokeImg.src = url;
}
const pokeName = (url) => {
    const pokeNombre= document.getElementById("pokeNombre")
    pokeNombre.placeholder= url;
    console.log(url)
}

//const pokeNombre = (url)

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")

