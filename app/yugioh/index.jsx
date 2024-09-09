import React, {useState} from "react";
import { useEffect } from "react";
import { SafeAreaView, View, Pressable, Text, Image, StyleSheet } from "react-native";

const getCards = async (setCards) => {
    try {
        const response = await fetch(
            'https://db.ygoprodeck.com/api/v7/cardinfo.php');
        const json = await response.json();
        setCards(json.data)
        return json.data;
    } catch (error) {
        console.error(error);
    }
}

export default Yugioh = () => {
    const [cards, setCards]=useState([])

    useEffect(() => {
        getCards(setCards);
      }, []);
    console.log(cards)

    return (
        <SafeAreaView style={styles.container}>
            <Text>YUGIOH</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between"
    },
})