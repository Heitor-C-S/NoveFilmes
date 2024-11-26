import { Container } from "@radix-ui/themes";
import NavBar from "../components/NavBar/NavBar";
import Middle from "../components/home/Middle";
import Footer from "../components/Footer/Footer";

export default function Page(){
    return(
        <div >
            <Container>
                <NavBar />
                <Middle />
                <Footer />
            </Container>
        </div>
    );
}

