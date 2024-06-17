import { Container, Box, Stack } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import HeroSlider from "../components/HeroSlider/HeroSlider";

const Home = () => {
    return (
    <Box>
        <Box sx={{background:"linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)"}} mb={4}>
            <NavBar />

            <Container maxWidth="xl">
                <HeroSlider />
                
            </Container>

        </Box>

    </Box>
    )
}

export default Home;