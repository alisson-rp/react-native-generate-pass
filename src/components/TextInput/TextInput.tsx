import React from 'react';
import { TextInput } from 'react-native';

import { styles } from '@/components/TextInput/TextInputStyles';

interface TextInputProps{
  pass:string
}

export function TextInputC(props: TextInputProps) {
  return (
    <TextInput
        style={styles.inputer}
        placeholder='pass'
        value={props.pass}
    />
  );
}