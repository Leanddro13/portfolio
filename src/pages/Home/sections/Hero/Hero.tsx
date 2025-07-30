import { Box, Button, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    minHeight: "100vh",
    //paddingTop: theme.spacing(8),
    //paddingBottom: theme.spacing(8),
    display: "flex",
    alignItems: "center",
}));

const StyledImg = styled("img")(() => ({
    width: "100%",
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
                    <Grid item size = {{ xs: 12, md: 4}}>
                        <StyledImg src={Avatar} alt="Avatar"/>
                    </Grid>
                    <Grid item size = {{ xs: 12, md: 8}}>
                        <Typography color="primary" variant="h1" textAlign="center">Leandro Silva</Typography>
                        <Typography color="primary" variant="h2" textAlign="center">Software Engineer</Typography>

                        <Grid container display="flex" justifyContent="center">
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <Button> <DownloadIcon/> Download CV</Button>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <Button> <EmailIcon/> Contact me</Button>
                            </Grid>
                        </Grid>

                        

                    </Grid>
                </Grid>
            </Container>
        </StyledHero>

    );
};

export default Hero