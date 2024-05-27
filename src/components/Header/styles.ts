import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    titleContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 56,
    },
    title: {
        color: '#1A1A1A',
        fontSize: 24,
        fontWeight: 'bold',
        width: 'auto'
    },
    subTitle: {
        color: '#4A4A4A',
    },
    view: {
        padding: 24,
        paddingBottom: 0,
        backgroundColor: '#FFF',
        flex: 1,
    },
})