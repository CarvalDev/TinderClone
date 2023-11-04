import { StyleSheet } from 'react-native';
import React from 'react';

const perfil = StyleSheet.create({
    body: {
        flex: 1,
        margin: 0,
        top: 0,
    },
    container: {
        height: '100%',
        width: '100%',
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '7%',
        width: '100%',
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        width: '100%',
    },
    logoNav: {
        width: 140,
        height: 30,
        marginTop: 5,
    }, 
    configNav: {
        width: 35,
        height: 35,
    },
    icons2: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginRight: 20,
    },
    shieldImg: {
        width: 24,
        height: 24,
    },
    configImg: {
        width: 30,
        height: 30,
    },
    main: {
        height: '85%',
        width: '100%',
    },
    footer: {
        height: '8%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: '100%',
    },
    tinderFooter: {
        width: 30,
        height: 30,
    },
    estrelaFooter: {
        width: 37,
        height: 37,
    },
    searchFooter: {
        width: 30,
        height: 30,
    },
    commentFooter: {
        width: 30,
        height: 30,
    },
    personFooter: {
        width: 30,
        height: 30,
    },
    box1: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '30%',
        flexDirection: 'column',
        display: 'flex',
    },
    edita: {
        borderRadius: 50,
        height: 40,
        width: 40,
        backgroundColor: '#DCDCDC',
        position: 'absolute',
        right: -12,
        alignItems: 'center',
        justifyContent: 'center',
        top: 15,
    },
    editaPerfil: {
        width: 20,
        height: 20,
    },
    fotoPerfil: {
        width: '93%',
        height: '93%',
        borderRadius: '50%',
    },
    bordaImagem: {
        width: 150,
        height: 150,
        borderRadius: '50%',
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#CD5C5C',
    },
    concluido: {
        marginTop: 10,
        borderRadius: 25,
        backgroundColor: '#CD5C5C',
        position: 'absolute',
        top: '72%',
        width: '40%',
    },
    textoConcluido: {
        padding: 6,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    nomePerfil: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        width: '100%',
        height: '5%',
    },
    box2: {
        height: '65%',
        backgroundColor:'#D3D3D3',
    },
    boosts: {
        height: '28%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    contBoost: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: '30%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    contBoost1: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: '30%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 10,
    },
    starCont: {
        width: 35,
        height: 35,
        marginTop: 8,
    },
    textosCont: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tituloBoost: {
        color: '#696969',
        fontSize: 11,
        fontWeight: 'bold',
    },
    tituloBoost1: {
        color: '#696969',
        fontSize: 11,
        fontWeight: 'bold',
    },
    recebaMais: {
        color: '#0000FF',
        fontWeight: 'bold',
        fontSize: 12,
    },
    recebaMais2: {
        color: '#FF00FF',
        fontWeight: 'bold',
        fontSize: 12,
    },
    card: {
        height: '67%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    carde: {
        borderWidth: 1,
        width: '98vw',
        height: '36vh',
        borderRadius: 8,
        borderColor: 'red',
        
    },
    bolas: {
        flexDirection: 'row',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    bola: {
        height: '55%',
        width: '2.5%',
        borderRadius: '100%',
        textAlign: 'center',
        color: 'transparent',
        backgroundColor: 'black',
    },
    bola2: {
        height: '55%',
        width: '2.5%',
        borderRadius: '100%',
        textAlign: 'center',
        color: 'transparent',
        backgroundColor: '#696969',
        
    },

    



});

export default perfil
