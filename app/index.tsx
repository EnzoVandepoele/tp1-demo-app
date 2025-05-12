import { Button } from "@react-navigation/elements";
import { Switch, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button>Cliiiiiiiiiick</Button>
      <Switch></Switch>
    </View>
  );
}
