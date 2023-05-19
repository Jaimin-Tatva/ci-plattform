import Link from 'next/link';
import { ISignInProps } from './signIn.module';
import { Box, Button, TextField } from '@mui/material';

const ForgotPasswordModal: React.FC<ISignInProps> = () => {

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
                <div style={{ paddingTop: "2ch", fontStyle: 'bold', fontSize: "1.5em", textAlign: 'center' }}>
                    Forgot Password
                </div>
                <div style={{ paddingTop: "2ch", fontSize: "0.85em", textAlign: 'center' }}>
                    Enter your email address you've using for your account below and we will send you a password reset link
                </div>
                <div>
                    <TextField
                        label="Email Address"
                        id="email"
                        placeholder="evan.donbough@gmail.com"
                    />
                </div>
                <div style={{ paddingTop: "2ch" }}>
                    <Button variant="outlined" color='error' style={{ borderRadius: "20px", minWidth: "40ch" }}>Reset my Password</Button>
                </div>
                <div style={{ paddingTop: "2ch", fontSize: "0.85em", textAlign: 'center' }}>
                    <Link href="/login">
                        Login
                    </Link>
                </div>
            </Box>
        </>
    )
}

export default ForgotPasswordModal;