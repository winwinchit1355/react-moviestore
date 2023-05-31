import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, Card, CardContent, Typography } from '@mui/material';

function Movies() {
    return ( 
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Grid className="mt-2" container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ display: 'flex' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h5" component="div">
                                    Card Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Card Content
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </React.Fragment>
     );
}

export default Movies;