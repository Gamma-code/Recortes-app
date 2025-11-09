import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import ReportCard from "../components/ReportCard";
import { useNavigation } from "@react-navigation/native";
import { useReports } from "../Save/ReportSave";

export default function FeedScreen() {
  const navigation = useNavigation();
  const { reports } = useReports();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Feed de Reportes</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("AddReport" as never)}
        >
          <Text style={styles.addText}>+ Agregar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de reportes */}
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ReportCard report={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 40, color: "#666" }}>
            No hay reportes aún. ¡Agrega uno!
          </Text>
        }
      />
    </View>
  );
}

// Estilos
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
