import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardMedia from '@mui/material/CardMedia';

function Movies() {
    const [movies, setMovies] = useState([]);
    const fetchData=async()=>{
        try{
            const response=await axios.get('https://api.themoviedb.org/3/movie/popular?page=1&api_key=4cb31937286eddf1834cdfb351ee5d15&append_to_response=videos');
            setMovies(response.data.results);
        }catch(error)
        {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
    if (!movies) {
        return <h1>loading....</h1>;
      }
    return ( 
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Grid className="mt-2" container spacing={2} style={{ cursor: 'pointer' }}>
                    {movies.map((movie,key)=>(
                        <Grid key={key} item xs={12} sm={6} md={2}>
                        <Card sx={{ maxWidth: 345,height:'auto' }}>
                            <CardMedia
                                component="img"
                                image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                title={movie.title}
                                style={{
                                // width: '345px',
                                // height: '240px',
                                // objectFit:'contain',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="p" component="div" style={{height:50,overflow:'hidden'}}>
                                {movie.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {movie.release_date}
                                </Typography>
                            </CardContent>
                           
                        </Card>
                    </Grid>
                    ))}
                    
                    
                </Grid>

            </Container>
        </React.Fragment>
     );
}

export default Movies;