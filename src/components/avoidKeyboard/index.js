import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { hp, isIPHONE } from '../../constants';

export const AvoidKeyboard = ({ children }) => {
  return (
    <KeyboardAvoidingView
      { ...(isIPHONE ? { behavior: 'padding' } : {}) }
    >
      <ScrollView
        contentContainerStyle={ { flexGrow: 1, minHeight: hp(100) } }
        showsVerticalScrollIndicator={ false }
        keyboardShouldPersistTaps="handled">
        { children }
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
