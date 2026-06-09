import { useState } from 'react'; 
import { SafeAreaView, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import Formulario from './components/Formulario';
import Paciente from './components/Paciente';
import InformacionPaciente from './components/InformacionPacientes';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({}); 
  const [modalPaciente, setModalPaciente] = useState(false); 

  const cerrarModal = () => {
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas
        <Text style={styles.tituloBold}> Veterinaria</Text>
      </Text>

      <Pressable 
        style={styles.btnNuevaCita} 
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? (
        <Text style={styles.noPacientes}> No hay pacientes aun</Text>
      ) : (
        <FlatList
          data={pacientes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Paciente
                item={item}
                setModalVisible={setModalVisible}
                setPaciente={setPaciente}
                setModalPaciente={setModalPaciente} 
              />
            );
          }}
        />
      )}

      {modalVisible && (
        <Formulario
          modalVisible={modalVisible}
          cerrarModal={cerrarModal}
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
      )}

      {modalPaciente && (
        <InformacionPaciente 
          paciente={paciente}
          setPaciente={setPaciente}
          setModalPaciente={setModalPaciente}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { textAlign: 'center', fontSize: 30, color: '#374151', fontWeight: '600' },
  tituloBold: { fontWeight: '900', color: '#6D28D9' },
  btnNuevaCita: { backgroundColor: '#6D28D9', padding: 15, marginTop: 20, borderRadius: 10, alignItems: 'center' },
  btnTextoNuevaCita: { color: '#FFF', textAlign: 'center', fontWeight: '900', fontSize: 18, textTransform: 'uppercase' },
  noPacientes: { marginTop: 40, textAlign: 'center', fontSize: 24, fontWeight: '600', color: '#374151' }
});