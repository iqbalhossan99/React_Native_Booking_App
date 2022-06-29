import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Post from "./src/components/Posts";
import HomeScreen from "./src/screens/Home";

import { posts } from "./assets/data/feed";
import SearchResult from "./src/screens/SearchResults";
import PostCarouselItem from "./src/components/PostCarouselItem";
import DestinationSearchScreen from "./src/screens/DestinationSearch";
import GuestsScreen from "./src/screens/Guests";
import Carousel from "./src/components/Carousel/Carousel";
import Router from "./src/navigation/Router";




const post1 = posts[2]

const images = [
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg",
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg",
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/4.jpg",
    
];

export default function App() {
  return (
    < >
      <StatusBar style="auto" />
      <Router/>
      {/* <HomeScreen/> */}
      {/* <Carousel images={images} /> */}
      {/* <Post post={post1}/> */}
      {/* <SearchResult/> */}
      {/* <PostCarouselItem post={post1}/>  */}
      {/* <DestinationSearchScreen /> */}
      {/* <GuestsScreen/> */}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {ol,
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
