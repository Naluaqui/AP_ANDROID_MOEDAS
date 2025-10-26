import { Text, View, TextInput } from "react-native";
import { styles } from "./styles";
import { onChangeText } from "react-native";


export function Input({value, onChangeText, label}) {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            
            <TextInput 
                style={styles.input} 
                placeholder="0.00"
                placeholderTextColor='#CCD6F6'
                value={value}
                onChangeText={onChangeText}
                keyboardType="numeric"
                >
                    
            </TextInput>
            
        </View>
    )
}