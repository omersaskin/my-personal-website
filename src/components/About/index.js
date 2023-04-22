import Header from "../Header/header"
import About from "./about"
import Contact from "../Contact/contact"
import Footer from "../Footer/footer"

/*--------------------
* Building Krinky
----------------------*/
export default function Example() {
    return (
        <>
            <Header/>
                <main className="wrapper">
                    <About/>
                    <Contact/>
                </main>
            <Footer/>
        </>
    )
}