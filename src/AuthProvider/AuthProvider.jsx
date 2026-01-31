import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../__firebase__auth';


// eslint-disable-next-line react-refresh/only-export-components
export  const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

  

    useEffect(()=>{
     const unSubscribe =    onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
          })
          return ()=>{
            unSubscribe()
          }

    },[])

    const register =(email,password)=>{
        setLoading(true) 
           return createUserWithEmailAndPassword(auth,email,password)
           
    }

    const login =(email,password)=>{
        setLoading(true) 
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout =()=>{
        setLoading(true) 
        return signOut(auth)
    }


    const profile =(name,photoUrl)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoUrl,
        })
    }

    const authInfo = { 

        register,
        profile,
        login,
        user,
        logout,
        loading,
        

    }
  return (
    <AuthContext.Provider value={authInfo}>

{children}

    </AuthContext.Provider>
  )
}

export default AuthProvider