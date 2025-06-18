import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, ImageBackground, Image, FlatList } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import React from 'react'

const movies = [
    {   
        id: "1",
        title: "How to Train Your Dragon",
        poster: "https://filmdb.landmarkcinemas.com/FilmImages/22/1/125641/HowtoTrainYourDragon-IMAX-OfficialPoster.jpg"
    },
    {
        id: "2",
        title: "Ballerina",
        poster: "https://static0.srcdn.com/wordpress/wp-content/uploads/2025/04/image006.png"
    },
    {
        id: "3",
        title: "Materialists",
        poster: "https://assets-prd.ignimgs.com/2025/03/18/materialists-ver2-xlg-1742307885662.jpg"
    },
    {
        id: "4",
        title: "The Phoenician Scheme",
        poster: "https://image.tmdb.org/t/p/original/aHjpixSOn166tZLWRdIvHWDPu6y.jpg"
    },
    {
        id: "5",
        title: "Lilo & Stitch",
        poster: "https://upload.wikimedia.org/wikipedia/en/5/56/Lilo_%26_Stitch_2025_Theatrical_Poster.jpg"
    },
    {
        id: "6",
        title: "28 Years Later",
        poster: "https://www.landmarkcinemas.com/media/425640/28-years-later-poster.jpg"
    },
    {
        id: "7",
        title: "Thunderbolts",
        poster: "https://filmdb.landmarkcinemas.com/FilmImages/22/1/125097/ThunderboltsPoster-350x519.png"
    },
    {
        id: "8",
        title: "Avengers: Endgame",
        poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQBV4DwisDoIO-v1M44sNNYtyOM2GSL3q-vijXQyB_VDuZqyop8NgiZQajBO-3oqbbzfuXIcA"
    },
    {
        id: "9",
        title: "Titanic",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTmSp4vOYJs3sB-HMuuJF8eoIyjqdOL79FZbrcMKqhx3CKQHd"
    },
    {
        id: "10",
        title: "Bring Her Back",
        poster: "https://mediafiles.cineplex.com/Central/Film/Posters/37870_768_1024.jpg"
    },
    {
        id: "11",
        title: "Sinners",
        poster: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg"
    },
    {
        id: "12",
        title: "Until Dawn",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2L0kJX5Wj9PJg_gWosLDni23knc0NGUjDQ&s"
    },
]

//Background Image
const backgroundImage = require("@/assets/images/search-page-background.jpg");

const SearchPageComponent = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
            {/* Search Bar */}
            <View style={styles.searchBar}>
                <Text style={styles.searchBarText}>Search movies</Text>
                <Feather name="search" style={styles.searchIcon} size={24} color="white" />
            </View>
        
            <FlatList
                style={styles.movieSection}
                data={movies} 
                keyExtractor={item => item.id}
                numColumns={2}
                horizontal={false}
                renderItem={({ item }) => (
                    <View style={styles.movieCard}>
                        <Image source={{ uri: item.poster}} style={styles.moviePoster} resizeMode='cover' />
                        <Text style={styles.movieSectionText}>{item.title}</Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
            </SafeAreaView>
    </ImageBackground>
  )
}

export default SearchPageComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Adjust for Android status bar
        
    },

    searchBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
        width: "85%",
        height: 45,
        backgroundColor: "black",
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: "gray",
        justifyContent: "center",
        alignSelf: "center"
    },

    searchBarText: {
        color: 'gray',
        paddingLeft: 20,
        marginRight: 175
    },

    searchIcon: {
        paddingRight: 20
    },

    movieSection: {
        borderTopWidth: 2,
        borderTopColor: "rgba(0,0,0,0.5)",
    },

    movieCard: {
        width: 190,
        alignItems: "center",
        marginVertical: 15
    },

    moviePoster: {
        width: "80%",
        aspectRatio: 2/3,
    },

    movieSectionText: {
        color: "gray",
        fontSize: 14,
        marginTop: 5
    }

})