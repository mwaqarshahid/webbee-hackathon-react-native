import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

import styles from './styles';

interface CustomInputProps {
  index: number;
  label: string;
  desc: string;
  type: any;
  handleChange: (index: number, value: string) => void;
}

const CustomInput: React.FC <CustomInputProps> = (props) => {
  const { index, label, desc, type, handleChange } = props;

  return (
    <TextInput
      mode="outlined"
      label={type}
      placeholder={label}
      value={desc}
      style={styles.container}
      keyboardType={type}
      onChange={event => handleChange(index, event.nativeEvent.text)}
    />
  );
};

export default CustomInput;
