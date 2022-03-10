import pokemonApi from "@/api/pokemonApi"
//Importando axios configurado


const obtenerPokemons = () =>{
    const pokemonsArrays = Array.from (Array(650))
    //Se crea un arreglo con 650 espacios vacios.
    return pokemonsArrays.map ((_,index) => index + 1)
    //LLena los arreglos desde 0 al 649, arreglos rellenados.
}

const obtenerPokemonsOptions = async() => {

    //Mezclar arreglo pokemones.
    const mezclaPokemons = obtenerPokemons().sort( () => Math.random() - 0.5)

    //Necesitamos los 4 pokemones, con el metodo splice.
    const pokemons = await obtenerNombrePokemons (mezclaPokemons.splice(0,4))

    return pokemons

}

const obtenerNombrePokemons = async( [a,b,c,d] = []) => {
    const arrPromesas = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]
  

    const [p1,p2,p3,p4] = await Promise.all(arrPromesas)
    
    return [
        {name: p1.data.name,id: p1.data.id},
        {name: p2.data.name,id: p2.data.id},
        {name: p3.data.name,id: p3.data.id},
        {name: p4.data.name,id: p4.data.id}
    ]
    


}


export default obtenerPokemonsOptions