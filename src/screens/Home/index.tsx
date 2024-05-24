import { ScrollView, FlatList,Text, View } from "react-native"
import { styles } from "./styles"
import { Form } from "../../components/Form"
import { Participant } from "../../components/Participant"

export function Home () { 
  const participants = [
    'Matheus',
    'João',
    'Maria',
    'Pedro',
    'Lucas',
    'Ana',
    'Carla',
    'Bruna',
    'Gabriel',
    'Luciana',
    'Vitoria',
    'Isabela',
    'Lara',
    'Mariana',
    'Bruno',
    'Vitor',
  ]

  const handleParticipantRemover = (name: string) => {
    console.log(`Participante ${name} removido!`)
  }

  return (
    <View style={styles.view}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subTitle}>Quinta, 23 de Maio de 2024</Text>
      <Form />
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