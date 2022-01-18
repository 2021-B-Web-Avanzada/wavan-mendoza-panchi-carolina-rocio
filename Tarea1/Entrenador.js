"use strict";
exports.__esModule = true;
var Entrenador = /** @class */ (function () {
    function Entrenador(nombreEntrenadorParametro, claseEntrenadorParametro, edadEntrenadorParametro, numeroPokebolasParametro, fechaInicioParametro, PokedexParametro) {
        this.Pokedex = [];
        this.nombreEntrenador = nombreEntrenadorParametro;
        this.claseEntrenador = claseEntrenadorParametro;
        this.edadEntrenador = edadEntrenadorParametro;
        this.numeroPokebolas = numeroPokebolasParametro;
        this.fechaInicio = fechaInicioParametro;
        this.Pokedex = PokedexParametro;
    }
    Entrenador.prototype.añadirPokemon = function (pokemon) {
        this.Pokedex.push(pokemon);
        Entrenador.promesaEscribirArchivo();
    };
    Entrenador.prototype.eliminarPokemon = function (indice) {
        this.Pokedex.splice(indice, 1);
        Entrenador.promesaEscribirArchivo();
    };
    Entrenador.prototype.actualizarEntrenador = function (nombreEntrenadorParametro, claseEntrenadorParametro, edadEntrenadorParametro, numeroPokebolasParametro, fechaInicioParametro, PokedexParametro) {
        this.nombreEntrenador = nombreEntrenadorParametro;
        this.claseEntrenador = claseEntrenadorParametro;
        this.edadEntrenador = edadEntrenadorParametro;
        this.numeroPokebolas = numeroPokebolasParametro;
        this.fechaInicio = fechaInicioParametro;
        this.Pokedex = PokedexParametro;
        Entrenador.promesaEscribirArchivo();
    };
    Entrenador.añadirEntrenador = function (entrenador) {
        Entrenador.EntrenadoresLista.push(entrenador);
        Entrenador.promesaEscribirArchivo();
    };
    Entrenador.eliminarEntrenador = function (indice) {
        Entrenador.EntrenadoresLista.splice(indice, 1);
        Entrenador.promesaEscribirArchivo();
    };
    //Promesas de lectura y escritura
    Entrenador.promesaLeerArchivo = function () {
        var _this = this;
        var promesaLectura = new Promise(function (resolve, reject) {
            _this.fs.readFile(_this.path, 'utf-8', function (error, contenido) {
                if (error) {
                    reject('error lectura');
                }
                else {
                    resolve(contenido);
                }
            });
        });
        return promesaLectura;
    };
    Entrenador.promesaEscribirArchivo = function () {
        var _this = this;
        var promesaEscritura = new Promise(function (resolve, reject) {
            _this.fs.writeFile(_this.path, JSON.stringify(Entrenador.EntrenadoresLista), 'utf-8', function (error, contenido) {
                if (error) {
                    reject('error escritura');
                }
                else {
                    resolve(contenido);
                }
            });
        });
        return promesaEscritura;
    };
    Entrenador.EntrenadoresLista = [];
    Entrenador.fs = require("fs");
    Entrenador.path = "./poketrainer.json";
    return Entrenador;
}());
exports["default"] = Entrenador;
