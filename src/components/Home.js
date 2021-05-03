import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import data from "./Data"
import Rating from '@material-ui/lab/Rating';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        Width: 445,

    },
    root1: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItem: "center",
        textAlign: 'center',
        '& > * + *': {
            marginTop: theme.spacing(1),
        },

    },

    media: {
        height: 270,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        margin: 5,
        color: theme.palette.text.secondary,
    },
}));

export default function Home({ cartData, setCartData }) {
    const classes = useStyles();
    const addtocart = (data) => {
        setCartData([...cartData, data])
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    data.map((dict, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Paper elevation={8} className={classes.paper}>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={dict.image}
                                            />
                                            <CardContent>
                                                <Typography color="textPrimary" component="h1">
                                                    {dict.name}
                                                </Typography>
                                                <Typography color="textPrimary" component="p">
                                                    Price: {dict.price}.00 pkr
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <div className={classes.root1}>
                                            Product Rating: <Rating name="half-rating" defaultValue={3.8} precision={0.5} readOnly />
                                        </div>
                                        <CardActions>
                                            <Button variant="outlined" color="primary" onClick={() => addtocart(dict)}>
                                                Add To Cart
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Paper>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    );
}

