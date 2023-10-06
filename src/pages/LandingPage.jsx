import Intro from "../component/intro";
import MyNavbar from "../component/navbar";
import'../App.css'
import ListFilm from "../component/ListFilm";



function LandingPage() {
    return ( 
        <>
        <div className="MyBg">
            <MyNavbar/>
            <Intro/>
        </div>
        <div className="Mybgfilm">
            <ListFilm/>

        </div>
        </>
     );
}

export default LandingPage;