import { useState, type FC } from "react";
import { StyleSheet, StyleProp, ViewStyle, TextInput } from "react-native";
import { COLORS } from "@/lib/colors";

/**
 * Les différentes propriétés que l'on pourra passer à notre bouton.
 * Exemple d'utilisation :
 * <AppButton 
 *    label="Mon bouton" 
 *    onPress={() => console.log("Click")} 
 * />
 */
type Props = {
  placeholder: string,
  onChangeText?: (text: string) => void,
  style?: StyleProp<ViewStyle>,
}

export const AppInput: FC<Props> = function (props) {
    const [text, setText] = useState('');

    return (
        <TextInput
            onChangeText={(newText) => {
                setText(newText);
                props.onChangeText?.(newText);
            }}
            style={styles.input}
            placeholder={props.placeholder}
            value={text}
        />
    );
};

/**
 * Les différents styles de notre bouton
 */
const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.inputBackground,
    borderRadius: 5,
    padding: 10
  }
})