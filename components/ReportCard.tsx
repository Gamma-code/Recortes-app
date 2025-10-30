import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Report {
  id: string;
  name: string;
  location: string;
  time: string;
  description: string;
  image: string;
}

interface Props {
  report: Report;
}

export default function ReportCard({ report }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{report.name}</Text>
          <Text style={styles.location}>{report.location}</Text>
        </View>
        <Text style={styles.time}>{report.time}</Text>
      </View>

      <View style={styles.imageBox}>

        <Text style={styles.imageText}>Imagen del reporte</Text>
        <Text style={styles.emoji}>{report.image}</Text>
      </View>

      <Text style={styles.description}>{report.description}</Text>

      
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Text>👍 Me gusta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>💬 Comentar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>📤 Compartir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  location: {
    color: "#666",
    fontSize: 13,
  },
  time: {
    color: "#999",
    fontSize: 12,
  },
  imageBox: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  imageText: {
    color: "#888",
    fontSize: 14,
    marginBottom: 4,
  },
  emoji: {
    fontSize: 30,
  },
  description: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#f8f8f8",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
});
