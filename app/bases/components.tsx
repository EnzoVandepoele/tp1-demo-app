// import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { Switch, Text, View, Button } from "react-native";
import { AppButton } from "@/lib/components/app-button";

export default function ComponentsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"
      }}
    >
      <Text>I love cats.</Text>
      <Button title="A title"></Button>
      <AppButton
        label="Alerte Basique"
        onPress={() => alert('Mon alerte')}
      />
      <Switch
        onValueChange={toggleSwitch} value={isEnabled}
      ></Switch>
    </View>
  );
}
