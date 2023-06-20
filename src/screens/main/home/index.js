import React, { useContext, useEffect } from 'react';
import { View, Text, Pressable, Image, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { LoaderContext } from '../../../hooks';
import useState from 'react-usestateref';
import { colors, hp, screenNames, strings } from '../../../constants';
import { navigate } from '../../../navigation/navigationRef';


export const Home = () => {
    const dispatch = useDispatch();
    const { setLoader } = useContext(LoaderContext);

    const { loading } = useSelector((state) => state.images);


    var dummyData = [
        {
            "id": "Iy59i0M7oP4",
            "slug": "Iy59i0M7oP4",
            "created_at": "2023-04-28T13:09:43Z",
            "updated_at": "2023-06-19T17:40:46Z",
            "promoted_at": null,
            "width": 5272,
            "height": 3948,
            "color": "#262626",
            "blur_hash": "LhEx|g={xZof~p%1kCbb%#ogj]s:",
            "description": "Sandstone plateau, Hisma Desert – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.",
            "alt_description": "an aerial view of a desert with rocks and sand",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1682687218608-5e2522b04673?ixid=M3w0NjQwMjd8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1682687218608-5e2522b04673?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=85",
                "regular": "https://images.unsplash.com/photo-1682687218608-5e2522b04673?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
                "small": "https://images.unsplash.com/photo-1682687218608-5e2522b04673?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
                "thumb": "https://images.unsplash.com/photo-1682687218608-5e2522b04673?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682687218608-5e2522b04673"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/Iy59i0M7oP4",
                "html": "https://unsplash.com/photos/Iy59i0M7oP4",
                "download": "https://unsplash.com/photos/Iy59i0M7oP4/download?ixid=M3w0NjQwMjd8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NzI0MjkwNXw",
                "download_location": "https://api.unsplash.com/photos/Iy59i0M7oP4/download?ixid=M3w0NjQwMjd8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NzI0MjkwNXw"
            },
            "likes": 240,
            "liked_by_user": false,
            "current_user_collections": [

            ],
            "sponsorship": {
                "impression_urls": [
                    "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false\u0026bannerID=11515584\u0026rnd=[timestamp]\u0026redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
                    "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false\u0026bannerID=11515787\u0026rnd=[timestamp]\u0026redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
                ],
                "tagline": "Made to Change",
                "tagline_url": "https://www.neom.com/en-us?utm_source=unsplash\u0026utm_medium=referral",
                "sponsor": {
                    "id": "mYizSrdJkkU",
                    "updated_at": "2023-06-19T19:44:51Z",
                    "username": "neom",
                    "name": "NEOM",
                    "first_name": "NEOM",
                    "last_name": null,
                    "twitter_username": "neom",
                    "portfolio_url": "http://www.neom.com",
                    "bio": "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
                    "location": "NEOM, Saudi Arabia",
                    "links": {
                        "self": "https://api.unsplash.com/users/neom",
                        "html": "https://unsplash.com/@neom",
                        "photos": "https://api.unsplash.com/users/neom/photos",
                        "likes": "https://api.unsplash.com/users/neom/likes",
                        "portfolio": "https://api.unsplash.com/users/neom/portfolio",
                        "following": "https://api.unsplash.com/users/neom/following",
                        "followers": "https://api.unsplash.com/users/neom/followers"
                    },
                    "profile_image": {
                        "small": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
                        "medium": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
                        "large": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
                    },
                    "instagram_username": "discoverneom",
                    "total_collections": 7,
                    "total_likes": 0,
                    "total_photos": 202,
                    "accepted_tos": true,
                    "for_hire": false,
                    "social": {
                        "instagram_username": "discoverneom",
                        "portfolio_url": "http://www.neom.com",
                        "twitter_username": "neom",
                        "paypal_email": null
                    }
                }
            },
            "topic_submissions": {

            },
            "user": {
                "id": "mYizSrdJkkU",
                "updated_at": "2023-06-19T19:44:51Z",
                "username": "neom",
                "name": "NEOM",
                "first_name": "NEOM",
                "last_name": null,
                "twitter_username": "neom",
                "portfolio_url": "http://www.neom.com",
                "bio": "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
                "location": "NEOM, Saudi Arabia",
                "links": {
                    "self": "https://api.unsplash.com/users/neom",
                    "html": "https://unsplash.com/@neom",
                    "photos": "https://api.unsplash.com/users/neom/photos",
                    "likes": "https://api.unsplash.com/users/neom/likes",
                    "portfolio": "https://api.unsplash.com/users/neom/portfolio",
                    "following": "https://api.unsplash.com/users/neom/following",
                    "followers": "https://api.unsplash.com/users/neom/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
                    "medium": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
                    "large": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
                },
                "instagram_username": "discoverneom",
                "total_collections": 7,
                "total_likes": 0,
                "total_photos": 202,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": "discoverneom",
                    "portfolio_url": "http://www.neom.com",
                    "twitter_username": "neom",
                    "paypal_email": null
                }
            }
        },
        {
            "id": "eOzLCgYYX5Q",
            "slug": "eOzLCgYYX5Q",
            "created_at": "2023-02-20T14:18:16Z",
            "updated_at": "2023-06-20T01:38:22Z",
            "promoted_at": "2023-06-19T17:16:01Z",
            "width": 3000,
            "height": 4000,
            "color": "#c0c073",
            "blur_hash": "L6LExg4o~lTC%INKNH%1~potDnIE",
            "description": null,
            "alt_description": "a green and yellow background with two triangular shapes",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1676902683876-527e9816ae4e?ixid=M3w0NjQwMjd8MHwxfGFsbHwyfHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1676902683876-527e9816ae4e?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHwyfHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=85",
                "regular": "https://images.unsplash.com/photo-1676902683876-527e9816ae4e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHwyfHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
                "small": "https://images.unsplash.com/photo-1676902683876-527e9816ae4e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHwyfHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
                "thumb": "https://images.unsplash.com/photo-1676902683876-527e9816ae4e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHwyfHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1676902683876-527e9816ae4e"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/eOzLCgYYX5Q",
                "html": "https://unsplash.com/photos/eOzLCgYYX5Q",
                "download": "https://unsplash.com/photos/eOzLCgYYX5Q/download?ixid=M3w0NjQwMjd8MHwxfGFsbHwyfHx8fHx8Mnx8MTY4NzI0MjkwNXw",
                "download_location": "https://api.unsplash.com/photos/eOzLCgYYX5Q/download?ixid=M3w0NjQwMjd8MHwxfGFsbHwyfHx8fHx8Mnx8MTY4NzI0MjkwNXw"
            },
            "likes": 40,
            "liked_by_user": false,
            "current_user_collections": [

            ],
            "sponsorship": null,
            "topic_submissions": {
                "3d-renders": {
                    "status": "approved",
                    "approved_on": "2023-06-18T11:45:36Z"
                }
            },
            "user": {
                "id": "beEvA4QUWs8",
                "updated_at": "2023-06-19T17:16:01Z",
                "username": "mishu3d",
                "name": "Shubham Dhage",
                "first_name": "Shubham",
                "last_name": "Dhage",
                "twitter_username": "theshubhamdhage",
                "portfolio_url": "https://theshubhamdhage.com/",
                "bio": "10minute stuff.\r\nmore free cool Imagery 👉 https://unsplash.com/@theshubhamdhage",
                "location": "manatha, nanded, maharashtra.",
                "links": {
                    "self": "https://api.unsplash.com/users/mishu3d",
                    "html": "https://unsplash.com/@mishu3d",
                    "photos": "https://api.unsplash.com/users/mishu3d/photos",
                    "likes": "https://api.unsplash.com/users/mishu3d/likes",
                    "portfolio": "https://api.unsplash.com/users/mishu3d/portfolio",
                    "following": "https://api.unsplash.com/users/mishu3d/following",
                    "followers": "https://api.unsplash.com/users/mishu3d/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1677384337835-5d6bb32a73e6image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
                    "medium": "https://images.unsplash.com/profile-1677384337835-5d6bb32a73e6image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
                    "large": "https://images.unsplash.com/profile-1677384337835-5d6bb32a73e6image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
                },
                "instagram_username": "cgshubz",
                "total_collections": 0,
                "total_likes": 0,
                "total_photos": 98,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": "cgshubz",
                    "portfolio_url": "https://theshubhamdhage.com/",
                    "twitter_username": "theshubhamdhage",
                    "paypal_email": null
                }
            }
        },
        {
            "id": "P8UqSj4hTUg",
            "slug": "a-white-bench-sitting-in-front-of-a-window-filled-with-potted-plants-P8UqSj4hTUg",
            "created_at": "2023-06-18T02:14:10Z",
            "updated_at": "2023-06-19T19:40:26Z",
            "promoted_at": "2023-06-19T17:08:01Z",
            "width": 3968,
            "height": 5952,
            "color": "#d9d9d9",
            "blur_hash": "LhKwnAM{t7M{M{WXj@WV_4oeRjt6",
            "description": null,
            "alt_description": "a white bench sitting in front of a window filled with potted plants",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1687054192925-4cda3c7f0474?ixid=M3w0NjQwMjd8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1687054192925-4cda3c7f0474?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=85",
                "regular": "https://images.unsplash.com/photo-1687054192925-4cda3c7f0474?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
                "small": "https://images.unsplash.com/photo-1687054192925-4cda3c7f0474?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
                "thumb": "https://images.unsplash.com/photo-1687054192925-4cda3c7f0474?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1687054192925-4cda3c7f0474"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-white-bench-sitting-in-front-of-a-window-filled-with-potted-plants-P8UqSj4hTUg",
                "html": "https://unsplash.com/photos/a-white-bench-sitting-in-front-of-a-window-filled-with-potted-plants-P8UqSj4hTUg",
                "download": "https://unsplash.com/photos/P8UqSj4hTUg/download?ixid=M3w0NjQwMjd8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4NzI0MjkwNXw",
                "download_location": "https://api.unsplash.com/photos/P8UqSj4hTUg/download?ixid=M3w0NjQwMjd8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4NzI0MjkwNXw"
            },
            "likes": 35,
            "liked_by_user": false,
            "current_user_collections": [

            ],
            "sponsorship": null,
            "topic_submissions": {

            },
            "user": {
                "id": "GQPD6NPt4Fg",
                "updated_at": "2023-06-20T06:13:11Z",
                "username": "tommaomaoer",
                "name": "tommao wang",
                "first_name": "tommao",
                "last_name": "wang",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": "Shooting with Leica M10-p\r\nThis is my way of giving back, keep up with what I photograph on Instagram @tommao2.0",
                "location": "china,beijing",
                "links": {
                    "self": "https://api.unsplash.com/users/tommaomaoer",
                    "html": "https://unsplash.com/@tommaomaoer",
                    "photos": "https://api.unsplash.com/users/tommaomaoer/photos",
                    "likes": "https://api.unsplash.com/users/tommaomaoer/likes",
                    "portfolio": "https://api.unsplash.com/users/tommaomaoer/portfolio",
                    "following": "https://api.unsplash.com/users/tommaomaoer/following",
                    "followers": "https://api.unsplash.com/users/tommaomaoer/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1593746562089-899d3ec94405image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
                    "medium": "https://images.unsplash.com/profile-1593746562089-899d3ec94405image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
                    "large": "https://images.unsplash.com/profile-1593746562089-899d3ec94405image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
                },
                "instagram_username": "tommao2.0",
                "total_collections": 0,
                "total_likes": 117,
                "total_photos": 2303,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "tommao2.0",
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            }
        },
        {
            "id": "eqIVuqv6EFc",
            "slug": "a-man-standing-in-front-of-a-green-wall-eqIVuqv6EFc",
            "created_at": "2023-06-18T02:14:10Z",
            "updated_at": "2023-06-19T18:37:52Z",
            "promoted_at": "2023-06-19T17:00:01Z",
            "width": 3968,
            "height": 5952,
            "color": "#8cc026",
            "blur_hash": "LTDnD.RlpnjI?,ayM$j[IXoLnTW.",
            "description": null,
            "alt_description": "a man standing in front of a green wall",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1687054232652-f12bc731b2a6?ixid=M3w0NjQwMjd8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1687054232652-f12bc731b2a6?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=85",
                "regular": "https://images.unsplash.com/photo-1687054232652-f12bc731b2a6?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
                "small": "https://images.unsplash.com/photo-1687054232652-f12bc731b2a6?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
                "thumb": "https://images.unsplash.com/photo-1687054232652-f12bc731b2a6?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1687054232652-f12bc731b2a6"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-man-standing-in-front-of-a-green-wall-eqIVuqv6EFc",
                "html": "https://unsplash.com/photos/a-man-standing-in-front-of-a-green-wall-eqIVuqv6EFc",
                "download": "https://unsplash.com/photos/eqIVuqv6EFc/download?ixid=M3w0NjQwMjd8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4NzI0MjkwNXw",
                "download_location": "https://api.unsplash.com/photos/eqIVuqv6EFc/download?ixid=M3w0NjQwMjd8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4NzI0MjkwNXw"
            },
            "likes": 14,
            "liked_by_user": false,
            "current_user_collections": [

            ],
            "sponsorship": null,
            "topic_submissions": {

            },
            "user": {
                "id": "GQPD6NPt4Fg",
                "updated_at": "2023-06-20T06:13:11Z",
                "username": "tommaomaoer",
                "name": "tommao wang",
                "first_name": "tommao",
                "last_name": "wang",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": "Shooting with Leica M10-p\r\nThis is my way of giving back, keep up with what I photograph on Instagram @tommao2.0",
                "location": "china,beijing",
                "links": {
                    "self": "https://api.unsplash.com/users/tommaomaoer",
                    "html": "https://unsplash.com/@tommaomaoer",
                    "photos": "https://api.unsplash.com/users/tommaomaoer/photos",
                    "likes": "https://api.unsplash.com/users/tommaomaoer/likes",
                    "portfolio": "https://api.unsplash.com/users/tommaomaoer/portfolio",
                    "following": "https://api.unsplash.com/users/tommaomaoer/following",
                    "followers": "https://api.unsplash.com/users/tommaomaoer/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1593746562089-899d3ec94405image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
                    "medium": "https://images.unsplash.com/profile-1593746562089-899d3ec94405image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
                    "large": "https://images.unsplash.com/profile-1593746562089-899d3ec94405image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
                },
                "instagram_username": "tommao2.0",
                "total_collections": 0,
                "total_likes": 117,
                "total_photos": 2303,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "tommao2.0",
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            }
        },
        {
            "id": "D1N2jn7RMnw",
            "slug": "D1N2jn7RMnw",
            "created_at": "2023-05-31T14:59:03Z",
            "updated_at": "2023-06-19T23:38:46Z",
            "promoted_at": "2023-06-19T16:40:02Z",
            "width": 4442,
            "height": 6660,
            "color": "#a6a6a6",
            "blur_hash": "LCK1:xIU-=?w-pxuM_RiIT%NRiRj",
            "description": null,
            "alt_description": "an empty room with a white wall and arches",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1685545047187-93449c73d59b?ixid=M3w0NjQwMjd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1685545047187-93449c73d59b?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=85",
                "regular": "https://images.unsplash.com/photo-1685545047187-93449c73d59b?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
                "small": "https://images.unsplash.com/photo-1685545047187-93449c73d59b?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
                "thumb": "https://images.unsplash.com/photo-1685545047187-93449c73d59b?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1685545047187-93449c73d59b"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/D1N2jn7RMnw",
                "html": "https://unsplash.com/photos/D1N2jn7RMnw",
                "download": "https://unsplash.com/photos/D1N2jn7RMnw/download?ixid=M3w0NjQwMjd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4NzI0MjkwNXw",
                "download_location": "https://api.unsplash.com/photos/D1N2jn7RMnw/download?ixid=M3w0NjQwMjd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4NzI0MjkwNXw"
            },
            "likes": 34,
            "liked_by_user": false,
            "current_user_collections": [

            ],
            "sponsorship": null,
            "topic_submissions": {

            },
            "user": {
                "id": "A3-bk9nODRA",
                "updated_at": "2023-06-19T16:40:02Z",
                "username": "charlierobertphotography",
                "name": "Charlie Robert",
                "first_name": "Charlie",
                "last_name": "Robert",
                "twitter_username": "medicencalo",
                "portfolio_url": "https://instagram.com/charlierobert.photography",
                "bio": null,
                "location": "Puerto Rico",
                "links": {
                    "self": "https://api.unsplash.com/users/charlierobertphotography",
                    "html": "https://unsplash.com/@charlierobertphotography",
                    "photos": "https://api.unsplash.com/users/charlierobertphotography/photos",
                    "likes": "https://api.unsplash.com/users/charlierobertphotography/likes",
                    "portfolio": "https://api.unsplash.com/users/charlierobertphotography/portfolio",
                    "following": "https://api.unsplash.com/users/charlierobertphotography/following",
                    "followers": "https://api.unsplash.com/users/charlierobertphotography/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1638940271717-147973f065f6?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
                    "medium": "https://images.unsplash.com/profile-1638940271717-147973f065f6?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
                    "large": "https://images.unsplash.com/profile-1638940271717-147973f065f6?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
                },
                "instagram_username": "Medicencalo ",
                "total_collections": 0,
                "total_likes": 80,
                "total_photos": 271,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "Medicencalo ",
                    "portfolio_url": "https://instagram.com/charlierobert.photography",
                    "twitter_username": "medicencalo",
                    "paypal_email": null
                }
            }
        },
        {
            "id": "lsdA8QpWN_A",
            "slug": "lsdA8QpWN_A",
            "created_at": "2022-08-31T14:36:55Z",
            "updated_at": "2023-06-19T15:31:47Z",
            "promoted_at": null,
            "width": 7294,
            "height": 4863,
            "color": "#d9d9d9",
            "blur_hash": "LUK-wd.TbtH@%39atQsA-;xuo~xa",
            "description": null,
            "alt_description": "a coffee cup and a pen on a desk",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixid=M3w0NjQwMjd8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1661956602868-6ae368943878?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=85",
                "regular": "https://images.unsplash.com/photo-1661956602868-6ae368943878?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
                "small": "https://images.unsplash.com/photo-1661956602868-6ae368943878?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
                "thumb": "https://images.unsplash.com/photo-1661956602868-6ae368943878?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1661956602868-6ae368943878"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/lsdA8QpWN_A",
                "html": "https://unsplash.com/photos/lsdA8QpWN_A",
                "download": "https://unsplash.com/photos/lsdA8QpWN_A/download?ixid=M3w0NjQwMjd8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4NzI0MjkwNXw",
                "download_location": "https://api.unsplash.com/photos/lsdA8QpWN_A/download?ixid=M3w0NjQwMjd8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4NzI0MjkwNXw"
            },
            "likes": 667,
            "liked_by_user": false,
            "current_user_collections": [

            ],
            "sponsorship": {
                "impression_urls": [
                    "https://ad.doubleclick.net/ddm/trackimp/N1224323.3286893UNSPLASH/B29258209.358659708;dc_trk_aid=549462680;dc_trk_cid=186410004;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=?",
                    "https://pixel.adsafeprotected.com/rfw/st/1337634/69218800/skeleton.gif?gdpr=${GDPR}\u0026gdpr_consent=${GDPR_CONSENT_278}\u0026gdpr_pd=${GDPR_PD}",
                    "https://track.activemetering.com/pixel/v1/all/pixel.gif?cid=7f5782fa-df57-4e4a-85a4-20fd455ad1ed\u0026creativeId=186410004\u0026placementId=358659708",
                    "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false\u0026bannerID=11344880\u0026rnd=[timestamp]\u0026redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
                ],
                "tagline": "Get the advanced tools you need to grow",
                "tagline_url": "https://ad.doubleclick.net/ddm/trackclk/N1224323.3286893UNSPLASH/B29258209.358659708;dc_trk_aid=549462680;dc_trk_cid=186410004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=",
                "sponsor": {
                    "id": "D-bxv1Imc-o",
                    "updated_at": "2023-06-19T18:47:34Z",
                    "username": "mailchimp",
                    "name": "Mailchimp",
                    "first_name": "Mailchimp",
                    "last_name": null,
                    "twitter_username": "Mailchimp",
                    "portfolio_url": "https://mailchimp.com/",
                    "bio": "The all-in-one Marketing Platform built for growing businesses.",
                    "location": null,
                    "links": {
                        "self": "https://api.unsplash.com/users/mailchimp",
                        "html": "https://unsplash.com/@mailchimp",
                        "photos": "https://api.unsplash.com/users/mailchimp/photos",
                        "likes": "https://api.unsplash.com/users/mailchimp/likes",
                        "portfolio": "https://api.unsplash.com/users/mailchimp/portfolio",
                        "following": "https://api.unsplash.com/users/mailchimp/following",
                        "followers": "https://api.unsplash.com/users/mailchimp/followers"
                    },
                    "profile_image": {
                        "small": "https://images.unsplash.com/profile-1609545740442-928866556c38image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
                        "medium": "https://images.unsplash.com/profile-1609545740442-928866556c38image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
                        "large": "https://images.unsplash.com/profile-1609545740442-928866556c38image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
                    },
                    "instagram_username": "mailchimp",
                    "total_collections": 0,
                    "total_likes": 19,
                    "total_photos": 13,
                    "accepted_tos": true,
                    "for_hire": false,
                    "social": {
                        "instagram_username": "mailchimp",
                        "portfolio_url": "https://mailchimp.com/",
                        "twitter_username": "Mailchimp",
                        "paypal_email": null
                    }
                }
            },
            "topic_submissions": {

            },
            "user": {
                "id": "D-bxv1Imc-o",
                "updated_at": "2023-06-19T18:47:34Z",
                "username": "mailchimp",
                "name": "Mailchimp",
                "first_name": "Mailchimp",
                "last_name": null,
                "twitter_username": "Mailchimp",
                "portfolio_url": "https://mailchimp.com/",
                "bio": "The all-in-one Marketing Platform built for growing businesses.",
                "location": null,
                "links": {
                    "self": "https://api.unsplash.com/users/mailchimp",
                    "html": "https://unsplash.com/@mailchimp",
                    "photos": "https://api.unsplash.com/users/mailchimp/photos",
                    "likes": "https://api.unsplash.com/users/mailchimp/likes",
                    "portfolio": "https://api.unsplash.com/users/mailchimp/portfolio",
                    "following": "https://api.unsplash.com/users/mailchimp/following",
                    "followers": "https://api.unsplash.com/users/mailchimp/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1609545740442-928866556c38image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
                    "medium": "https://images.unsplash.com/profile-1609545740442-928866556c38image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
                    "large": "https://images.unsplash.com/profile-1609545740442-928866556c38image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
                },
                "instagram_username": "mailchimp",
                "total_collections": 0,
                "total_likes": 19,
                "total_photos": 13,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": "mailchimp",
                    "portfolio_url": "https://mailchimp.com/",
                    "twitter_username": "Mailchimp",
                    "paypal_email": null
                }
            }
        },
        {
            "id": "_vDlqFeXBCg",
            "slug": "_vDlqFeXBCg",
            "created_at": "2023-06-01T13:25:15Z",
            "updated_at": "2023-06-20T05:38:47Z",
            "promoted_at": "2023-06-19T16:32:01Z",
            "width": 9504,
            "height": 6336,
            "color": "#a67340",
            "blur_hash": "LOHm=Tt7-Us.*0t7ofoKt-S5Ndf6",
            "description": null,
            "alt_description": "a desert with sand dunes and mountains in the background",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1685625762287-5d08e37d5292?ixid=M3w0NjQwMjd8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1685625762287-5d08e37d5292?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=85",
                "regular": "https://images.unsplash.com/photo-1685625762287-5d08e37d5292?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
                "small": "https://images.unsplash.com/photo-1685625762287-5d08e37d5292?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
                "thumb": "https://images.unsplash.com/photo-1685625762287-5d08e37d5292?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1685625762287-5d08e37d5292"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/_vDlqFeXBCg",
                "html": "https://unsplash.com/photos/_vDlqFeXBCg",
                "download": "https://unsplash.com/photos/_vDlqFeXBCg/download?ixid=M3w0NjQwMjd8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4NzI0MjkwNXw",
                "download_location": "https://api.unsplash.com/photos/_vDlqFeXBCg/download?ixid=M3w0NjQwMjd8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4NzI0MjkwNXw"
            },
            "likes": 32,
            "liked_by_user": false,
            "current_user_collections": [

            ],
            "sponsorship": null,
            "topic_submissions": {

            },
            "user": {
                "id": "UyW3yvXPNsA",
                "updated_at": "2023-06-20T03:19:25Z",
                "username": "liuguangxi",
                "name": "光曦 刘",
                "first_name": "光曦",
                "last_name": "刘",
                "twitter_username": "liuguangxi1",
                "portfolio_url": "https://tuchong.com/1822045/",
                "bio": "宾得645Z/80/160、18/45、600、400、300，SONYA7RIV/12/24G、28/135G、200/600G，\r\n佳能EOS5d2/24/70、8/16、70/200，",
                "location": "china",
                "links": {
                    "self": "https://api.unsplash.com/users/liuguangxi",
                    "html": "https://unsplash.com/@liuguangxi",
                    "photos": "https://api.unsplash.com/users/liuguangxi/photos",
                    "likes": "https://api.unsplash.com/users/liuguangxi/likes",
                    "portfolio": "https://api.unsplash.com/users/liuguangxi/portfolio",
                    "following": "https://api.unsplash.com/users/liuguangxi/following",
                    "followers": "https://api.unsplash.com/users/liuguangxi/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1587035081602-8f3d665ba8bfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
                    "medium": "https://images.unsplash.com/profile-1587035081602-8f3d665ba8bfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
                    "large": "https://images.unsplash.com/profile-1587035081602-8f3d665ba8bfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
                },
                "instagram_username": "https://photo.xitek.com/uid/219629",
                "total_collections": 0,
                "total_likes": 0,
                "total_photos": 839,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "https://photo.xitek.com/uid/219629",
                    "portfolio_url": "https://tuchong.com/1822045/",
                    "twitter_username": "liuguangxi1",
                    "paypal_email": null
                }
            }
        },
        {
            "id": "geC1KN701Lw",
            "slug": "a-view-of-a-mountain-range-at-sunset-geC1KN701Lw",
            "created_at": "2023-06-17T18:39:43Z",
            "updated_at": "2023-06-19T16:16:01Z",
            "promoted_at": "2023-06-19T16:16:01Z",
            "width": 5315,
            "height": 2990,
            "color": "#264059",
            "blur_hash": "L_JZuPxtj[oL}=fjWWjss,Nbf6az",
            "description": "\"Shape of the Summit\"",
            "alt_description": "a view of a mountain range at sunset",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1687027053771-76a0460d1c68?ixid=M3w0NjQwMjd8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1687027053771-76a0460d1c68?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=85",
                "regular": "https://images.unsplash.com/photo-1687027053771-76a0460d1c68?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
                "small": "https://images.unsplash.com/photo-1687027053771-76a0460d1c68?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
                "thumb": "https://images.unsplash.com/photo-1687027053771-76a0460d1c68?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1687027053771-76a0460d1c68"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-view-of-a-mountain-range-at-sunset-geC1KN701Lw",
                "html": "https://unsplash.com/photos/a-view-of-a-mountain-range-at-sunset-geC1KN701Lw",
                "download": "https://unsplash.com/photos/geC1KN701Lw/download?ixid=M3w0NjQwMjd8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4NzI0MjkwNXw",
                "download_location": "https://api.unsplash.com/photos/geC1KN701Lw/download?ixid=M3w0NjQwMjd8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4NzI0MjkwNXw"
            },
            "likes": 50,
            "liked_by_user": false,
            "current_user_collections": [

            ],
            "sponsorship": null,
            "topic_submissions": {
                "textures-patterns": {
                    "status": "unevaluated"
                },
                "nature": {
                    "status": "unevaluated"
                },
                "health": {
                    "status": "unevaluated"
                },
                "travel": {
                    "status": "unevaluated"
                },
                "wallpapers": {
                    "status": "unevaluated"
                },
                "spirituality": {
                    "status": "unevaluated"
                }
            },
            "user": {
                "id": "2tXKaPcv9BI",
                "updated_at": "2023-06-20T04:49:03Z",
                "username": "marekpiwnicki",
                "name": "Marek Piwnicki",
                "first_name": "Marek",
                "last_name": "Piwnicki",
                "twitter_username": null,
                "portfolio_url": "https://marpiwnicki.github.io",
                "bio": "\"Hey there! I've uploaded 2.7k+ photos to Unsplash, with 2.2B+ views and 10M+ downloads. If my work has helped or inspired you, please consider donating even $1 to support me. Every bit helps me continue creating and sharing my photos. Thank you! ❤️\"",
                "location": "Gdynia | Poland",
                "links": {
                    "self": "https://api.unsplash.com/users/marekpiwnicki",
                    "html": "https://unsplash.com/@marekpiwnicki",
                    "photos": "https://api.unsplash.com/users/marekpiwnicki/photos",
                    "likes": "https://api.unsplash.com/users/marekpiwnicki/likes",
                    "portfolio": "https://api.unsplash.com/users/marekpiwnicki/portfolio",
                    "following": "https://api.unsplash.com/users/marekpiwnicki/following",
                    "followers": "https://api.unsplash.com/users/marekpiwnicki/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
                    "medium": "https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
                    "large": "https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
                },
                "instagram_username": "marekpiwnicki",
                "total_collections": 36,
                "total_likes": 1632,
                "total_photos": 2812,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "marekpiwnicki",
                    "portfolio_url": "https://marpiwnicki.github.io",
                    "twitter_username": null,
                    "paypal_email": null
                }
            }
        },
        {
            "id": "xHI1NVjaOZE",
            "slug": "a-woman-standing-in-front-of-a-window-holding-a-white-scarf-xHI1NVjaOZE",
            "created_at": "2023-06-18T08:24:01Z",
            "updated_at": "2023-06-19T23:38:47Z",
            "promoted_at": "2023-06-19T16:08:02Z",
            "width": 4941,
            "height": 7408,
            "color": "#d9c0a6",
            "blur_hash": "LbNvxb00S4xtoy%M%1jro}kAogWB",
            "description": null,
            "alt_description": "a woman standing in front of a window holding a white scarf",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1687076632453-59b7d88cef1f?ixid=M3w0NjQwMjd8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1687076632453-59b7d88cef1f?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=85",
                "regular": "https://images.unsplash.com/photo-1687076632453-59b7d88cef1f?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
                "small": "https://images.unsplash.com/photo-1687076632453-59b7d88cef1f?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
                "thumb": "https://images.unsplash.com/photo-1687076632453-59b7d88cef1f?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4NzI0MjkwNXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1687076632453-59b7d88cef1f"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-woman-standing-in-front-of-a-window-holding-a-white-scarf-xHI1NVjaOZE",
                "html": "https://unsplash.com/photos/a-woman-standing-in-front-of-a-window-holding-a-white-scarf-xHI1NVjaOZE",
                "download": "https://unsplash.com/photos/xHI1NVjaOZE/download?ixid=M3w0NjQwMjd8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4NzI0MjkwNXw",
                "download_location": "https://api.unsplash.com/photos/xHI1NVjaOZE/download?ixid=M3w0NjQwMjd8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4NzI0MjkwNXw"
            },
            "likes": 20,
            "liked_by_user": false,
            "current_user_collections": [

            ],
            "sponsorship": null,
            "topic_submissions": {

            },
            "user": {
                "id": "BGNOmTbHjIg",
                "updated_at": "2023-06-19T16:08:02Z",
                "username": "frosteckiy",
                "name": "Toni Frost",
                "first_name": "Toni",
                "last_name": "Frost",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": "Hello, my name is Anton.\r\nThank you for any support ❤️",
                "location": "Gdańsk ",
                "links": {
                    "self": "https://api.unsplash.com/users/frosteckiy",
                    "html": "https://unsplash.com/@frosteckiy",
                    "photos": "https://api.unsplash.com/users/frosteckiy/photos",
                    "likes": "https://api.unsplash.com/users/frosteckiy/likes",
                    "portfolio": "https://api.unsplash.com/users/frosteckiy/portfolio",
                    "following": "https://api.unsplash.com/users/frosteckiy/following",
                    "followers": "https://api.unsplash.com/users/frosteckiy/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1644162661047-f220137df09dimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
                    "medium": "https://images.unsplash.com/profile-1644162661047-f220137df09dimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
                    "large": "https://images.unsplash.com/profile-1644162661047-f220137df09dimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
                },
                "instagram_username": "Tonypictures_",
                "total_collections": 0,
                "total_likes": 0,
                "total_photos": 144,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "Tonypictures_",
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            }
        },
        {
            "id": "_vy0OpwHHGg",
            "slug": "_vy0OpwHHGg",
            "created_at": "2023-05-31T14:56:12Z",
            "updated_at": "2023-06-19T16:00:01Z",
            "promoted_at": "2023-06-19T16:00:01Z",
            "width": 4237,
            "height": 2825,
            "color": "#404059",
            "blur_hash": "LlFrq]oes:Rk0KRjWCoy%2t7j[WB",
            "description": "cumulus storm clouds gathering in sky",
            "alt_description": "a plane flying through a cloudy sky with sunbeams",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1685544830644-f2966cdb4aad?ixid=M3w0NjQwMjd8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODcyNDI5MDV8\u0026ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1685544830644-f2966cdb4aad?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODcyNDI5MDV8\u0026ixlib=rb-4.0.3\u0026q=85",
                "regular": "https://images.unsplash.com/photo-1685544830644-f2966cdb4aad?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODcyNDI5MDV8\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080",
                "small": "https://images.unsplash.com/photo-1685544830644-f2966cdb4aad?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODcyNDI5MDV8\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400",
                "thumb": "https://images.unsplash.com/photo-1685544830644-f2966cdb4aad?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NjQwMjd8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODcyNDI5MDV8\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1685544830644-f2966cdb4aad"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/_vy0OpwHHGg",
                "html": "https://unsplash.com/photos/_vy0OpwHHGg",
                "download": "https://unsplash.com/photos/_vy0OpwHHGg/download?ixid=M3w0NjQwMjd8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODcyNDI5MDV8",
                "download_location": "https://api.unsplash.com/photos/_vy0OpwHHGg/download?ixid=M3w0NjQwMjd8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODcyNDI5MDV8"
            },
            "likes": 18,
            "liked_by_user": false,
            "current_user_collections": [

            ],
            "sponsorship": null,
            "topic_submissions": {

            },
            "user": {
                "id": "LLuWZNsnVgU",
                "updated_at": "2023-06-19T16:02:23Z",
                "username": "benjamingrant",
                "name": "Benjamin Grant",
                "first_name": "Benjamin",
                "last_name": "Grant",
                "twitter_username": null,
                "portfolio_url": "http://benjamingrant.photo",
                "bio": "This permit shall be posted on the conveyance.",
                "location": "earth",
                "links": {
                    "self": "https://api.unsplash.com/users/benjamingrant",
                    "html": "https://unsplash.com/@benjamingrant",
                    "photos": "https://api.unsplash.com/users/benjamingrant/photos",
                    "likes": "https://api.unsplash.com/users/benjamingrant/likes",
                    "portfolio": "https://api.unsplash.com/users/benjamingrant/portfolio",
                    "following": "https://api.unsplash.com/users/benjamingrant/following",
                    "followers": "https://api.unsplash.com/users/benjamingrant/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1605371688745-697e49105377image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
                    "medium": "https://images.unsplash.com/profile-1605371688745-697e49105377image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
                    "large": "https://images.unsplash.com/profile-1605371688745-697e49105377image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
                },
                "instagram_username": "benjaminstagrant",
                "total_collections": 0,
                "total_likes": 16,
                "total_photos": 9,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": "benjaminstagrant",
                    "portfolio_url": "http://benjamingrant.photo",
                    "twitter_username": null,
                    "paypal_email": null
                }
            }
        }
    ];

    const loadMorePics = () => {

    };

    const navigateToDetails = (iamgeData) => {
        navigate(screenNames.details, { data: iamgeData });
    };

    const renderImageObj = (item, index) => {
        return (
            <TouchableOpacity onPress={ () => navigateToDetails(item) } style={ styles.imageViewCont }>
                <Image
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
        return (
            <View style={ styles.footerCont }>
                { loading ?
                    (<ActivityIndicator color={ colors.PRIMARY.default } />)
                    :
                    (<TouchableOpacity onPress={ loadMorePics }>
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
            <SafeAreaView>
                <Text style={ styles.header }>{ strings.photoAlbum }</Text>
                <FlatList
                    contentContainerStyle={ { marginVertical: 10 } }
                    numColumns={ 2 }
                    data={ dummyData }
                    keyExtractor={ (item, index) => index + item }
                    renderItem={ ({ item, index }) => renderImageObj(item, index) }
                    ListFooterComponent={ renderFooter }
                />

            </SafeAreaView>
        </View>
    );
};
