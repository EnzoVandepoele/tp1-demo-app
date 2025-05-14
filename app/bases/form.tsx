import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { AppButton } from "@/lib/components/app-button";
import { AppInput } from "@/lib/components/app-input";

export default function FormScreen() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    return (
        <SafeAreaView style={ styles.screen }>
            <View
                style={{
                    gap: 26,
                    padding: 16,
                    margin: 8,
                    backgroundColor: "white",
                    borderRadius: 15
                }}
            >
                <Text style={{alignSelf: "center", fontWeight: "bold", fontSize: 18}}>Formulaire de bienvenue</Text>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 16
                }}>
                    {/* Colonne Prénom */}
                    <View style={{ flex: 1, gap: 10 }}>
                        <Text>Prénom</Text>
                        <AppInput placeholder="Prénom..." onChangeText={setFirstname} />
                    </View>

                    {/* Colonne Nom */}
                    <View style={{ flex: 1, gap: 10 }}>
                        <Text>Nom</Text>
                        <AppInput placeholder="Nom..." onChangeText={setLastname} />
                    </View>
                </View>

                <AppButton
                    label="Créer l'utilisateur"
                    onPress={() => alert(`Bienvenue ${firstname} ${lastname}`)}
                ></AppButton>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 16,
        justifyContent: "center",
        alignItems: "center"
    }
})