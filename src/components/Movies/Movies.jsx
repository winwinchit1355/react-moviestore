import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function Movies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const fetchData=async()=>{
        try{
            const response=await axios.get('https://api.themoviedb.org/3/movie/changes?page=1&api_key=4cb31937286eddf1834cdfb351ee5d15&append_to_response=videos');
            console.log(response);
            setMovies(response.data.results);
        }catch(error)
        {
            console.log(error);
        }
    }
    console.log(movies)
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
                <Grid className="mt-2" container spacing={2}>
                    {movies.map((movie,key)=>(
                        <Grid key={key} item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                image="https://i.pinimg.com/originals/46/04/15/46041588c31812fdd1d331c5d3c97623.png"
                                title="green iguana"
                                style={{
                                width: '345px',
                                height: '240px',
                                objectFit:'contain'
                                }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                    
                    
                </Grid>

            </Container>
        </React.Fragment>
     );
}

export default Movies;