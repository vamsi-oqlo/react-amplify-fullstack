
import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  // Flex,
  Heading,
  // Text,
  // TextField,
  View,
  withAuthenticator,
  Image,
  Card,
} from "@aws-amplify/ui-react";

import logo from "./logo.svg"

const App = ({signOut}) => {
  return (
   <View className="App">
    <Card>
      <Image src={logo} alt="logo" className="App-logo" style={{height:"500px",width:"500px"}}/>
      <Heading level={1}> we Have now Auth </Heading>
    </Card>
    <Button onClick={signOut}>signOut</Button>
   </View>
  )
}

export default withAuthenticator(App) 
