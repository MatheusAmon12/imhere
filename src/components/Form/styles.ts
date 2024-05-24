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
        backgroundColor: '#F2E8DF',
        borderRadius: 5,
        height: 56,
        color: '#1A1A1A',
        padding: 16,
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
    }
})