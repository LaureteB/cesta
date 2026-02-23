import React from "react";
import { Text, Image, Dimensions, StyleSheet, View } from "react-native";

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width= Dimensions.get('screen').width;


export default function Cesta(){
    return<>
    <Image source={topo} style={estilos.topo} />

    <Text style={estilos.titulo}>Detalhes da Cesta </Text>
    <Text style={estilos.nome}>Cesta de verduras </Text>

    <View style={estilos.fazenda}>
    <Image source={logo} style={estilos.imagemFazenda} />
    <Text style={estilos.nomeFazenda}>Jenny Jack Farm </Text> 
    </View>

    <Text>Uma cesta com produtos selecionados
        cuidadosamente da fazenda direto para
        sua cozinha. </Text>
    <Text style={estilos.preco}>R$ 40,10</Text>
    </>
}

const estilos = StyleSheet.create({
topo:{
    width:"100%",
    height: 578/768 * width
},
titulo:{
    width:"100%",
    position:"absolute",
    textAlign:"center",
    fontSize:16,
    lineHeight:26,
    color:"white",
    fontWeight:"bolt",
    padding:16,
},
cesta:{
    paddingVertical:8,
    paddingHorizontal:16,

},
nome:{
    color:"#000",
    fontSize: 36,
    lineHeight: 42,
    fontWeight:"bold"
},
fazenda:{
    fontSize: 16,
    lineHeight: 26,
},
imagemFazenda:{
    width:32,
    height:32,
},
descricao:{
    color:"#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
},
preco:{
    color:"#ff0000",
    fontWeight:"bold",
    fontSize: 26,
    fontWeight: 46,
    marginTop: 8,
    fontWeight:"bolt",    
},
nomeFazenda:{
    fontSize: 16,
    lineHeight: 26,
    color:"#37aa41",
},
})
