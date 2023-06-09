import ImageModal from "@/components/ImageModal";
import SignInModal from "@/components/SignInModal";
import { Grid } from "@mui/material";

const Login: React.FC = () => {

    return (
        <>
            <div>
                <Grid container spacing={1} minHeight={720}>
                    <Grid item xs={8} style={{position: "relative"}}>
                        <ImageModal imagePath="/login.png" fill={true} height={undefined} width={undefined} />
                    </Grid>
                    <Grid item xs={4} className="verticle-center">
                        <SignInModal />
                        <p>Privacy Policy</p>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Login;