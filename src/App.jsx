/* src/App.js */
// import React, { useEffect, useState } from 'react'
// import Amplify, { API, graphqlOperation } from 'aws-amplify'
// eslint-disable-next-line
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
// eslint-disable-next-line
import { withAuthenticator, AmplifySignOut, AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
// import { createUserinfo } from './graphql/mutations'
// import { listUserinfos } from './graphql/queries'
import {Paper} from '@material-ui/core';

import awsExports from "./aws-exports";
import { listUserinfos } from './graphql/queries';
import { useEffect, useState } from 'react';
Amplify.configure(awsExports);

const App = () => {
  // eslint-disable-next-line
  const [userKrakenData, setUsers] = useState([]);
  // eslint-disable-next-line
  const [userdata, setUserData] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []); // add empty array to prevent infinite loop and saying that it should only be used once

  // Each time the below function is called, it will fetch user data and put it in the users state
  const fetchUsers = async () => {
        try {
            const UserInfo = await API.graphql(graphqlOperation(listUserinfos));
            const userList = UserInfo.data.listUserinfos.items;
            console.log('user list', userList);
            setUsers(userList) //is going to update the state
        } catch (error) {
            console.log('error on fetching user data', error);
        }
  };

  useEffect(() => {
    getCurrentUser();
  }, []); // add empty array to prevent infinite loop and saying that it should only be used once

  const getCurrentUser = async () => {
    try {
      const { attributes } = await Auth.currentAuthenticatedUser();
      console.log('Current user attributes', attributes);
      setUserData(attributes)
    } catch (error) {
      console.log('Error while trying to get current user data', error);
    }
  };
  
  return (
    <div style={styles.container}>
      <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "email",
            label: "E-mail",
            placeholder: "Your email",
            required: true,
          },
          {
            type: "password",
            label: "Password",
            placeholder: "Your password",
            required: true,
          },
        ]} 
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
      
      <h1>Your Kraken information</h1>

      <div className="krakeninfo">
        <Paper>
          <input
          placeholder="Your kraken API Key"
          />
        </Paper>
      </div>
      <AmplifySignOut />
      
    </AmplifyAuthenticator>
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App; //Render the App component only when user is logged in.