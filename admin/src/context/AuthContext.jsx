import React from 'react'

import { createContext } from 'react'

export const authDataContext = createContext()
function AuthContext({children}) {
    let serverUrl = "https://e-commerce-backend-icv1.onrender.com"

    let value = {
        serverUrl
    }
  return (
    <div>
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
      
    </div>
  )
}

export default AuthContext

// import { createContext, useState } from 'react';

// export const authDataContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [serverUrl] = useState('http://localhost:8000'); // your backend URL

//   return (
//     <authDataContext.Provider value={{ serverUrl }}>
//       {children}
//     </authDataContext.Provider>
//   );
// };

