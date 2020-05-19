import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CardItem } from './CardItem'

export class CardsView extends React.Component {


    getChildData = (data, countInRow) => {
           const cards = data.map(item => <CardItem
           title={item.title}
           address={item.address}
           />)
        return cards;
    }

  render() {
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
                 }
               ]

  const countInRow = 4; // Count of cards in a row.
  let card = this.getChildData(data, countInRow);
  return(
   <div>
      <Grid container spacing={3}>
       <Grid item  xs={3} spacing={3}>
{card}
       </Grid>
    </Grid>
    </div>
  );
  }
}