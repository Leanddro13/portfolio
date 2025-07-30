import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";

const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    Height: "100vh",
    display: "flex",
    alignItems: "center"
}));

const StyledImg = styled("img")(() => ({
    width: "80%",
    maxwidth: 300,
    borderRadius: "50%",
    display: "block",
    margin: "0 auto"

}));

const Hero = () => {
    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2} alignItems="center">
                    <Grid item size = {{ xs: 12, md: 5}}>
                        <StyledImg src={Avatar} alt="Avatar"/>
                    </Grid>
                    <Grid item size = {{ xs: 12, md: 7}}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center">Leandro Silva</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">Software Engineer</Typography>

                        <Grid container display="flex" justifyContent="center" spacing={3}>
                            <Grid item size = {{ xs: 12, md: 4}} display="flex" justifyContent="center">
                                <StyledButton>
                                    <DownloadIcon/> <Typography>Download CV</Typography>
                                </ StyledButton>
                            </Grid>
                            <Grid item size = {{ xs: 12, md: 4}} display="flex" justifyContent="center">
                                <StyledButton> 
                                    <EmailIcon/> <Typography>Contact me</Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>

    );
};

export default Hero