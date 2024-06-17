import { Container, Box, Stack } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import Services from "../components/Services/Services";
import Offers from "../components/Sections/Offers/Offers";
import Specialization from "../components/Sections/Specialization/Specialization";
import Specialists from "../components/Sections/Specialists/Specialists";
import PatientCarring from "../components/Sections/PatientCaring/PatientCaring";
import Blogs from "../components/Sections/Blogs/Blogs";
import OurFamilies from "../components/Sections/OurFamilies/OurFamilies";
import FAQs from "../components/Sections/FAQs/FAQs";

const Home = () => {
    return (
    <Box>
        <Box sx={{background:"linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)"}} mb={4}>
            <NavBar />

            <Container maxWidth="xl">
                <HeroSlider />
                <Stack
                    p={{ xs: 2.5, md: 8 }}
                    mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
                    position="relative"
                    zIndex={99}
                    bgcolor="#fff"
                    borderRadius="15px"
                    spacing={10}
                    boxShadow="0 0 12px rgba(0,0,0,0.1)"
                >
                    <SearchHospital />
                    <Services />
                </Stack>
            </Container>

        </Box>

        <Offers />
        <Specialization />
        <Specialists />
        <PatientCarring />
        <Blogs />
        <OurFamilies />
        <FAQs />
    </Box>
    )
}

export default Home;