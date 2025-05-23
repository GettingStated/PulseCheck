import { Container } from "@mui/material"
import React from "react"
import UserLogin from "@/components/auth/UserLogin"
import useRedirectIfAuthenticated from "@/lib/hooks/useRedirectIfAuthenticated"
// import { useAuthContext } from "@/lib/hooks"
// import { useNavigate } from "react-router-dom"
//import SignInWGoogleButton from "@/components/auth/ContinueWGoogleButton"

export default function Login() {
  useRedirectIfAuthenticated()
  // const auth = useAuthContext()
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (auth.user && !auth.user.isAnonymous && !auth.loading) {
  //     void navigate("/dashboard")
  //   }
  // }, [auth, navigate])

  return (
    <React.Fragment>
      <Container maxWidth='sm'>
        {/* <Typography> Login Page Goes Here </Typography> */}
        {/* <SignInWGoogleButton /> */}
        <UserLogin />
      </Container>
    </React.Fragment>
  )
}
