import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import { ICON_CONSTANTS, colors } from '../../constants';

export const BackButton = props => {
  const { onPress } = props;

  return (
    <TouchableOpacity onPress={ onPress } style={ styles.container }>
      <ICON_CONSTANTS.IonIcons name={ 'chevron-back' } size={ 25 } color={ colors.SECONDARY.light } />
    </TouchableOpacity>
  );
};
