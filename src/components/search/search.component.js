import { Searchbar } from "react-native-paper";
import React, { useContext, useState } from "react";
import { LocationContext } from "../../services/location/location.context";
export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const onChangeText = (query) => setSearchKeyword(query);
  return (
    <Searchbar
      placeholder="Search for a location"
      value={searchKeyword}
      onSubmitEditing={search(searchKeyword)}
      onChangeText={onChangeText}
    />
  );
};
