import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView } from "react-native";

export default function AddReportScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nuevo Reporte</Text>

      {/*para la ubicacion*/}
      <Text style={styles.label}>Ubicacion</Text>
      <TouchableOpacity style={styles.locationButton}>
        <Text style={styles.locationButtonText}>Actualizar ubicación</Text>
      </TouchableOpacity>
      <Text style={styles.locationText}>Stockton St 1-99, San Francisco, CA</Text>

      {/*Para la imagen*/}
      <Text style={styles.label}>Imagen</Text>
      <TouchableOpacity style={styles.imageBox}>
        <Text style={styles.imageText}>Toca para agregar imagen</Text>
      </TouchableOpacity>

      {/*para la desripcion*/}
      <Text style={styles.label}>Descripcion</Text>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="Describe el problema que quieres reportar..."
      />

      {/*Boton */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Enviar Reporte</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 6,
    marginTop: 10,
  },
  locationButton: {
    backgroundColor: "#1d3870ff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  locationButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  locationText: {
    color: "#020101ff",
    marginTop: 8,
    fontStyle: "italic",
    textAlign: "center",
  },
  imageBox: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  imagePlaceholder: {
    fontSize: 32,
  },
  imageText: {
    color: "#888",
    fontSize: 14,
    marginTop: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    minHeight: 170,
    textAlignVertical: "top",
    backgroundColor: "#f9f9f9",
  },
  submitButton: {
    backgroundColor: "#a72839ff",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 20,
  },
  submitText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
