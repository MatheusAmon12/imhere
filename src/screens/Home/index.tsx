import { Alert, FlatList,Text, View } from "react-native"
import { styles } from "./styles"
import { Form } from "../../components/Form"
import { Participant } from "../../components/Participant"

export function Home () { 
  const participants = [
    "Matheus",
    "João",
    "Maria",
    "Pedro",
    "Lucas",
    "Ana",
    "Carla",
    "Bruna",
    "Gabriel",
    "Luciana",
    "Vitoria",
    "Isabela",
    "Lara",
    "Mariana",
    "Bruno",
    "Vitor",
  ]

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
          onPress: () => Alert.alert(`Participante ${name} removido!`)
        },
      ]
    )
  }

  return (
    <View style={styles.view}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subTitle}>Quinta, 23 de Maio de 2024</Text>
      <Form participantsList={participants} />
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
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}