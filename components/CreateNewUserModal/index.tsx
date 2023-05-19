import { ISignInProps } from './signIn.module';
import { Box, Button, TextField } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CreateNewUserModal: React.FC<ISignInProps> = () => {
    const router = useRouter();

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
                        label="First Name"
                        id="firstName"
                        placeholder="eg: John"
                    />
                </div>
                <div>
                    <TextField
                        label="Last Name"
                        id="lastName"
                        placeholder="eg: Clover"
                    />
                </div>
                <div>
                    <TextField
                        label="Phone Number"
                        id="phoneNumber"
                        placeholder="eg: 778889441"
                    />
                </div>
                <div>
                    <TextField
                        label="Email Address"
                        id="emailAddress"
                        type="email"
                        placeholder="eg: abc@gmail.com"
                    />
                </div>
                <div>
                    <TextField
                        label="Password"
                        id="password"
                        type="password"
                    />
                </div>
                <div>
                    <TextField
                        label="Reset Password"
                        id="resetPassword"
                        type="password"
                    />
                </div>
                <div style={{ paddingTop: "2ch" }}>
                    <Button variant="outlined" color='error' style={{ borderRadius: "20px", minWidth: "40ch" }}>Register</Button>
                </div>
                <div style={{ paddingTop: "2ch", fontSize: "0.85em", textAlign: 'center' }} >
                    <Link href="/forgotPassword">
                        Lost your password?
                    </Link>
                </div>
                <div style={{ paddingTop: "2ch", fontSize: "0.85em", textAlign: 'center' }}>
                    Already Registered? <span style={{ color: "#2B64B1" }}>Login Now</span>
                </div>
            </Box>
        </>
    )
}

export default CreateNewUserModal;