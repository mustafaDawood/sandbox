import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react';
import MoviesList from '../Components/Home/MoviesList';
import CatagoryList from '../Components/Home/CatagoryList';
import Slider from '../Components/Home/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../src/movieSlice';

const Home = () => {

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);


  useEffect (() => {
    dispatch(fetchPopularMovies())  
  },[dispatch])

  return (
    <View style={styles.container}>
      <ScrollView >
      <Slider />

        <View style={styles.CatalogConatiner}>
          <Text style={styles.Title}>Catagories</Text>
          <CatagoryList />
        </View>

        <View style={styles.ListContainer}>
          <MoviesList rowTitle={'TrendingMovies'} data={movies}/>
        </View>

        <View style={styles.ListContainer}>
          <MoviesList rowTitle={'TrendingSeries'} />
        </View>

        <View style={styles.ListContainer}>
          <MoviesList rowTitle={'Latest Movies'} />
        </View>

        <View style={styles.ListContainer}>
          <MoviesList rowTitle={'Latest Series '}/>
        </View>

      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor :'black'
  },
  CatalogConatiner: {
    // backgroundColor: 'red',
    padding: 10,
  },
  ListContainer: {
    marginBottom: 10
  },
  Title: {
    fontFamily: 'Bold',
    fontSize: 20,
    marginVertical: 5
  },

})