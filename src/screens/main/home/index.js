import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { LoaderContext } from '../../../hooks';
import useState from 'react-usestateref';
import { colors, hp, screenNames, strings } from '../../../constants';
import { navigate } from '../../../navigation/navigationRef';
import { getAllImages, reset } from '../../../redux/imagesSlice/imagesSlice';
import FastImage from 'react-native-fast-image';


export const Home = () => {
    const dispatch = useDispatch();
    const { setLoader } = useContext(LoaderContext);
    const { loading, allImages } = useSelector((state) => state.album);

    const [page, setPage, pageRef] = useState(0);
    useEffect(() => {
        getAlbumData();
    }, []);

    useEffect(() => {
        if(loading && page == 1) {
            setLoader(true);
        } else if(!loading && page == 1) {
            setLoader(false);
        }
    }, [loading, page]);

    const getAlbumData = (isRefresh) => {
        setPage(isRefresh ? 1 : pageRef.current + 1);
        dispatch(getAllImages(pageRef.current));
    };

    const navigateToDetails = (iamgeData) => {
        navigate(screenNames.details, { data: iamgeData });
    };

    const renderImageObj = (item, index) => {

        //render of each image of album
        return (
            <TouchableOpacity onPress={ () => navigateToDetails(item) } style={ styles.imageViewCont }>
                <FastImage
                    style={ styles.imageStyle }
                    source={ { uri: item.urls.small } }
                />
                { item?.user?.name && <View style={ styles.autherCont }>
                    <Text style={ styles.autherText }>Auther: { item.user.name }</Text>
                </View> }
            </TouchableOpacity>
        );
    };

    const renderFooter = () => {

        //render footer component of list view
        return (
            <View style={ styles.footerCont }>
                { loading ?
                    (<ActivityIndicator color={ colors.PRIMARY.default } />)
                    :
                    (<TouchableOpacity onPress={ () => getAlbumData() }>
                        <Text style={ styles.loadTxt } >
                            { strings.loadMore }
                        </Text>
                    </TouchableOpacity>)
                }
            </View>
        );
    };

    return (
        <View style={ styles.container }>
            <SafeAreaView style={ { alignItems: 'center' } }>
                {/* Heading or Header of our main Page */ }
                <Text style={ styles.header }>{ strings.photoAlbum }</Text>

                {/* List view */ }
                <FlatList
                    showsVerticalScrollIndicator={ false }
                    onRefresh={ () => getAlbumData(true) }
                    refreshing={ loading }
                    contentContainerStyle={ { marginVertical: 10 } }
                    numColumns={ 2 }
                    data={ allImages }
                    keyExtractor={ (item, index) => index + item }
                    renderItem={ ({ item, index }) => renderImageObj(item, index) }
                    ListFooterComponent={ renderFooter }
                />
            </SafeAreaView>
        </View>
    );
};
