import { Container, Box, Stack } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
    return (
    <Box>
        <Box sx={{background:"linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)"}} mb={4}>
            <NavBar />
        </Box>
    </Box>
    )
}

export default Home;