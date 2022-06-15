import React from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SigninElements';

const SignIn = () => {
    return (
        <>
         <Container>
             <FormWrap>
                 <Icon to="/">Kid Coding</Icon>
                 <FormContent>
                     <Form action="#">
                         <FormH1>Se connecter à votre compte</FormH1>
                         <FormLabel htmlFor="for">Email</FormLabel>
                         <FormInput type="email" required />
                         <FormLabel htmlFor="for"> Password</FormLabel>
                         <FormInput type="password" required />
                         <FormButton type="submit">Valider</FormButton>
                         <Text>Mot de passe oublié</Text>
                     </Form>
                 </FormContent>
             </FormWrap>
         </Container>   
        </>
    );
};

export default SignIn;