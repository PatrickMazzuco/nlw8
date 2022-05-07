import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import successImg from '../../assets/success.png';
import { Copyright } from '../Copyright';
import { styles } from './styles';

type SuccessProps = {
  onFeedbackReset: () => void;
};

export function Success({ onFeedbackReset }: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />

      <Text style={styles.title}>Agradecemos o feedback</Text>

      <TouchableOpacity
        onPress={onFeedbackReset}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Que enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
