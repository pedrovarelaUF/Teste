import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Bloco (props) 
{
  const { id, navigation, picture, star, tittle, time, to} = props;
  return (
    <View style = { styles.bloco}>
        <TouchableOpacity onPress = { () => navigation.navigate("Email", { id: id, }) } style = { styles.Toque }>
        <View style = { styles.imgContainer }>
          <Image source = { { uri: picture }} style = { styles.imagem } />
        </View>
        <View style = { styles.info1 }>
          <View style = { styles.info2 }>
            <Text style = { styles.f1 }> { to } </Text>
            <Text style = { styles.f2 }> { tittle } </Text>
          </View>
          <View style = { styles.info3 }>
            <Text style = { styles.f1 }> { time } </Text>
            {star ? (<AntDesign name = "star" size = {40} color = "#FFD700" />) : (<AntDesign name = "staro" size = {40} color = "#ffffff"/>)}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create(
{
  //Tutorial de estilo de texto https://reactnative.dev/docs/text
  bloco: 
  {
    width: "100%",
    backgroundColor: "#4F4F4F",
    borderTopWidth: 2,
    borderTopColor: "#ffffff",
  },
  Toque: 
  {
    width: "100%",
    flexDirection: "row",
  },
  imagem: 
  {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  imgContainer: 
  {
    width: "30%",
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  info1: 
  {
    width: "50%",
    flexDirection: "row",
  },
  info2: 
  {
    flexDirection: "column",
    width: "70%",
  },
  info3: 
  {
    flexDirection: "column",
    width: "30%",
  },
  f1: 
  {
    color: "#7FFFD4",
    fontWeight: "bold",
    fontSize: 15,
  },
  f2: 
  {
    color: "#7FFFD4",
    fontSize: 25,
  },
});
