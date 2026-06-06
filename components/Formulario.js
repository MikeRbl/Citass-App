import { View, Text, Modal, ScrollView, Pressable, TextInput, StyleSheet, Alert } from "react-native";
import React, { useState, useRef } from "react";
import { DatePicker } from "@s77rt/react-native-date-picker";
import { SafeAreaView } from 'react-native-safe-area-context';

const Formulario = ({ modalVisible, cerrarModal, pacientes, setPacientes }) => {
    const [paciente, setPaciente] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState(null); 
    const [sintomas, setSintomas] = useState('');

    const datePicker = useRef(null); 

    const limpiarYBuscarSalida = () => {
        setPaciente('');
        setPropietario('');
        setEmail('');
        setTelefono('');
        setFecha(null);
        setSintomas('');
        cerrarModal();
    };

    const handleCita = () => {
      if([paciente, propietario, email, telefono, sintomas].includes('') || !fecha){
        Alert.alert('Error', 'Todos los campos son obligatorios');
        return;
      }

      const nuevoPaciente = {
        id: Date.now().toString(),
        paciente,
        propietario,
        email,
        telefono,
        fecha, 
        sintomas
      };

      setPacientes([...pacientes, nuevoPaciente]);
      limpiarYBuscarSalida();
    }

    return (
        <Modal animationType="slide" visible={modalVisible}>
            <SafeAreaView style={styles.formulario}>
                <ScrollView>

                    <Text style={styles.titulo}>Nueva Cita</Text>

                    <Pressable style={styles.btnCancelar} onPress={limpiarYBuscarSalida}>
                        <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre del Paciente</Text>
                        <TextInput 
                          style={styles.input}
                          placeholder="Nombre del Paciente"
                          placeholderTextColor={"#666"}
                          value={paciente}
                          onChangeText={setPaciente}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre del Propietario</Text>
                        <TextInput 
                          style={styles.input}
                          placeholder="Nombre del Propietario"
                          placeholderTextColor={"#666"}
                          value={propietario}
                          onChangeText={setPropietario}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Correo Electrónico</Text>
                        <TextInput 
                          style={styles.input}
                          placeholder="Correo Electrónico"
                          placeholderTextColor={"#666"}
                          keyboardType="email-address"
                          value={email}
                          onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Número Telefónico</Text>
                        <TextInput 
                          style={styles.input}
                          placeholder="Número Telefónico"
                          placeholderTextColor={"#666"}
                          keyboardType="phone-number"
                          value={telefono}
                          onChangeText={setTelefono}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha y Hora</Text>
                        <Pressable
                          style={styles.inputPicker}
                          onPress={() => datePicker.current?.showPicker()}
                        >
                          <Text
                            style={[
                              styles.inputText,
                              !fecha && styles.placeholderText,
                            ]}
                          >
                            {fecha
                              ? fecha.toLocaleString([], {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })
                              : "Selecciona Fecha y Hora..."}
                          </Text>
                          <Text style={styles.iconoCalendario}>📅</Text>
                        </Pressable>

                        <DatePicker
                            ref={datePicker}
                            date={fecha || new Date()} 
                            onDateChange={(date) => setFecha(date)}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Síntomas</Text>
                        <TextInput 
                          style={[styles.input, styles.sintomasInput]}
                          placeholder="Describe los síntomas..."
                          placeholderTextColor={"#666"}
                          value={sintomas}
                          onChangeText={setSintomas}
                          multiline={true}
                          numberOfLines={4}
                        />
                    </View>

                    <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
                        <Text style={styles.btnNuevaCitaTexto}>Guardar</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
}
const styles = StyleSheet.create({
  // Tus estilos originales...
  formulario: { backgroundColor: "#6D28D9", flex: 1, },
  titulo: { fontSize: 30, fontWeight: "600", textAlign: "center", marginTop: 30, color: "#FFF", },
  btnCancelar: { marginVertical: 30, backgroundColor: "#5827A4", marginHorizontal: 30, padding: 15, borderRadius: 10, },
  btnCancelarTexto: { color: "#FFF", textAlign: "center", fontWeight: "900", fontSize: 16, textTransform: "uppercase", },
  campo: { marginTop: 10, marginHorizontal: 30, },
  label: { color: "#FFF", marginBottom: 10, marginTop: 15, fontSize: 20, fontWeight: "600", },
  input: { backgroundColor: "#FFF", padding: 15, borderRadius: 10, },
  btnNuevaCita: { marginVertical: 50, backgroundColor: "#F59E0B", paddingVertical: 15, marginHorizontal: 30, borderRadius: 10, },
  btnNuevaCitaTexto: { color: "#5827A4", textAlign: "center", fontWeight: "900", fontSize: 16, textTransform: "uppercase", },
  
  // Estilos obligatorios para el Date Picker del profesor:
  inputPicker: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 16,
    color: "#000", 
  },
  placeholderText: {
    color: "#666",
  },
  iconoCalendario: {
    fontSize: 18,
  },
});

export default Formulario;