import type { NextPage } from 'next';
import {signIn , useSession} from 'next-auth/react';

const Login: NextPage = () =>{
    const {data} = useSession();
    return(
    <div>
        <button onClick={() => signIn('google')}>Sign In</button>
    </div>
    )
}

export default Login;