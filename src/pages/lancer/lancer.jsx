import Banner from "../../componentes/banner/banner"
import CarDescription from "../../componentes/cardescription/CarDescription"
import Carousel from "../../componentes/carousel/carousel"
import Footer from "../../componentes/footer/footer"
import Navbar from "../../componentes/navbar/Navbar"



export default function Lancer() {

    return(
        <>
            <Navbar/>
            <Banner/>
            <CarDescription/>
            <Carousel/>
            <Footer/>
        </>
    )

}