import { TouchableOpacity, StyleSheet, Linking, Text } from "react-native";

const OpenLink = (props: any) => {
  const { url, children, style } = props;

  const onPress = () =>
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url);
    });

  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default OpenLink;
