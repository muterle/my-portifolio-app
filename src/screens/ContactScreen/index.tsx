import { View, Text, Linking } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fique a vontade para entrar em contato</Text>
      <Text style={styles.icon}>
        <MaterialCommunityIcons
          name="phone"
          size={40}
          color="#00c16c"
          onPress={() => Linking.openURL(`tel:011953860501`)}
        />
        {"   "}
        <MaterialCommunityIcons
          name="whatsapp"
          size={40}
          color="#00c16c"
          onPress={() =>
            Linking.openURL(`whatsapp://send?phone=+5511953860501`)
          }
        />
      </Text>
      <Text style={styles.text}>(11) 9 5386-0501</Text>
      <Text style={styles.icon}>
        <MaterialCommunityIcons
          name="mailbox-open-up"
          size={40}
          color="#00c16c"
          onPress={() => Linking.openURL("mailto:carlosmuterle@outlook.com")}
        />
      </Text>
      <Text style={styles.text}>carlosmuterle@outlook.com</Text>
      <StatusBar style="light" />
    </View>
  );
};

export default ContactScreen;
