import Header from "./header"
import Footer from "./footer"
import Nikebar from "./nikebar"
import Signinform from "./signinform"

export default function SignIn(){
    return(
            <div>
                <Header/>
                <Nikebar/>
                <Signinform/>
                <Footer/>
            </div>
    )
}