import { View, Text, StyleSheet, Platform, Image, StatusBar, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
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
        poster: "https://assets-prd.ignimgs.com/2025/03/18/materialists-ver2-xlg-1742307885662.jpg"
    },
    {
        id: "4",
        title: "The Phoenician Scheme",
        poster: "https://www.watervillecreates.org/wp-content/uploads/2025/05/the-phoenician-scheme-poster-800x1200.webp"
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
        <LinearGradient 
            colors={[ "#FFF1B8", "#000", "#000", ]} 
            style={styles.linearGradientStyling}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >   
            <StatusBar barStyle="dark-content" backgroundColor="#FFF1B8"/>
            <SafeAreaView style={{flex: 1}} edges={['top', 'left', 'right']}>
                {/* Header Section */}
                <View style={styles.header}>
                    <Image source={require("../assets/images/arrowIcon.png")} style={styles.arrowIcon} />
                </View>
        
                {/* Movie Posters Section */}
                <Text style={styles.SectionHeaderText}>Now Playing</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.movieSection}
                >
                    {movies.map((movie) => (
                    <View key={movie.id} style={styles.movieCard}>
                        <Image source={{ uri: movie.poster }} style={styles.moviePoster} resizeMode="contain" />
                        <Text style={styles.movieSectionText}>
                            {movie.title}
                        </Text>
                    </View>
                    ))}
                </ScrollView>
            



                <LinearGradient colors={["#000", "#0C1B3A", '#000']} style={styles.theatreSection}>
                    {/* Find Theatre Section */}        
                    <View>
                        <Text style={styles.SectionHeaderText}>Find Your Theatre</Text>
                    </View>
                </LinearGradient>
                
                {/* Navigation Bar Section */}
                <View>
                    
                </View>
            </SafeAreaView>
        </LinearGradient>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Adjust for Android status bar
        backgroundColor: "black",
        width: '100%'
    },
    header: {
        backgroundColor: "rgba(0,0,0,0.75)",
        width: '100%',
        height: 50,  
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
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

    SectionHeaderText: {
        color: "white",
        fontSize: 20,
        marginTop: 5,
        marginBottom: 20,   
        marginLeft: 20
    },

    linearGradientStyling: {
        width: '100%',
        flex: 1
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
        width: "70%",
        aspectRatio: 3/4,
        marginBottom: 8,
    },
    
    theatreSection: {
        flex: 1
    },

    theatreCard: {
        flex: 1
    }

})