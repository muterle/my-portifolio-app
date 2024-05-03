import { View, Text, Image, Button } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import profileImg from "../../images/eu.jpeg";
import OpenLink from "../../components/OpenLink";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={profileImg} />
      <Text style={styles.name}>Carlos Alberto Muterle</Text>
      <Text style={styles.nickname}>(Beto) </Text>
      <OpenLink
        url="https://www.linkedin.com/in/cmuterle/"
        style={{
          backgroundColor: "#0e76a8",
          width: "60%",
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
          }}
        >
          <MaterialCommunityIcons
            name="linkedin"
            size={20}
            style={{ marginRight: 30 }}
          />
          LinkedIn
        </Text>
      </OpenLink>
      <OpenLink
        url="https://github.com/muterle"
        style={{
          backgroundColor: "#000000",
          width: "60%",
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
          }}
        >
          <MaterialCommunityIcons name="github" size={20} />
          GitHub
        </Text>
      </OpenLink>

      <StatusBar style="light" />
    </View>
  );
};

export default ProfileScreen;
