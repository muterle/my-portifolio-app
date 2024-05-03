import { View, Text, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import Skill from "../../components/Skill";

const SoftSkillsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Skill skill="Empatia" level={5} />
          <Skill skill="Positividade" level={5} />
          <Skill skill="Adaptabilidade" level={5} />
          <Skill skill="Gerenciamento do tempo" level={3} />
          <Skill skill="Inteligência emocional" level={4} />
          <Skill skill="Foco" level={3} />
          <Skill skill="Resiliência" level={5} />
          <Skill skill="Comunicação" level={5} />
          <Skill skill="Trabalho em equipe" level={5} />
          <Skill skill="Liderança" level={4} />
        </View>
        <StatusBar style="light" />
      </View>
    </ScrollView>
  );
};

export default SoftSkillsScreen;
