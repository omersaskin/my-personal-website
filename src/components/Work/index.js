import Header from "../Header/header"
import Works from "./work"
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
                    <Works/>
                    <Contact/>
                </main>
            <Footer/>
        </>
    )
}