import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Image, ScrollView } from 'react-native'
import { LinearGradient } from "expo-linear-gradient"
import React from 'react'

// Movies
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
        poster: "https://m.media-amazon.com/images/M/MV5BNmQxMTI1YmEtOGY3Yi00NzVlLWEzMjAtYTI1NWZkNDFiMDg1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "4",
        title: "The Phoenician Scheme",
        poster: "https://m.media-amazon.com/images/M/MV5BNTJmODQzYmItNTZlMy00Mjg0LTk1NjctYjM4ZGI0NTM3ZTVjXkEyXkFqcGc@._V1_.jpg"
    }

]

// Theatres
const theatres = [
    {
        theatre: "Cineplex VIP Cinemas University District (age restricted 18+)",
        address: "250 3953 University Ave NW • Calgary, AB",
        distance: 17
    },
    {
        theatre: "Cineplex Cinemas East Hills",
        address: "205 East Hills Boulevard SE • Calgary, AB",
        distance: 19
    },
    {
        theatre: "Scotiabank Theatre Chinook",
        address: "6455 Macleod Trail SW • Calgary, AB",
        distance: 23
    }
]

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
        
        <LinearGradient colors={["#FFF1B8", "#000"]} style={styles.linearGradientStyling}>   
            {/* Header Section */}
            <View style={styles.header}>
                <Image source={require("../assets/images/arrowIcon.png")} style={styles.arrowIcon} />
            </View>
      
            {/* Movie Posters Section */}
            <Text style={styles.movieSectionHeaderText}>Now Playing</Text>
             <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.movieSection}
            >
                {movies.map((movie) => (
                <View key={movie.id} style={styles.movieCard}>
                    <Image source={{ uri: movie.poster }} style={styles.moviePoster} resizeMode="contain" />
                    <Text style={styles.movieSectionText} numberOfLines={1}>
                    {movie.title}
                    </Text>
                </View>
                ))}
            </ScrollView>
        

        </LinearGradient>

        <LinearGradient colors={["#0C1B3A", "#000", 'transparent']} style={styles.theatreSection}>
            {/* Find Theatre Section */}        
            <View>
                
            </View>
        </LinearGradient>
        
        {/* Navigation Bar Section */}
        <View>
            
        </View>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Adjust for Android status bar
        width: '100%'
    },
    header: {
        backgroundColor: "black",
        opacity: 0.9,
        width: '100%',
        height: 50,  
        borderBottomLeftRadius: '25px',
        borderBottomRightRadius: '25px'
    },

    headerText: {
        color: 'white'     
    },

    arrowIcon: {
        width: 20,
        height: 20
    },

    movieSection: {
    },

    movieSectionHeaderText: {
        color: "white",
        fontSize: 20,
        marginTop: 5,
        marginBottom: 20   

    },

    linearGradientStyling: {
        width: '100%',
        flex: 2/3,
        opacity: 0.8
    },

    movieSectionText: {
        color: "white",
        textAlign: "center"
    },

    movieCard: {
        width: "90%",
        alignItems: "center",
    },

    moviePoster: {
        width: "75%",
        aspectRatio: 2/3,
        marginBottom: 8,
    },
    
    theatreSection: {
        
    },

    theatreCard: {
        flex: 1
    }

})