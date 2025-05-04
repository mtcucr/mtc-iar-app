import { View, Text, TextInput, Pressable, TouchableWithoutFeedback, Keyboard, SafeAreaView } from "react-native";

{/* Form Example, I took this from another project lol */ }
const Page = () => {
    
    return (
        <SafeAreaView className="bg-white w-full h-full">
            <View className="ml-4 mt-4 w-full">
                <Text className="text-2xl font-cabin font-bold">MTC IAR</Text>
                <Text className="text-md font-cabin">Create Account</Text>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View className="w-full h-full flex gap-y-2 items-center relative top-1/4">
                    <TextInput keyboardType="email-address" className="border w-4/6 py-4 pl-2 rounded-sm" placeholder="Email" />
                    <TextInput secureTextEntry keyboardType="visible-password" className="border w-4/6 py-4 pl-2 rounded-sm" placeholder="Password" />
                    <Pressable className="bg-[#eca737] active:bg-[#f5b470] active:scale-105 transition delay-50 px-4 py-3 rounded-md mt-4 w-1/2"><Text className="text-white text-center font-cabin font-semibold">Register</Text></Pressable>
                </View>
            </TouchableWithoutFeedback>

        </SafeAreaView>
    )
}

export default Page;