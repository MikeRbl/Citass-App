import React from 'react';
// 1. IMPORTACIÓN CORREGIDA: Traemos SafeAreaView directo de react-native
import { Modal, View, Text, Pressable, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const InformacionPaciente = ({ paciente, setPaciente, setModalPaciente }) => {
    
    const formatearFecha = (fecha) => {
        if (!fecha) return "";
        try {
            const dateObj = typeof fecha === 'string' ? new Date(fecha) : fecha;
            return dateObj.toLocaleString([], {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            });
        } catch (error) {
            return "Fecha inválida"; // Blindaje por si el navegador envía un formato distinto
        }
    };

    const cerrarModal = () => {
        setModalPaciente(false);
        setPaciente({}); // Limpieza del estado
    };

    return (
        <Modal animationType="slide" visible={true}>
            <SafeAreaView style={styles.contenedor}>
                <Text style={styles.titulo}>Detalles de la Cita</Text>
                
                <Pressable style={styles.btnCerrar} onPress={cerrarModal}>
                    <Text style={styles.btnCerrarTexto}>X Cerrar Ventana</Text>
                </Pressable>

                <ScrollView style={styles.contenido}>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Paciente:</Text>
                        <Text style={styles.valor}>{paciente.paciente}</Text>
                    </View>
                    
                    <View style={styles.campo}>
                        <Text style={styles.label}>Propietario:</Text>
                        <Text style={styles.valor}>{paciente.propietario}</Text>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.valor}>{paciente.email}</Text>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono:</Text>
                        <Text style={styles.valor}>{paciente.telefono}</Text>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha y Hora:</Text>
                        <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Síntomas:</Text>
                        <Text style={styles.valor}>{paciente.sintomas}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    contenedor: { backgroundColor: '#6D28D9', flex: 1 },
    titulo: { fontSize: 30, fontWeight: '900', textAlign: 'center', marginTop: 30, color: '#FFF' },
    btnCerrar: { marginVertical: 20, backgroundColor: '#5827A4', marginHorizontal: 30, padding: 15, borderRadius: 10 },
    btnCerrarTexto: { color: '#FFF', textAlign: 'center', fontWeight: '900', fontSize: 16, textTransform: 'uppercase' },
    contenido: { backgroundColor: '#FFF', marginHorizontal: 30, borderRadius: 10, padding: 20, marginBottom: 30 },
    campo: { marginBottom: 20 },
    label: { textTransform: 'uppercase', color: '#374151', fontWeight: '700', fontSize: 12, marginBottom: 5 },
    valor: { color: '#000', fontSize: 18, fontWeight: '500' }
});

export default InformacionPaciente;