import { Container } from "@radix-ui/themes";
import NavBar from "../components/NavBar/NavBar";
import HomeContent from "./homeContent";
import Footer from "../components/Footer/Footer";

export default function Page() {
  return (
    <div>
      <Container>
        <NavBar />
        <HomeContent />
        <Footer />
      </Container>
    </div>
  );
}
