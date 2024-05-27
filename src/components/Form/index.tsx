import { NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { useState } from "react"

type FormProps = {
    onAdd: (name: string) => void
}

export function Form ({ onAdd }: FormProps) {
    const [name, setName] = useState<string>('')

    const handleChange = (name: string) => {
        setName(name)
    }

    const handleButtonAddPress = () => {
        onAdd(name)
        setName('')
    }

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Participante"
                placeholderTextColor="#aaaaaa"
                keyboardType="default"
                onChangeText={handleChange}
                value={name}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleButtonAddPress}
            >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}