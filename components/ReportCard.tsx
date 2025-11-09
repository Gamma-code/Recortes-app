import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface Report {
  id: string;
  name: string;
  location: string;
  time: string;
  description: string;
  image: string; // URI del archivo (por ejemplo: file:///...)
}

interface Props {
  report: Report;
}

export default function ReportCard({ report }: Props) {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{report.name}</Text>
          <Text style={styles.location}>{report.location}</Text>
        </View>
        <Text style={styles.time}>{report.time}</Text>
      </View>

      {/* Imagen del reporte */}
      <View style={styles.imageBox}>
        {report.image ? (
          <Image source={{ uri: report.image }} style={styles.image} />
        ) : (
          <Text style={styles.imageText}>Sin imagen</Text>
        )}
      </View>

      {/* Descripción */}
      <Text style={styles.description}>{report.description}</Text>

      {/* Botones de acción */}
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
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    overflow: "hidden", // asegura que la imagen respete el borde redondeado
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageText: {
    color: "#888",
    fontSize: 14,
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
