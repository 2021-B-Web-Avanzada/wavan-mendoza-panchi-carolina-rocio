import Entrenador from "./Entrenador"
import Pokemon from "./Pokemon";

async function entrenadorAsync(){
    var datos: unknown;
    try{
        datos = await Entrenador.promesaLeerArchivo();
    }catch(error){
        console.log(error);
    }
    return datos;
}

Entrenador.promesaLeerArchivo().then(
    (datosPromesa) => {
        console.table([Entrenador.EntrenadoresLista[0], ]);
        console.table([Entrenador.EntrenadoresLista[1], ]);
        console.log(Entrenador.EntrenadoresLista[1]);
    }
)

const ent1 = new Entrenador(
    "Picnicker",
    "Entrenador Pokemon",
    18,
    25,
    "12-10-2020",
    []
)
Entrenador.añadirEntrenador(ent1);

const ent2 = new Entrenador(
    "Hex maniac",
    "Líder de gimnasio",
    16,
    9,
    "09-06-2019",
    []
)
Entrenador.añadirEntrenador(ent2);

const ponyta = new Pokemon(
    "Ponyta",
    "Absorbe fuego",
    30,
    "Fuego",
    false
);

ent1.añadirPokemon(ponyta);

const banette = new Pokemon(
    "Banette",
    "Insomnio",
    37,
    "fantasma",
    true
);

ent2.añadirPokemon(banette);

const mrMime = new Pokemon(
    "Mr Mime",
    "Insonorizar",
    42,
    "fantasma",
    true
);


ent2.añadirPokemon(mrMime);

ent2.eliminarPokemon(0);

ent2.actualizarEntrenador(
    "Hex maniac",
    "Líder de gimnasio",
    16,
    8,
    "09-06-2019",
    []
)
