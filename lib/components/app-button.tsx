import type { FC } from "react";
import { Text, Pressable, StyleSheet, StyleProp, ViewStyle } from "react-native";
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
  /**
   * Le texte qui sera affiché dans le bouton
   */
  label: string,
  /**
   * La fonction qui sera appellée lorsque l'on clique sur le bouton 
   */
  onPress?: () => void,
  /**
   * Des styles additionnels optionnels que nous pourront donner au bouton au besoin
   */
  style?: StyleProp<ViewStyle>,
}

/**
 * Un bouton personnalisé 
 */
export const AppButton: FC<Props> = function (props) {
    return <Pressable
        onPress={props.onPress}
        style={ ({ pressed }) => [
            styles.button,
            pressed && styles.pressedButton,
        ] }
        >
        <Text style={styles.label}>
            {props.label}
        </Text>
    </Pressable>
};

/**
 * Les différents styles de notre bouton
 */
const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    scaleX: 2
  },
  label: {
    color: COLORS.primaryText,
    fontWeight: 600
  },
  pressedButton: {
    transform: 'scale(0.98)',
    opacity: 0.8
  }
})