import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import ReportCard from "../components/ReportCard";

interface Report {
  id: string;
  name: string;
  location: string;
  time: string;
  description: string;
  image: string;
}


//Aqui puse los ejemplos de las tarjetas
const reports: Report[] = [
  {
    id: "1",
    name: "Brayan Gamaliel",
    location: "La paz",
    time: "Hace 2 horas",
    description: "Problema con el alumbrado público en la calle principal",
    image: "😎",
  },
  {
    id: "2",
    name: "Brayan Gamaliel",
    location: "La Paz",
    time: "Hace 2 horas",
    description: "Basura acumulada en los contenedores del parque",
    image: "😎",
  },
  {
    id: "3",
    name: "Brayan Gamaliel",
    location: "La Paz",
    time: "Hace 2 horas",
    description: "Basura acumulada en los contenedores del parque",
    image: "😎",
  },


];

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Feed de Reportes</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>+ Agregar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ReportCard report={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}


//Diseño de la app 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: "#f9f9f9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  addButton: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addText: {
    color: "#fff",
    fontWeight: "600",
  },
});
