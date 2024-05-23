import { Text, View } from "react-native"
import { styles } from "./styles"
import { Form } from "../../components/Form"
import { Participant } from "../../components/Participant"

export function Home () { 
  return (
    <View style={styles.view}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subTitle}>Quinta, 23 de Maio de 2024</Text>
      <Form />
    <Participant name="Matheus" />
      <Participant name="Lucas" />
      <Participant name="Pedro" />
    </View>
  )
}