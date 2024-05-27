import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    titleContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 56,
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        width: 'auto'
    },
    subTitle: {
        color: '#FFF',
    },
    container: {
        height: 220,
        justifyContent: 'flex-end',
        paddingLeft: 24,
        paddingBottom: 16,
    }
})