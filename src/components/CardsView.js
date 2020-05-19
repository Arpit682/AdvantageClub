import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CardItem } from './CardItem'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
export class CardsView extends React.Component {


    getChildData = (data, countInRow, classes) => {
        const total = data.length;
        if (total % countInRow === 0) {
           const rows = total/countInRow;
        } else {
           const rows = (total/countInRow) + 1;
        }

        const card = data.map(item => {
        return (<Grid item xs>
              <Card className={classes.paper}>
                  <CardHeader title={item.title} subheader={item.address} />
                  <CardMedia image="bbq.jpg" title="bbq" />
                  <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                          Buy Now
                      </Typography>
                  </CardContent>
              </Card>
        </Grid>);

        });

        return card;
    }

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

  const data = [
                 {
                   "title": "Barbeque Nation",
                   "imgPath": "bbq.png",
                   "address": "Pan India"
                 },
                 {
                   "title": "Barbeque Nation",
                   "imgPath": "bbq.png",
                   "address": "Pan India"
                 },
                 {
                   "title": "Barbeque Nation",
                   "imgPath": "bbq.png",
                   "address": "Pan India"
                 },
                 {
                   "title": "Barbeque Nation",
                   "imgPath": "bbq.png",
                   "address": "Pan India"
                 },
                 {
                   "title": "Barbeque Nation",
                   "imgPath": "bbq.png",
                   "address": "Pan India"
                  },
               ]

  const countInRow = 4; // Count of cards in a row.
  let card = this.getChildData(data, countInRow, classes);
  return(
  <div className={classes.root}>
  <Grid container spacing={3}>
          {card}
        </Grid>
        </div>
  );
  }
}