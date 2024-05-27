import { Alert, Button, FlatList, Image,Platform, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Form } from "../../components/Form"
import { Participant } from "../../components/Participant"
import { useState } from "react"
import Header from "../../components/Header"

export function Home () { 
  const [participants, setParticipants] = useState<string[]>([])

  const handleParticipantAdd = (name: string) => {
    if (participants.includes(name)) {
        return Alert.alert(
            "Participante existente",
            "Já existe um participante com esse nome",
        )
    }

    setParticipants(prev => [name.trim(), ...prev])
  }  

  const handleParticipantRemover = (name: string) => {
    Alert.alert(
      "Remover participante",
      `Deseja remover o (a) participante ${name}?`, 
      [
        {
          text: "Canclelar",
          style: "cancel"
        },
        {
          text: "Remover",
          onPress: () => {
            const newParticipants = participants.filter(participant => participant !== name)
            setParticipants(newParticipants)
            ToastAndroid.show("Participante removido com sucesso!", ToastAndroid.SHORT)
          }
        },
      ]
    )
  }

  return (
    <>
      <Header />
      <View style={styles.view}>
        <Form onAdd={handleParticipantAdd} />
        <FlatList 
          data={participants} 
          keyExtractor={(item) => item} 
          renderItem={({ item, index }) => (
            <Participant 
              key={index}
              name={item} 
              onRemove={() => handleParticipantRemover(item)} 
            />
          )} 
          ListEmptyComponent={(
            <Text style={styles.listEmptyText}>
              Ninguém chegou ao evento ainda? Adicione participantes a sua lista de presença. 
            </Text>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  )
}