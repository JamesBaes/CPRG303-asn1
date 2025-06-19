import { View, Text, StyleSheet, Platform, Image, StatusBar, ScrollView, TouchableOpacity, Alert, SafeAreaView } from 'react-native'
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
        location: "Cineplex VIP Cinemas University District (age restricted 18+)",
        address: "250 3953 University Ave NW • Calgary, AB",
        distance: 17
    },
    {
        location: "Cineplex Cinemas East Hills",
        address: "205 East Hills Boulevard SE • Calgary, AB",
        distance: 19
    },
    {
        location: "Scotiabank Theatre Chinook",
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
            <SafeAreaView style={{flex: 1}}>
                {/* Header Section */}
                <View style={styles.header}>
                    <View style={styles.headerLocationSection}>
                        <Image source={require("../assets/images/arrowIcon.png")} style={styles.arrowIcon} />
                        <Text style={styles.headerText}>Calgary, AB</Text>
                    </View>
                    <View style={styles.headerAddSceneSection}>
                        <View style={styles.addSceneSection}>
                            <Text style={styles.addSceneText}>
                                Add Scene+
                            </Text>
                        </View>
                        <View style={{backgroundColor: "blue", width: 40, marginLeft: -10, borderRadius: 40, height: 40, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{color: "white", fontWeight: "bold"}}>JB</Text>
                        </View>
                    </View>
                </View>
        
                {/* Movie Posters Section */}
                <Text style={   styles.movieSectionHeaderText}>Now Playing</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.movieSection}
                    contentContainerStyle={{ alignItems: "flex-start"}}
                >
                    {movies.map((movie, index) => (
                    <View 
                        key={movie.id} 
                        style={[
                            styles.movieCard,
                            index !== 0 && { marginLeft: -200, boxShadow: 'blur', width: styles.movieCard.width - 15, marginTop: 11 }, // this part is for rendering the movie posters to overlap and shrinking the width
                            { zIndex: movies.length - index } // this ensures that the first card remains on top and the last card at the bottom.
                        ]}
                    >
                        <Image source={{ uri: movie.poster }} style={styles.moviePoster} resizeMode="cover" />
                        {index === 0 && (         
                            <Text style={styles.movieSectionText}>
                                {movie.title}
                            </Text> 
                            )
                        }
                    </View>
                    ))}
                </ScrollView>
                    

                {/* Horizontal line to seperate between sections */}
                <View style={styles.hr} />

                <LinearGradient colors={["#000", "#0C1B3A", "#0C1B3A", "#0C1B3A", '#000']} style={styles.theatreSection}>
                    {/* Find Theatre Section */}        
                    <Text style={styles.theatreSectionHeaderText}>Find Your Theatre</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {theatres.map((theatre) => (
                            <View style={styles.theatreCard}>
                                <View style={styles.theatreCardDistanceSection}>
                                    <Text style={styles.theatreCardDistanceText}>
                                        {theatre.distance}
                                    </Text>
                                    <Text style={{fontSize: 15, color: "gray"}}>KM</Text>
                                </View> 
                                <View style={styles.theatreCardLocationAndAddressSection}>
                                    <Text style={styles.theatreCardLocationText} numberOfLines={1}>
                                        {theatre.location}
                                    </Text>
                                    <Text style={styles.theatreCardAddressText} numberOfLines={1}>
                                        {theatre.address}
                                    </Text>
                                </View>
                            </View>
                        
                        ))}
                    </ScrollView>
                
                </LinearGradient>
                
                {/* Alert Button */}
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style = {styles.buttonText} onPress={() => alert("Alert Button Pressed")}>Alert</Text>
                    </TouchableOpacity>
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
        width: '100%',
        
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.75)",
        width: '100%',
        height: 50,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },

    headerText: {
        fontWeight: "bold",
        color: 'white',     
        fontSize: 12,
        marginLeft: 5
    },

    headerLocationSection: {
        flex: 1,
        flexDirection: "row"
    },

    headerAddSceneSection: {
        flex: 0.72,
        flexDirection: "row",
        alignItems: 'center'
    },

    addSceneSection: {
        width: 120,
        height: 35,
        backgroundColor: "rgba(0,0,0,0.55)",
        borderRadius: 17,
        justifyContent: "center",
        paddingLeft: 15
    },

    addSceneText: {
        color: "white"
    },

    arrowIcon: {
        marginLeft: 20,
        width: 20,
        height: 20
    },

    movieSection: {
    },

    movieSectionHeaderText: {
        color: "white",
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,   
        marginLeft: 20,
        fontWeight: "semibold" 
    },
    
    theatreSectionHeaderText: {
        color: "white",
        fontSize: 20,
        marginBottom: 20,   
        marginLeft: 20, 
        fontWeight: "semibold"
    },

    linearGradientStyling: {
        width: '100%',
        flex: 1
    },

    movieSectionText: {
        color: "white",
        textAlign: "center",
        paddingTop: 30,
        fontSize: 15,
        fontWeight: "semibold"
    },

    movieCard: {
        paddingLeft: 20,
        width: 250,
        alignItems: "flex-start",
    },

    moviePoster: {
        width: "100%",
        aspectRatio: 2/3,
        marginBottom: 8,
    },
    
    theatreSection: {
        flex: 5
    },

    theatreCard: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        width: 300,
        height: 90,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: "rgba(0,0,200,0.3)",
        backgroundColor: "rgba(0,0,0,0.6)",
        marginLeft: 20
    },

    theatreCardDistanceSection: {
        flex: 0.25,
        alignItems: "center"
    },

    theatreCardDistanceText: {
        fontSize: 20,
        color: "white",
    },

    theatreCardLocationAndAddressSection: {
        flex: 1
    },

    theatreCardLocationText: {
        color: 'white',
        justifyContent: "center",
        fontSize: 16,
        fontWeight: "semibold",
    },

    theatreCardAddressText: {
        color: 'rgb(167, 167, 184)',
        justifyContent: "center",
        fontSize: 12,
        fontWeight: "semibold",
        marginTop: 7
    },

    hr: {
        borderColor: "blue",
        opacity: 0.2,
        borderWidth: 1,
        marginBottom: 20,

    },

    button: {
        backgroundColor: "red",
        width: 50,
        height: 30,
        marginLeft: 170,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: "white"
    }

})