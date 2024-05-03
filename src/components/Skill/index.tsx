import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface SkillProps {
  skill: string;
  level: number;
}

const Skill = ({ skill, level }: SkillProps) => {
  const returnStars = () => {
    const stars = [];

    for (let index = 0; index < level; index++) {
      stars.push(1);
    }

    const diff = 5 - stars.length;

    for (let index = 0; index < diff; index++) {
      stars.push(0);
    }

    return stars;
  };

  return (
    <>
      <Text style={styles.text}>{skill}</Text>
      <View style={styles.containerStars}>
        {returnStars().map((star) => (
          <MaterialCommunityIcons
            name={star === 1 ? "star" : "star-outline"}
            size={30}
            color="#00c16c"
          />
        ))}
      </View>
    </>
  );
};

export default Skill;
