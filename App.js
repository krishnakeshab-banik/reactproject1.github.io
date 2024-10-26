import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { TextInput, Button, RadioButton, Checkbox } from 'react-native-paper';

const FormScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [level, setLevel] = useState('');
  const [skills, setSkills] = useState({
    java: false,
    python: false,
    javascript: false,
  });

  const handleSkillChange = (skill) => {
    setSkills({ ...skills, [skill]: !skills[skill] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FORM</Text>

      <TextInput
        label="UserName"
        value={username}
        onChangeText={setUsername}
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon name="account" />}
      />
      <TextInput
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon name="email" />}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        style={styles.input}
        secureTextEntry
        left={<TextInput.Icon name="lock" />}
      />

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Country</Text>
        <Picker
          selectedValue={country}
          onValueChange={(value) => setCountry(value)}
          style={styles.picker}
        >
          <Picker.Item label="Select Country" value="" />
          <Picker.Item label="USA" value="usa" />
          <Picker.Item label="Canada" value="canada" />
          <Picker.Item label="India" value="india" />
          <Picker.Item label="France" value="france" />
        </Picker>
      </View>

      <Text style={styles.label}>Level of development</Text>
      <RadioButton.Group onValueChange={setLevel} value={level}>
        <View style={styles.radioRow}>
          <RadioButton value="basic" />
          <Text>Basic</Text>
          <RadioButton value="medium" />
          <Text>Medium</Text>
          <RadioButton value="advanced" />
          <Text>Advanced</Text>
        </View>
      </RadioButton.Group>

      <Text style={styles.label}>Programming skills</Text>
      <View style={styles.checkboxRow}>
        <Checkbox
          status={skills.java ? 'checked' : 'unchecked'}
          onPress={() => handleSkillChange('java')}
        />
        <Text>Java</Text>
        <Checkbox
          status={skills.python ? 'checked' : 'unchecked'}
          onPress={() => handleSkillChange('python')}
        />
        <Text>Python</Text>
        <Checkbox
          status={skills.javascript ? 'checked' : 'unchecked'}
          onPress={() => handleSkillChange('javascript')}
        />
        <Text>JavaScript</Text>
      </View>

      <Button mode="contained" style={styles.button} onPress={() => console.log('Form submitted')}>
        SEND
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6A5ACD',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    color: '#000',
  },
  label: {
    fontSize: 16,
    color: '#6A5ACD',
    marginBottom: 5,
    marginTop: 10,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#6A5ACD',
  },
});

export default FormScreen;
