import BottomSheet from '@gorhom/bottom-sheet';
import { ChatTeardropDots } from 'phosphor-react-native';
import React, { useRef } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';

export function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <>
      <TouchableOpacity style={styles.button}>
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
          weight="bold"
        />
      </TouchableOpacity>
      <BottomSheet ref={bottomSheetRef} snapPoints={[1, 280]}>
        <Text>Text</Text>
      </BottomSheet>
    </>
  );
}
