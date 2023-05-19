import ForgotPasswordModal from "@/components/ForgotPasswordModal";
import ImageModal from "@/components/ImageModal";
import SignInModal from "@/components/SignInModal";
import { Grid } from "@mui/material";

const forgotPassword: React.FC = () => {

    return (
        <>
            <div>
                <Grid container spacing={1} minHeight={720}>
                    <Grid item xs={8} style={{position: "relative"}}>
                        <ImageModal imagePath="/login.png" fill={true} height={undefined} width={undefined} />
                    </Grid>
                    <Grid item xs={4} className="verticle-center">
                        <ForgotPasswordModal />
                        <p>Privacy Policy</p>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default forgotPassword;