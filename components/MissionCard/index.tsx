import { IMissionCardProps } from './missionCard.module';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImageModal from '../ImageModal';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const MissionCard: React.FC<IMissionCardProps> = () => {

    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <ImageModal
                        imagePath="/login.png" fill={false} height={300} width={300} />
                    </Typography>
                    <Typography variant="h5" component="div">
                        Grow Trees - On the Path to Enivironment Stability
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Lorem epsum dolor Sit amet, cortsectetur elit,
                        sed do eusmod tempor Incidldunt ut labore..
                    </Typography>
                    <Typography variant="body2">
                        Tree, Canada.
                        {'5 Stars'}
                    </Typography>
                    <Typography variant="body2">
                        Start Date until End Date.
                        <hr />
                        {'Seats Left'}
                        <br />
                        {'Dealines'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default MissionCard;