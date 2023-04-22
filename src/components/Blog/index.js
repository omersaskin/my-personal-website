import Header from "../Header/header"
import Blog from "./blog"
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
                    <Blog/>
                    <Contact/>
                </main>
            <Footer/>
        </>
    )
}