import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
  const onHandlePress = () => {
    console.log('POW!')
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text className='bg-red-500 font-bold p-5 '>Hello as world!</Text>
      <Button
        title='POW!'
        onPress={onHandlePress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
