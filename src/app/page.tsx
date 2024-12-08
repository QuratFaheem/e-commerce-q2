
import Header from "./components/header";
import Heropage from "./components/heropage";
import Footer from "./components/footer";
import Nikebar from "./components/nikebar";
import Hellobar from "./components/Hellobar";
import FirstLook from "./components/FirstLook";
import Flightbar from "./components/Flightbar";

export default function Home() {
  return (
    <div>
          <Header />
        <Nikebar/>
        <Hellobar/>
        <FirstLook/>
        <Heropage />
        <Flightbar />
        <Footer />
    </div>
  );
}
