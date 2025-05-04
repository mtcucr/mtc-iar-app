import { Container } from '@/components/Container';
import './global.css';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const router = useRouter();
  const data = [
    {
      operation: "remove",
      index: 0
    },
    {
      operation: "add",
      value: 5
    }
  ]
  const onPress = () => {
    console.log("???")
    fetch("http://192.168.1.125:3001/api/test")
    .then(resp => resp.json().then(console.log)).catch(console.error)
  }
  return (
    <SafeAreaView className="bg-white w-full h-full flex items-center justify-center">
      <Text className="font-bold text-4xl font-cabin">Hello</Text>
      <Text className="text-xl font-cabin">MTC Islamic Academy App</Text>
      <Pressable onPress={onPress} className="bg-[#eca737] px-4 py-2 rounded-md mt-4"><Text className="text-white">Get started</Text></Pressable>
      <Container name='Hello'>
        <Text>Hi</Text>
      </Container>
    </SafeAreaView>
  );
}
