import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="nav/stack/index"
        options={{
          title: "StackScreen",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
