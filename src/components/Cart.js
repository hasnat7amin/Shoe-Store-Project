import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: "10px auto",
        backgroundColor: "#f0f0f1",
        borderRadius: " 20px",
        maxWidth: 600,
    },
    image: {
        width: 200,
        height: 200,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function Cart({ cartData, setCartData }) {
    const classes = useStyles();
    const removetocart = (deletedata) => {
        setCartData(cartData.filter(product => product != deletedata))
    }

    let count = 0;
    let getCount = () => {
        cartData.forEach((item) => {
            count += item.price;
        });
        return count;
    }

    

    return (
        <div className={classes.root}>
            {
                cartData.map((data, index) => {
                    return (
                        <Paper className={classes.paper}>
                            <Grid container spacing={2} >
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img src={data.image} className={classes.img} alt="complex" />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid >
                                            <h4 >
                                                {data.name}
                                            </h4>

                                        </Grid>
                                        <Grid>
                                            <Button variant="outlined" color="primary" onClick={() => removetocart(data)}>
                                                Remove To Cart
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <br></br>
                                    <Grid>
                                        <Typography variant="subtitle1"><h3>Rs. {data.price}</h3></Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    )
                })
            }

            <Paper className={classes.paper}>
               <h2>Total Price : {getCount()}</h2>
               <Button variant="outlined" color="primary" >
                    Check To Proceed
                </Button>
            </Paper>
        </div>
    );
}

