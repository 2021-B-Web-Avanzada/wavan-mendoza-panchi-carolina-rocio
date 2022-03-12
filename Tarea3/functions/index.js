
const functions = require("firebase-functions");
const admin = require("firebase-admin");

const express = require("express");
const cors = require("cors");
const e = require("express");

const app = express();


admin.initializeApp({
    credential: admin.credential.cert("./permisos.json"),
  });

const db=admin.firestore();


//Crear entrenador
app.post('/entrenador',async(req,res)=>{
    const entrenadorRef= db.collection("entrenador").doc(); //genera un id en firebase
    await entrenadorRef.set(req.body).
    then(()=>{
        res.status(200).send();
    })
    .catch((err)=>{
        res.status(500).send();
    })
});


//Eliminar un Entrenador por su id
app.delete('/entrenador/:ent_id', async(req,res)=>{
    try{
        const entrenador = db.collection("entrenador").doc(req.params.ent_id);
        await entrenador.delete();
        return res.status(200).json();
    }catch(error){
        return res.status(500).json();
    }
});


//Editar un entrenador por id
app.put('/entrenador/:ent_id', async(req,res)=>{
    try{
        const entrenador = db.collection("entrenador").doc(req.params.ent_id);
        await entrenador.update({ //se pasa por update los datos a editar
            numeroPokebolas: req.body.numeroPokebolas,
        }); 
        return res.status(200).json();
    }catch(error){
        return res.status(500).json();
    }
});


//Enlistar los entrenadores
app.get('/entrenadoresLista', async(req,res) =>{
    try{
        const query = db.collection('entrenador');
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;
    
        const response = docs.map( (doc) => ({
            id: doc.id,
            claseEntrenador: doc.data().claseEntrenador,
            edadEntrenador: doc.data().edadEntrenador,
            fechaInicio: doc.data().fechaInicio,
            nombreEntrenador: doc.data().nombreEntrenador,
            numeroPokebolas: doc.data().numeroPokebolas,
            pokedex: doc.data().pokedex,
        }));
    
        return res.status(200).json(response);

    }catch(error){
        return res.status(500).json();
    }
});


//Crear pokemon
app.post('/entrenador/:ent_id/pokemon',async(req,res)=>{
    const pokemon = db.collection("entrenador")
    .doc(req.params.ent_id) 
    .collection("pokemon")
    .doc();
    await pokemon.set(req.body)
    .then(()=>{
        res.status(200).send();
    })
    .catch((err)=>{
        res.status(500).send();
    })
});


//Eliminar un pokemon por su id
app.delete('/entrenador/:ent_id/pokemon/:poke_id', async(req,res)=>{
    try{
        const pokemon = db.collection("entrenador").doc(req.params.ent_id).collection("pokemon").doc(req.params.poke_id);
        await pokemon.delete();
        return res.status(200).json();
    }catch(error){
        return res.status(500).json();
    }
});


//Editar un pokemon por su id
app.put('/entrenador/:ent_id/pokemon/:poke_id', async(req,res)=>{
    try{
        const pokemon = db.collection("entrenador").doc(req.params.ent_id).collection("pokemon").doc(req.params.poke_id);
        await pokemon.update({ //se pasa por update los datos a editar
            nivel: req.body.nivel,
        }); 
        return res.status(200).json();
    }catch(error){
        return res.status(500).json();
    }
});


//Enlistar los pokemones de un determinado entrenador con su id
app.get('/entrenador/:ent_id/pokemonesLista', async(req,res) =>{
    try{
        const pokemones = db.collection("entrenador").doc(req.params.ent_id).collection("pokemon");
        const querySnapshot = await pokemones.get();
        const docs = querySnapshot.docs;
    
        const response = docs.map( (doc) => ({
            id: doc.id,
            nombrePokemon: doc.data().nombrePokemon,
            tipoPokemon:doc.data().tipoPokemon,
            nivel:doc.data().nivel,

        }));
    
        return res.status(200).json(response);

    }catch(error){
        return res.status(500).json();
    }
});


exports.app=functions.https.onRequest(app);

