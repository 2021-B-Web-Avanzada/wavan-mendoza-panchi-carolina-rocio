import Pokemon from "./Pokemon"

export default class Entrenador {
    public nombreEntrenador:string;
    public claseEntrenador:string
    public edadEntrenador:number;
    public numeroPokebolas:number;
    public fechaInicio: string;
    public Pokedex: Pokemon[]= [];
    static EntrenadoresLista: Entrenador[]= [];
    static fs = require("fs");
    static path: string = "./poketrainer.json"

    constructor(
        nombreEntrenadorParametro: string,
        claseEntrenadorParametro: string,
        edadEntrenadorParametro: number,
        numeroPokebolasParametro: number,
        fechaInicioParametro: string,
        PokedexParametro: Pokemon[]
    ){
        this.nombreEntrenador = nombreEntrenadorParametro;
        this.claseEntrenador = claseEntrenadorParametro;
        this.edadEntrenador = edadEntrenadorParametro;
        this.numeroPokebolas = numeroPokebolasParametro;
        this.fechaInicio = fechaInicioParametro;
        this.Pokedex = PokedexParametro;
    }

    public añadirPokemon(pokemon:Pokemon):void{
        this.Pokedex.push(pokemon);
        Entrenador.promesaEscribirArchivo();
    }

    public eliminarPokemon(indice: number):void{
        this.Pokedex.splice(indice,1);
        Entrenador.promesaEscribirArchivo();
    }


    public actualizarEntrenador(
        nombreEntrenadorParametro: string,
        claseEntrenadorParametro: string,
        edadEntrenadorParametro: number,
        numeroPokebolasParametro: number,
        fechaInicioParametro: string,
        PokedexParametro:  Pokemon[]
    ):void{
        this.nombreEntrenador = nombreEntrenadorParametro;
        this.claseEntrenador = claseEntrenadorParametro;
        this.edadEntrenador = edadEntrenadorParametro;
        this.numeroPokebolas = numeroPokebolasParametro;
        this.fechaInicio = fechaInicioParametro;
        this.Pokedex = PokedexParametro;
        Entrenador.promesaEscribirArchivo();
    }

    static añadirEntrenador(entrenador:Entrenador): void {
        Entrenador.EntrenadoresLista.push(entrenador);
        Entrenador.promesaEscribirArchivo();
    }

    static eliminarEntrenador(indice:number): void{
        Entrenador.EntrenadoresLista.splice(indice,1);
        Entrenador.promesaEscribirArchivo();
    }

    //Promesas de lectura y escritura
    static promesaLeerArchivo():Promise<unknown>{
        const promesaLectura = new Promise (
            (resolve, reject) => {
                this.fs.readFile(
                    this.path,
                    'utf-8',
                    (error, contenido) => {
                        if(error){
                            reject('error lectura');
                        }
                        else{
                            resolve(contenido);
                        }
                    }
                );
            }
        )
        return promesaLectura
    }

    static promesaEscribirArchivo():Promise<unknown> {
        const promesaEscritura = new Promise (
            (resolve, reject) => {
                this.fs.writeFile(
                    this.path,
                    JSON.stringify(Entrenador.EntrenadoresLista),
                    'utf-8',
                    (error, contenido) => {
                        if(error){
                            reject('error escritura');
                        }
                        else{
                            resolve(contenido);
                        }
                    }
                );
            }
        )
        return promesaEscritura
    }
}








