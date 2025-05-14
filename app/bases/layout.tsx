import { COLORS } from "@/lib/colors";
import { Stack } from "expo-router";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

export default function LayoutScreen() {
  return <SafeAreaView style={{ flex: 1 }}>
    <Stack.Screen options={{
      title:"Layout",
      headerTitleAlign: "center"
    }} />

    {/* Reproduire dans cette vue l'affichage demandé */}
    <View style={{ padding: 8, gap: 8, paddingBottom: 32, flex: 1 }}>

        <View style={styles.line}>
          <View style={[styles.filled, { flex: 1 }]}>
            <Text style={styles.text}>50%</Text>
          </View>
          <View style={[styles.filled, { flex: 1 }]}>
            <Text style={styles.text}>50%</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <View style={[styles.filled, { flexShrink: 1 }]}>
            <Text style={styles.text}>Largeur contenu</Text>
          </View>
          <View style={[styles.filled, { flex: 1 }]}>
            <Text style={styles.text}>Le reste</Text>
          </View>
        </View>

        <View style={[styles.filled, { flex: 1 }]}>
          <Text style={styles.text}>Le reste de la page</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <View style={[styles.filled, { flex: 1 }]}>
            <Text style={styles.text}>25%</Text>
          </View>
          <View style={[styles.filled, { flex: 2 }]}>
            <Text style={styles.text}>50%</Text>
          </View>
          <View style={[styles.filled, { flex: 1 }]}>
            <Text style={styles.text}>25%</Text>
          </View>
        </View>
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  filled: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 32,
    paddingHorizontal: 8
  },
  text: {
    color: 'white',
    fontWeight: "600",
    fontSize: 18
  },
  line: {
    flexDirection: "row",
    gap: 8
  }
});