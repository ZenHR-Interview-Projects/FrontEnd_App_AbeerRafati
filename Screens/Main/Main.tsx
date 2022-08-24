import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    FlatList,
    Alert,

} from "react-native";
import { Card } from "react-native-paper";
import { styles } from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons'


export default function Main() {

    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    function fetchData() {
        fetch("https://reactnative.dev/movies.json")
            .then((res) => res.json())
            .then((newData) => {
                setData(newData);
                setLoading(false);

            })
            .catch((err) => {
                Alert.alert(`error in fetching`, err);
            });
    }

    useEffect(() => {

        fetchData()

    }, []);




    return (


        <View style={styles.root}>
            <Card
                style={styles.topCard}>
                <View style={styles.topText} > {data.title}</View>
                <View > {data.description}</View>
            </Card>




            <FlatList
                data={data.movies}
                onRefresh={() => fetchData()}
                refreshing={loading}
                keyExtractor={(item) => item.id}
                renderItem={(item) => {
                    // console.log("from flaaaaaatlist", item.item);
                    return (
                        <Card
                            style={styles.myCard}
                            key={item.item.id}
                        >
                            <View style={styles.cardView}>

                                <MaterialCommunityIcons name="movie-open" size={30} color="blue" />

                                <View style={styles.textView}>

                                    <Text style={styles.text}>{item.item.title}</Text>

                                    <Text>{item.item.releaseYear}</Text>

                                </View>

                            </View>
                        </Card>
                    );
                }}
            />

        </View>
    )

}