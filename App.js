import React from 'react';
import { View, Text,  } from 'react-native'; 
import { styles } from './style';
import Navigator from './src/navigation';
import AuthContext from './src/Context';
const App = () => {
  return(
    <AuthContext.Provider>
      <Navigator/>
    </AuthContext.Provider>
    
  )
}
export default App;