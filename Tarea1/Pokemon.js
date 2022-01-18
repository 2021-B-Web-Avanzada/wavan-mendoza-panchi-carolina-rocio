"use strict";
exports.__esModule = true;
var Entrenador_1 = require("./Entrenador");
var Pokemon = /** @class */ (function () {
    function Pokemon(nombrePokemonParametro, ataqueParametro, nivelParametro, tipoPokemonParametro, atrapadoParametro) {
        this.nombrePokemon = nombrePokemonParametro;
        this.ataque = ataqueParametro;
        this.nivel = nivelParametro;
        this.tipoPokemon = tipoPokemonParametro;
        this.atrapado = atrapadoParametro;
    }
    Pokemon.prototype.actualizarPokemon = function (nombrePokemonParametro, ataqueParametro, nivelParametro, tipoPokemonParametro, atrapadoParametro) {
        this.nombrePokemon = nombrePokemonParametro;
        this.ataque = ataqueParametro;
        this.nivel = nivelParametro;
        this.tipoPokemon = tipoPokemonParametro;
        this.atrapado = atrapadoParametro;
        Entrenador_1["default"].promesaEscribirArchivo();
    };
    return Pokemon;
}());
exports["default"] = Pokemon;
