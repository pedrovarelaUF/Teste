import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function Email({ route }) 
{
  const { id } = route.params;
  const [email, setEmail] = useState({});
  useEffect(() => 
  {
    async function getData() 
    {
      const response = await fetch(
        "https://mobile.ect.ufrn.br:3002/emails/" + id
      );
      const email = await response.json();
      setEmail(email);
    }
    getData();
  }, []);  
  
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{email.tittle}</Text>
        {email.star ? (<AntDesign name = "star" size = { 40 } color="#FFD700" />) : (<AntDesign name = "staro" size = { 40 } color="#F0E68C" />)}
      </View>
      <View style = { styles.information }>
        <View style = { styles.informationMain }>
          <Text style = { styles.informationMain }>From: </Text>
          <Image source = {{ uri: email.picture }} style = { styles.image } />
          <Text style = { styles.informationMain }> { email.from }, </Text>
          <Text style={ styles.informationMain }>To: </Text>
          <Text style={ styles.informationMain }>{email.to}</Text>
        </View>
        <View style={ styles.informationTime }>
          <Text>{ email.time }</Text>
        </View>
      </View>
      <View style={styles.emailBody}>
        <Text>{ email.star }</Text>
        <Text>{ email.body }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
{
  container: 
  {
    flex: 1,
  },
  title: 
  {
    backgroundColor: "#4F4F4F",
    fontWeight: "bold",
    margin: 2,
    borderBottomWidth: 2,
    borderBottomColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: 
  {
    fontWeight: "bold",
    fontSize: 40,
    color: "#7FFFD4",
  },
  information: {
    backgroundColor: "#4F4F4F",
    borderBottomWidth: 2,
    borderBottomColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 2,
  },
  informationMain: 
  {
    flexDirection: "row",
    alignItems: "center",
  },
  informationTime: 
  {
    flexDirection: "column",
    justifyContent: "center",
  },
  informationText: 
  {
    color: "#7FFFD4",
  },
  image: 
  {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  emailBody: 
  {
    margin: 5,
  },
});
