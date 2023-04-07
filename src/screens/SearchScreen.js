import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";
import useBusinesses from "../hooks/useBusinesses";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = React.usteState("");
  const [searchApi, businesses, errorMessage] = useBusinesses();

  const filterResultsByPrice = (price) => {
    return businesses.filter((business) => {
      return business.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestaurantList
          title="Cost Effective"
          restaurants={filterResultsByPrice("$")}
        />
        <RestaurantList
          title="Bit Pricier"
          restaurants={filterResultsByPrice("$$")}
        />
        <RestaurantList
          title="Big Spender"
          restaurants={filterResultsByPrice("$$$")}
        />
        <RestaurantList
          title="Top Dollar"
          restaurants={filterResultsByPrice("$$$$")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
