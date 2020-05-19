import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export class CardItem  extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title={this.props.title}
                    subheader={this.props.address}
                />
                <CardMedia
                    image="bbq.jpg"
                    title="bbq"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Buy Now
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}
