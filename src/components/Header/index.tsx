import { Image, ImageBackground, Platform, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { useState } from "react"
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker"

const Header = () => {
    const [eventName, setEventName] = useState<string>("Nome do Evento")
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
    const [date, setDate] = useState<Date>(new Date())

    const handleOnChangeDate = (event: DateTimePickerEvent, selectedDate?: Date | undefined) => {
        const currentDate = selectedDate || date
        setShowDatePicker(Platform.OS === 'ios')
        setDate(currentDate)
    }

    return ( 
        <ImageBackground source={require('../../../assets/header-background.jpg')} style={styles.container}>
            <View style={styles.titleContent}>
                <TextInput
                value={eventName}
                style={styles.title}
                onChangeText={setEventName}
                />
                <Image source={require('../../../assets/pencil.png')} style={{width: 16, height: 16}}/>
            </View>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Text style={styles.subTitle}>{date.toLocaleDateString()}</Text>
                {
                showDatePicker && (
                    <DateTimePicker
                    value={new Date()}
                    mode='date'
                    display="default"
                    onChange={handleOnChangeDate}
                    />
                )
                }
            </TouchableOpacity>
        </ImageBackground>
     );
}
 
export default Header;