import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const RestaurantScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam("id");

  const getBusiness = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };

  useEffect(() => {
    getBusiness(id);
  }, []);

  if (!restaurant) {
    return null;
  }

  return (
    <View>
      <Text>{restaurant.name}</Text>
      <FlatList
        data={restaurant.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default RestaurantScreen;
