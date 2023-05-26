import MissionCard from "@/components/MissionCard";
import { Box, } from '@mui/material';

const listingMission: React.FC = () => {

    return (
        <>
            <div>
                Explore: 72 Missions
            </div>
            <br/>
            <div>
            <Box
                className="center"
                component="form"
                sx={{
                    '& .MuiTextField-root': { width: '30ch' }
                    , border: '1px dashed grey'
                }}
                noValidate
            >
                <MissionCard />                
            </Box>
            </div>
        </>
    )
}

export default listingMission;