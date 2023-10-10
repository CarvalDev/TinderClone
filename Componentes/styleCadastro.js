import { StyleSheet } from 'react-native';
import React from 'react'

const styleCadastro = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        top: 0,
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        top: 0,
        width: '100vw',
    },
    box: {
        height: '50vh',
        flexDirection: 'column',
        gap: 10,
        width: '80vw',
        alignItems: 'center',
    },
    topo: {
        display: 'flex',
        width: '100%',
        height: '6vh',
        justifyContent: 'center',
    },
    carrega: {
        width: '100%',
        backgroundColor: '#EBEAEA',
        height: '1vh',
    },
    porcento: {
        fontSize: 6.8,
        color: 'transparent',
        width: '10%',
    },
    carrega2: {
        width: '100%',
        backgroundColor: '#EBEAEA',
        height: '1vh',
    },
    porcento2: {
        fontSize: 6.8,
        color: 'transparent',
        width: '20%',
    },
    img: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    header: {
        width: '90vw',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 33,  
    },
    msg: {
        width: '90vw',
    },
    msg1: {
        width: '90vw',
        fontWeight: 'bold',
    },
    input: {
        width: '90vw',
        borderBottomWidth: 2,
        height: 40,
        borderWidth: 'none',
        marginTop: 20,
    },
    box2: {
        width: '90vw',
        height: '41vh',
        justifyContent: 'flex-end',
        paddingBottom: 15,
        alignItems: 'center',
    },
    butao: {
        backgroundColor: '#EBEAEA',
        borderRadius: 50,
        width: '80vw',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    butaoT: {
        fontSize: 20,
        color: 	'#4F4F4F',
    }


})

export default styleCadastro