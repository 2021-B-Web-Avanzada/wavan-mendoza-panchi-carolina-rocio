import Entrenador from "./Entrenador"

export default class Pokemon {
    public nombrePokemon:string;
    public ataque:string;
    public nivel:number;
    public tipoPokemon:string;
    public atrapado:boolean;

    constructor(
        nombrePokemonParametro:string,
        ataqueParametro:string,
        nivelParametro:number,
        tipoPokemonParametro:string,
        atrapadoParametro:boolean
    ){
        this.nombrePokemon = nombrePokemonParametro;
        this.ataque = ataqueParametro;
        this.nivel = nivelParametro;
        this.tipoPokemon = tipoPokemonParametro;
        this.atrapado = atrapadoParametro;
    }

    public actualizarPokemon(
        nombrePokemonParametro:string,
        ataqueParametro:string,
        nivelParametro:number,
        tipoPokemonParametro:string,
        atrapadoParametro:boolean
    ):void{
        this.nombrePokemon = nombrePokemonParametro;
        this.ataque = ataqueParametro;
        this.nivel = nivelParametro;
        this.tipoPokemon = tipoPokemonParametro;
        this.atrapado = atrapadoParametro;
        Entrenador.promesaEscribirArchivo();
    }
}








