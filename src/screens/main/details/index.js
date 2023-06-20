import React from 'react';
import { View, Text, Image, Linking } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { ICON_CONSTANTS, hp, strings } from '../../../constants';
import { popScreen } from '../../../navigation/navigationRef';
import FastImage from 'react-native-fast-image';
import { AvoidKeyboard, Button, BackButton } from '../../../components';

export const Details = (props) => {

    const { route } = props;
    let data = route.params.data;
    const onBackPress = () => {
        popScreen();
    };

    const isLandScape = () => {
        return data.height < data.width;
    };

    const onTwiterPress = async () => {
        try {
            const username = data.user.social.twitter_username;
            const twitterURL = `https://twitter.com/${username}`;
            const supported = await Linking.canOpenURL(twitterURL);

            if(supported) {
                await Linking.openURL(twitterURL);
            } else {
                console.log("Opening Twitter profile is not supported.");
            }
        } catch(error) {
            console.error("An error occurred while opening Twitter profile:", error);
        }
    };
    const onInstaPress = async () => {
        try {
            const username = data.user.social.instagram_username;
            const instagramURL = `https://www.instagram.com/${username}`;
            const supported = await Linking.canOpenURL(instagramURL);

            if(supported) {
                await Linking.openURL(instagramURL);
            } else {
                console.log("Opening Instagram profile is not supported.");
            }
        } catch(error) {
            console.error("An error occurred while opening Instagram profile:", error);
        }

    };
    const openPortfolio = async () => {
        try {
            const link = data.user.social.portfolio_url;
            const supported = await Linking.canOpenURL(link);
            if(supported) {
                await Linking.openURL(link);
            } else {
                console.log("Opening this link is not supported.");
            }
        } catch(error) {
            console.error("An error occurred while opening this link:", error);
        }

    };

    const renderSocialInfo = () => {
        return (
            <View style={ { marginTop: hp(1) } }>
                { data.user.social.instagram_username && <View style={ [styles.rowContainer] }>
                    <ICON_CONSTANTS.AntDesign name={ 'instagram' } style={ styles.socialLogo } />
                    <Text onPress={ onInstaPress } style={ styles.text_4 }>{ data.user.social.instagram_username }</Text>
                </View> }
                { data.user.social.twitter_username && <View style={ [styles.rowContainer] }>
                    <ICON_CONSTANTS.AntDesign name={ 'twitter' } style={ styles.socialLogo } />
                    <Text onPress={ onTwiterPress } style={ styles.text_4 }>{ data.user.social.twitter_username }</Text>
                </View> }
            </View>
        );
    };

    return (
        <View style={ styles.container }>
            <SafeAreaView>
                <AvoidKeyboard>
                    <View style={ styles.contentCont }>

                        {/* Back Button form component */ }
                        <BackButton onPress={ onBackPress } />

                        {/* Portrait & Landscape Image View */ }
                        <View style={ [styles.mainImgCont, isLandScape() && { height: hp(30) }] }>
                            <Image style={ { flex: 1 } } source={ { uri: data?.urls?.small } } />
                            { data.alt_description && <Text style={ styles.text_2 }>{ data.alt_description }</Text> }
                        </View>

                        {/* Auther Profile Info */ }
                        <View style={ styles.autherInfoCont } >
                            <FastImage style={ styles.profImg } source={ { uri: data.user.profile_image.medium } } />
                            <View>
                                <Text style={ styles.text_1 }>{ data.user.name }</Text>
                                <Text style={ styles.text_1 }>{ data.user.username }</Text>
                            </View>
                            <View style={ { flex: 1 } } />
                            <View style={ styles.likeCont }>
                                <ICON_CONSTANTS.AntDesign name='heart' style={ styles.likeIcon } />
                                <Text style={ styles.text_3 }>{ data.likes }</Text>
                            </View>
                        </View>


                        {/* Description of Image */ }
                        { data.description && <View>
                            <Text style={ styles.text_5 }>{ strings.description }</Text>
                            <Text style={ styles.text_3 }>{ data.description }</Text>
                        </View> }

                        {/* Social Info/Links of Author */ }
                        { renderSocialInfo() }

                        {/* Author Biography */ }
                        { data.user.bio && (
                            <View style={ { marginTop: hp(2) } }>
                                <Text style={ styles.text_5 }>{ strings.userBio }</Text>
                                <Text style={ [styles.text_3, { marginTop: hp(1) }] }>{ '\t' }{ data.user.bio }</Text>
                            </View>
                        ) }

                        {/* Author Profile link button */ }
                        { data.user.social.portfolio_url && <Button onPress={ openPortfolio } title={ strings.openProfile } /> }

                    </View>
                </AvoidKeyboard>
            </SafeAreaView>
        </View >
    );
};
