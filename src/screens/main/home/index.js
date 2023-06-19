import React, { useContext, useEffect } from 'react';
import { View, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { LoaderContext } from '../../../hooks';
import useState from 'react-usestateref';


export const Home = () => {
    const dispatch = useDispatch();
    const { setLoader } = useContext(LoaderContext);

    const { loading } = useSelector((state) => state.images);


    return (
        <View style={ styles.container }>
            <SafeAreaView>

            </SafeAreaView>
        </View>
    );
};