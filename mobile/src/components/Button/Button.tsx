import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';

type ButtonProps = {
  isLoading: boolean;
} & TouchableOpacityProps;

export function Button({ isLoading, ...props }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={styles.text}>Enviar feedback</Text>
      )}
    </TouchableOpacity>
  );
}
