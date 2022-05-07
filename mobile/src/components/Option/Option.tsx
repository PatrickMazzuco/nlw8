import React from 'react';
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { styles } from './styles';

type OptionProps = {
  title: string;
  image: ImageProps;
} & TouchableOpacityProps;

export function Option({ title, image, ...props }: OptionProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
