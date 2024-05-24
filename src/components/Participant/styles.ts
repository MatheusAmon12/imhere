import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5, 
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom: 8,
        paddingLeft: 16,
    },
    name: {
        color: '#FFF',
        fontSize: 16,
        flex: 1,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#FDB29B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
})