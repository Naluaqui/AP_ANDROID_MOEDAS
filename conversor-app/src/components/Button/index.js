import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";



export function Button({variant = "prymary", onPress, currency}) {

    return (
        <TouchableOpacity 
        onPress = {onPress}
        style = {[
            styles.button, 
            variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary
            ]}>
            <Text style={styles.buttonText}>
                {currency.code}
            </Text>
        </TouchableOpacity>
    )
};