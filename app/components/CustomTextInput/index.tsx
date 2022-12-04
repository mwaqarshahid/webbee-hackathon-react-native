import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

import styles from './styles';

interface CustomInputProps {
  index: number;
  label: string;
  desc: string;
  handleChange: (index: number, value: string) => void;
}

const CustomInput: React.FC <CustomInputProps> = (props) => {
  const { index, label, desc, handleChange } = props;

  return (
    <TextInput
      mode="outlined"
      label={label}
      placeholder={label}
      value={desc}
      style={styles.container}
      onChange={event => handleChange(index, event.nativeEvent.text)}
    />
  );
};

export default CustomInput;
