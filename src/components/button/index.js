import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
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
