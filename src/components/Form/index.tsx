import { NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { useState } from "react"

type FormProps = {
    onAdd: (name: string) => void
}

export function Form ({ onAdd }: FormProps) {
    const [name, setName] = useState<string>('')

    const handleChange = (name: string) => {
        setName(name.trim())
    }

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Participante"
                placeholderTextColor="#aaaaaa"
                keyboardType="default"
                onChangeText={handleChange}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onAdd(name)}
            >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}