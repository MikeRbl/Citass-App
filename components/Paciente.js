import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const Paciente = ({ item, setModalVisible, setPaciente, setModalPaciente }) => {

  const formatearFecha = (fecha) => {
    if (!fecha) return "";
    const dateObj = typeof fecha === 'string' ? new Date(fecha) : fecha;
    return dateObj.toLocaleString([], {
      day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit",
    });
  };

  return (
    <Pressable 
      onLongPress={() => {
        setPaciente(item);
        if(setModalPaciente) setModalPaciente(true);
      }}
    >
      <View style={styles.tarjeta}>
        <Text style={styles.label}> Paciente: </Text>
        <Text style={styles.texto}> {item.paciente}</Text>
        <Text style={styles.fecha}> {formatearFecha(item.fecha)}</Text>

        <View style={styles.contenedorBotones}>
          
          {/* BOTÓN EDITAR */}
          <Pressable 
            style={[styles.btn, styles.btnEditar]}
            onPress={() => {
              setPaciente(item);
              setModalVisible(true);
            }}
          >
            <Text style={styles.btnTexto}> Editar</Text>
          </Pressable>

          <Pressable style={[styles.btn, styles.btnEliminar]}>
            <Text style={styles.btnTexto}> Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tarjeta: { backgroundColor: '#FFF', padding: 20, borderBottomColor: '#94A3B8', borderBottomWidth: 1, marginHorizontal: 10, borderRadius: 10, marginTop: 10 },
  label: { color: '#374151', textTransform: 'uppercase', fontWeight: '700', marginBottom: 5 },
  texto: { color: '#6D28D9', fontSize: 24, fontWeight: '900', marginBottom: 5 },
  fecha: { color: '#374151', fontWeight: '500' },
  contenedorBotones: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  btn: { paddingVertical: 8, paddingHorizontal: 20, borderRadius: 5 },
  btnEditar: { backgroundColor: '#F59E0B' },
  btnEliminar: { backgroundColor: '#EF4444' },
  btnTexto: { color: '#FFF', textTransform: 'uppercase', fontWeight: '700', fontSize: 12 }
});

export default Paciente;