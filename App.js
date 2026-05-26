import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  return (

    <SafeAreaView style={styles.container} >
      <Text style={styles.titulo}>
        Admininistrador de Citas{" "}  
        <Text style={styles.tituloBold}>Veterinarioa</Text>
      </Text>

      <Pressable style={styles.btnNuevaCita} onPress={() => setModalVisible(true)}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>

        <Modal visible={modalVisible} animationType='slide'>
          <Pressable style={styles.btnNuevaCita} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.btnTextoNuevaCita}>Cerrar Modal</Text>
          </Pressable>
        </Modal>

      </Pressable>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
container: {
backgroundColor: '#F3F4F6',
flex: 1
},
titulo: {
textAlign: 'center',
fontSize: 30,
color: '#374151',
fontWeight: '600'
},
tituloBold: {
fontWeight: '900',
color: '#6D28D9',
},
btnNuevaCita: {
backgroundColor: '#6D28D9',
padding: 15,
marginTop: 30,
marginHorizontal: 20,
borderRadius: 10
},
btnTextoNuevaCita: {
textAlign: 'center',
color: '#FFF',
fontSize: 18,
fontWeight: '900',
textTransform: 'uppercase'
},
noPacientes: {
marginTop: 40,
textAlign: 'center',
fontSize: 24,
fontWeight: '600'
},
listado: {
marginTop: 50,
marginHorizontal: 30
}
});
