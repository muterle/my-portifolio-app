import { View, Text, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import Skill from "../../components/Skill";

const HardSkillsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Skill skill="TypeScript" level={5} />
          <Skill skill="Express" level={4} />
          <Skill skill="React" level={3} />
          <Skill skill="MySQL" level={4} />
          <Skill skill="SQL" level={5} />
          <Skill skill="MongoDB" level={3} />
          <Skill skill="NestJs" level={4} />
          <Skill skill="TypeORM" level={4} />
          <Skill skill="Ionic" level={3} />
          <Skill skill="Java" level={3} />
          <Skill skill="C#" level={3} />
          <Skill skill="CSS" level={3} />
          <Skill skill="Logística" level={4} />
        </View>
        <StatusBar style="light" />
      </View>
    </ScrollView>
  );
};

export default HardSkillsScreen;
