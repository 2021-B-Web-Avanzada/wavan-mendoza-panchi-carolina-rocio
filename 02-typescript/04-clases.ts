//04-clases.ts
class Persona {
    public nombre:string;
    public apellido:string
    static nombreReferencial:string = 'Humano';
    protected nombreApellido = ''; //Duck typing -> string
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ){
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreApellido = nombreParametro + ' ' + apellidoParametro;
    }
    private mostrarNombreApellido():string{
        return this.nombreApellido;
    }
}
class Usuario extends Persona{
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula:string, //Modificador de acceso ->Propiedad de la clase
        public estadoCivil: string // Modificador de acceso ->Propiedad de la clase
    ){
        super(nombreParametro, apellidoParametro);
    }
}
const carolina = new Usuario(
    'Carolina',
    'Mendoza',
    '1726999954',
    'Soltera'
);

carolina.nombre;
carolina.apellido;
carolina.cedula;
carolina.estadoCivil;




