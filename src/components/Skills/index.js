import Header from "../Header/header"
import Skills from "./skill"
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
                    <Skills/>
                    <Contact/>
                </main>
            <Footer/>
        </>
    )
}