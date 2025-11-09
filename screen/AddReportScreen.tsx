import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import { useReports } from "../Save/ReportSave";
import { useNavigation } from "@react-navigation/native";

export default function AddReportScreen() {
  const [locationName, setLocationName] = useState("Ubicación no detectada");
  const [image, setImage] = useState<string | null>(null);
  const [description, setDescription] = useState("");

  const { addReport } = useReports();
  const navigation = useNavigation();

  // 📍 Obtener ubicación actual
  const handleGetLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permiso denegado", "Se necesita acceso a la ubicación.");
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      const reverse = await Location.reverseGeocodeAsync(loc.coords);

      if (reverse.length > 0) {
        const { city, region, street } = reverse[0];
        setLocationName(`${street || ""}, ${city || ""}, ${region || ""}`);
      } else {
        setLocationName("Ubicación detectada, pero sin nombre disponible");
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo obtener la ubicación.");
    }
  };

  // 📸 Tomar una foto
  const handleSelectImage = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permiso denegado", "Se necesita acceso a la cámara.");
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
      



    } catch (error) {
      Alert.alert("Error", "No se pudo abrir la cámara.");
    }
  };

  // 📤 Enviar reporte y guardarlo en el contexto
  const handleSubmit = () => {
  if (!description || !image || locationName === "Ubicación no detectada") {
    Alert.alert("Faltan datos", "Completa todos los campos antes de enviar.");
    return;
  }

  addReport({
    name: "Usuario anónimo", 
    location: locationName,
    image: image!,
    description,
  });

  Alert.alert("✅ Reporte enviado", "Tu reporte se ha registrado correctamente.");
  setDescription("");
  setImage(null);
  setLocationName("Ubicación no detectada");
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nuevo Reporte</Text>

      {/* 📍 Ubicación */}
      <Text style={styles.label}>Ubicación</Text>
      <TouchableOpacity style={styles.locationButton} onPress={handleGetLocation}>
        <Text style={styles.locationButtonText}>Actualizar ubicación</Text>
      </TouchableOpacity>
      <Text style={styles.locationText}>{locationName}</Text>

      {/* 📸 Imagen */}
      <Text style={styles.label}>Imagen</Text>
      <TouchableOpacity style={styles.imageBox} onPress={handleSelectImage}>
        {image ? (
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        ) : (
          <Text style={styles.imageText}>Toca para agregar imagen</Text>
        )}
      </TouchableOpacity>

      {/* 📝 Descripción */}
      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={styles.textInput}
        multiline
        value={description}
        onChangeText={setDescription}
        placeholder="Describe el problema que quieres reportar..."
      />

      {/* 📤 Botón enviar */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
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
