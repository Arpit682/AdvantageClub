import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

export class CardItem  extends React.Component {
    getStyles = () => ({
        root: {
            flexGrow: 1,
        },
        control: {
            padding: 2,
        },
        paper: {
            height: 140,
            width: 100,
        }
    });
    render() {
        const classes = makeStyles((theme) => this.getStyles());

        return (
            <Grid item xs>
                <Card className={classes.paper}>
                    <CardHeader title={this.props.title} subheader={this.props.address} />
                    <CardMedia image="bbq.jpg" title="bbq" />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Buy Now
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}
