import { Text, TextInput, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"

export function Form () {
    const handleParticipantAdd = () => {
    console.log('Adicionado!')
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