import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import { colors } from '../../constants';

export const Button = props => {
  const { onPress, title, disabled, loading, buttonStyle, textStyle } = props;

  return (
    <TouchableOpacity
      onPress={ onPress }
      disabled={ disabled }
      style={ [
        styles.container,
        disabled && { backgroundColor: colors.PINK.disabled },
        buttonStyle,
      ] }>
      { loading ? (
        <ActivityIndicator />
      ) : (
        <Text
          style={ [
            styles.titleText,
            textStyle,
          ] }>
          { title }
        </Text>
      ) }
    </TouchableOpacity>
  );
};
