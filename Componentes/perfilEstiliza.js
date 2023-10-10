import { StyleSheet } from 'react-native';
import React from 'react';

const perfil = StyleSheet.create({
    body: {
        flex: 1,
        margin: 0,
        top: 0,
    },
    container: {
        height: '100vh',
        width: '100vw',
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '7%',
        width: '100%',
        borderWidth: 1,

    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginLeft: 10,
    },
    fogoTinder: {
        width: 25,
        height: 35,
    },
    tinderFoto: {
        width: 70,
        height: 35,
    },
    icons2: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginRight: 10,
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
        borderWidth: 1,
    },
    footer: {
        height: '8%',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    tinderFooter: {
        width: 30,
        height: 30,
    },
    estrelaFooter: {
        width: 30,
        height: 30,
    },
    searchFooter: {
        width: 28,
        height: 28,
    },
    commentFooter: {
        width: 30,
        height: 30,
    },
    personFooter: {
        width: 30,
        height: 30,
    },


});

export default perfil
