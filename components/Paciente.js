import { View, Text, Pressable } from "react-native";
import React from "react";

const Paciente = ({
  item,
  setModalVisible, //para le edicion
  setPaciente, //para la edicion
  setModalPaciente,
}) => {

  // 1. Agregamos esta función para convertir el objeto Date a un texto legible
  const formatearFecha = (fecha) => {
    if (!fecha) return "";
    return fecha.toLocaleString([], {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Pressable>
      <View >
        <Text> Paciente: </Text>
        <Text> {item.paciente}</Text>
        
        {/* 2. CORRECCIÓN AQUÍ: Usamos la función en lugar de imprimir el objeto directo */}
        <Text> {formatearFecha(item.fecha)}</Text>

        <View>
          <Pressable>
            <Text> Editar</Text>
          </Pressable>
          <Pressable>
            <Text> Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default Paciente;