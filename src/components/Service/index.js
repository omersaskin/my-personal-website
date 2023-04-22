import Header from "../Header/header"
import ServiceList from "./service"
import Contact from "../Contact/contact"
import Footer from "../Footer/footer"

/*--------------------
* Building Krinky
----------------------*/
export default function Service() {
    return (
        <>
            <Header/>
                <main className="wrapper">
                    <ServiceList/>
                    <Contact/>
                </main>
            <Footer/>
        </>
    )
}