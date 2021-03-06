import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; //1


const Login = (props) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h1>Login</h1>
            <Form>
                <FormGroup>
                    <Label htmlFor='username'>Username</Label>
                    <Input name='username' value={username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input name='password' value={password} />
                </FormGroup>
            </Form>
        </div>
    )
}

export default Login;