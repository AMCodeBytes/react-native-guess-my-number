import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#3B021F',
    borderRadius: 8,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.35,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 18,
    borderBottomColor: '#DDB52F',
    borderBottomWidth: 2,
    color: '#DDB52F',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
