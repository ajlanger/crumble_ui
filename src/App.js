/* src/App.js */
// import React, { useEffect, useState } from 'react'
// import Amplify, { API, graphqlOperation } from 'aws-amplify'
import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react'
// import { createUserinfo } from './graphql/mutations'
// import { listUserinfos } from './graphql/queries'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

// const initialState = { username: '', email: '', krakenusername: '', krakenapikey: '' }

const App = () => {
  return (
    <div style={styles.container}>
      <h2>An amazing app will be developed right here.</h2>
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

export default withAuthenticator(App)