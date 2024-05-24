import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"

type FormProps = {
    participantsList: string[]
}

export function Form ({ participantsList }: FormProps) {
    const handleParticipantAdd = () => {
        if (participantsList.includes('Matheus')) {
            return Alert.alert(
                "Participante existente",
                "Já existe um participante com esse nome",
            )
        }
    }  

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Participante"
                placeholderTextColor="#aaaaaa"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleParticipantAdd}
            >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}