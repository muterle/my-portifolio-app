import { View, Text, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

const BioScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.text}>Olá, tudo bem?</Text>
          <Text style={styles.text}>
            Sou Carlos Alberto Muterle, mais conhecido como Beto.
          </Text>
          <Text style={styles.text}>
            Sou casado, tenho um filho e uma cachorrinha, adoro esportes e estou
            sempre pronto para ajudar alguém.
          </Text>
          <Text style={styles.text}>
            Trabalho a mais de 15 anos com desenvolvimento de software, a
            maioria destes anos trabalhando com logística.
          </Text>
          <Text style={styles.text}>
            Já trabalhei com as várias linguagens de programação neste tempo.
          </Text>
          <Text style={styles.text}>
            Estou trabalhando com a stack JavaScript faz um pouco mais de 4
            anos, sendo principalmente como backend, mas atacando de front
            também quando necessário.
          </Text>
          <Text style={styles.text}>
            Destes 4 anos, faz 3 anos que estou trabalhando em uma startup,
            atuando como desenvolvedor, teach lead, contato com cliente e
            elaboração dos projetos, ajudando desde o início do desenvolvimento
            da empresa.
          </Text>
          <Text style={styles.text}>
            Estou sempre buscando melhorar como profissional e pessoa.
          </Text>
          <Text style={styles.text}>
            Neste tempo, o que mais me deixa contente e orgulhoso, foi poder
            ajudar vários companheiros que estavam iniciando sua carreira a
            aprender e crescer profissionalmente.
          </Text>
        </View>

        <StatusBar style="light" />
      </View>
    </ScrollView>
  );
};

export default BioScreen;
