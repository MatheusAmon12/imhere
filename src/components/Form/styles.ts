import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    form: {
        marginTop: 36,
        marginBottom: 42,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 12,
    },
    input: {
        backgroundColor: '#0F2F59',
        borderRadius: 5,
        height: 56,
        color: '#FFF',
        padding: 16,
        fontSize: 18,
        flex: 1,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#0F2F59',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    }
})