import './global.css';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-white w-full h-full flex items-center justify-center">
      <Text className="font-bold text-4xl font-cabin">Hello</Text>
      <Text className="text-xl font-cabin">MTC Islamic Academy App</Text>
      {/* Example of router*/}
      <Pressable onPress={() => router.push("/user/new")} className="bg-[#eca737] px-4 py-2 rounded-md mt-4"><Text className="text-white">Get started</Text></Pressable>
    </SafeAreaView>
  );
}
