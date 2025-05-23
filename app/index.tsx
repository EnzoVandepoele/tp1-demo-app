import { AppButton } from "@/lib/components/app-button";
import { Stack, useRouter } from "expo-router";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <ScrollView style={{ gap: 16, padding: 16 }}>
	    <Stack.Screen options={{
        title: "Accueil",
        headerTitleAlign: "center"
      }} />
    
      {/* Bases */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
	        Bases
	      </Text>

        <AppButton
          label='Composants de base'
          onPress={() => router.push('/bases/components')}
        />

        <AppButton
          label='Formulaires'
          onPress={() => router.push('/bases/form')}
        />

        <AppButton
          label='Mise en page'
          onPress={() => router.push('/bases/layout')}
        />
      </View>

      {/* Navigation */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Navigation</Text>

        <AppButton
          label='Stack'
          onPress={() => router.push('/nav/stack')}
        />

        <AppButton
          label='Not found'
          onPress={() => router.push(
            // @ts-ignore
            '/nav/un-chemin-qui-existe-pas'
          )}
        />

        <AppButton
          label='Modales'
          onPress={() => router.push('/nav/modals')}
        />

        <AppButton
          label='Tabs'
          onPress={() => router.push('/nav/tabs')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 32,
    width: '100%',
    gap: 16
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600"
  },
});