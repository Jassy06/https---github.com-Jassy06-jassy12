import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require('@/assets/images/MZ.png')}
      style={styles.image1}/>
      <Text style= {styles.text1}>Mark Zuckerberg</Text>
      <Text style= {styles.text1}>CEO Meta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontWeight: 'bold',
    color: 'black',
    alignItems: "center",
  },
  text2: {
    color: 'gray',
  },
  image1: {
    width:350,
    height: 450,
    borderRadius: 20,
    margin: 20,
  }

})
