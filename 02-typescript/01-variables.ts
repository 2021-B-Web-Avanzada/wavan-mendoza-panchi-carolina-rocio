//01-variables.ts

let nombre: string = 'Carolina'; //referencia al primitivo
let nombre2: String = 'Carolina2'; // referencia a la clase String
//ya no nos permite poner un numero en una variable de tipo string
//nombre =1

nombre ='Carolinaaa';
let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo=12.4;

//Duck Typing
//Intenta entender el tipo de variable
let apellido = 'Mendoza'; //string
apellido = 'Carolina'; //igual a otros strings
apellido.toUpperCase(); //metodos string

let marihuana:any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

let edadMultiple: number | string | Date = 2;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();

// incorrecto por que no definimos que esta variable sea tipo booblean solo numero, string o date
//edadMultiple = true;

interface Usuario {
    nombre:string;
    apellido:string;
    edad?: number | undefined ;  //opcional
    sueldo?: number;  //opcional
    casado:boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto:(impuesto: number) =>number;
    estadoActual: () => 'AP' | 'AF' | 'AT';
    //calcularImpuestos parametro numero impuesto sueldo + sueldo * impuesto
    //estadoActual noreciba parametros, AP, AF, AT
}

let user: Usuario = {
    nombre:'Carolina',
    apellido: 'Mendoza',
    edad: 21,
    sueldo: 2222,
    casado: 0,
    estado:'AC',
    imprimirUsuario: (mensaje) =>{
        return 'El mensaje es: ' + mensaje;
    },

    calcularImpuesto: impuesto =>{
        return sueldo + sueldo * impuesto;
    },

    estadoActual: () =>{
        switch(this.estado){
            case "AC":
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    },
}






