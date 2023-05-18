import { ISignInProps } from './signIn.module';
import { Box, Button, TextField } from '@mui/material';

const SignInModal: React.FC<ISignInProps> = () => {

    return (
        <>
            <Box
                className="center"
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '40ch' },
                }}
                noValidate
            >
                <div>
                    <TextField
                        label="Email Address"
                        id="email"
                        placeholder="evan.donbough@gmail.com"
                    />
                </div>
                <div>
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </div>
                <div style={{ paddingTop: "2ch" }}>
                    <Button variant="outlined" color='error' style={{ borderRadius: "20px", minWidth: "40ch" }}>Login</Button>
                </div>
                <div style={{ paddingTop: "2ch", fontSize: "0.85em", textAlign: 'center' }}>
                    Lost your password?
                </div>
                <div style={{ paddingTop: "2ch", fontSize: "0.85em", textAlign: 'center' }}>
                    Dont have an account? <span style={{color: "#2B64B1"}}>Create an account</span>
                </div>
            </Box>
        </>
    )
}

export default SignInModal;