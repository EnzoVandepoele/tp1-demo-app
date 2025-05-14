import { Link } from 'expo-router';
import { View } from "react-native";

export default function StackScreen() {
    return <View>
      <Link href="/nav/stack/ma-page">Lien vers Ma Page</Link>
      <Link dismissTo href="/">Back</Link>
    </View>
};