import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/hehe.jpg")}
      style={styles.latarbelakang}
    >
      <View style={styles.overlay}>
        {}
        <Text style={styles.texttengah}>teks di tengah layar</Text>

        {}
        <View style={styles.tataletak}>
          <View style={styles.kotak1}></View>
          <View style={styles.kotak2}></View>
        </View>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  latarbelakang: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  texttengah: {
    fontSize: 24,
    color: "#0000FF",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    fontStyle: "italic",
  },

  tataletak: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },

  kotak1: {
    width: 100,
    height: 100,
    backgroundColor: "#FF6F61",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },

  kotak2: {
    width: 100,
    height: 100,
    backgroundColor: "#50C878",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
});
