import { StatusBar } from "expo-status-bar";  
import React, { useEffect, useState } from "react";  
import { StyleSheet, View, FlatList } from "react-native"; 
import Constants from "expo-constants";
import Bloco from "../components/Bloco";
export default function ListaEmails({ navigation }) 
{
  const [email, setEmail] = useState([]);
  useEffect(() => { 
    async function getData() 
    {
      const response = await fetch("https://mobile.ect.ufrn.br:3002/emails/");
      const email = await response.json();  
      setEmail(email);
    }
    getData();
  }, []);  
  function renderItem({ item }) 
  {
    return ( 
      <View>
        <Bloco
          navigation = { navigation }
          id = { item.id }
          to = { item.to }
          tittle = { item.tittle}
          summary = { item.summary }
          time = { item.time }
          star = { item.star }
          picture = { item.picture }
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data = { email }  
        renderItem = { renderItem }
        keyExtractor = { (item) => item.id }
        showsVerticalScrollIndicator = { false }
      />
    </View>
  );
}
const styles = StyleSheet.create(
{
  container: 
  {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: Constants.statusBarHeight,
  },
});
