import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';

type ScreenshotButtonProps = {
  screenshot: string | null;
  onTakeScreenshot: () => void;
  onRemoveScreenshot: () => void;
};

export function ScreenshotButton({
  screenshot,
  onRemoveScreenshot,
  onTakeScreenshot,
}: ScreenshotButtonProps) {
  const handlePress = () => {
    screenshot ? onRemoveScreenshot() : onTakeScreenshot();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {screenshot ? (
        <View>
          <Image source={{ uri: screenshot }} style={styles.image} />
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_secondary} weight="bold" />
      )}
    </TouchableOpacity>
  );
}
