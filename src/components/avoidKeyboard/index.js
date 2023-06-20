import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { isIPHONE } from '../../constants';

export const AvoidKeyboard = ({ children }) => {
  return (
    <KeyboardAvoidingView
      { ...(isIPHONE ? { behavior: 'padding' } : {}) }
    >
      <ScrollView
        showsVerticalScrollIndicator={ false }
        keyboardShouldPersistTaps="handled">
        { children }
        <View style={ { marginBottom: 25 } } />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
