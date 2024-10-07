import React, { useEffect } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import BreadCumb from "../../Components/Common/BreadCumb";
import AOS from "aos";
import "aos/dist/aos.css";

const CardPage = ({ tectStacks, pageName, Comp1, Comp2, Comp3 }) => {
  const { img1, heading1, para1 } = Comp1;
  const { img2, heading2, para2 } = Comp2;
  const { img3, heading3, para3 } = Comp3;

  // Initialize AOS in useEffect
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Allows animation on both scroll down and up
      offset: 100, // Triggers animation earlier or later
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <BreadCumb Title={pageName}></BreadCumb>
      <Container style={{ marginTop: "100px" }}>
        <Grid container spacing={4} sx={{ my: 4 }}>
          {/* First Section */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "center",
                textAlign: { xs: "center", sm: "left" },
                width: "100%",
              }}
              data-aos="fade-up" // AOS animation on this section
            >
              <img
                src={img1}
                alt="Image 1"
                className="cardImg"
                data-aos="fade-right" // AOS animation for image
                loading="lazy"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "40%" },
                }}
                data-aos="fade-left" // AOS animation for text content
              >
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2rem",
                      md: "2.5rem",
                    },
                    paddingTop: "20px",
                  }}
                >
                  {heading1}
                </Typography>
                <Typography
                  style={{ textAlign: "justify" }}
                  variant="body1"
                  sx={{
                    mt: 2,
                    ml: { sm: 2 },
                    width: { xs: "100%", sm: "80%" },
                  }}
                >
                  {para1}
                </Typography>
              </div>
            </Box>
          </Grid>

          {/* Second Section */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row-reverse" },
                alignItems: "center",
                justifyContent: "space-around",
                textAlign: { xs: "center", sm: "left" },
                width: "100%",
              }}
              data-aos="fade-up"
            >
              <img
                src={img2}
                alt="Image 2"
                className="cardImg"
                data-aos="fade-left" // Animation on the second image
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "40%" },
                }}
                data-aos="fade-right" // Animation on the text content
              >
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2rem",
                      md: "2.5rem",
                    },
                    paddingTop: "20px",
                  }}
                >
                  {heading2}
                </Typography>
                <Typography
                  style={{ textAlign: "justify" }}
                  variant="body1"
                  sx={{
                    mt: 2,
                    ml: { sm: 2 },
                    width: { xs: "100%", sm: "80%" },
                  }}
                >
                  {para2}
                </Typography>
              </div>
            </Box>
          </Grid>

          {/* Third Section */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "center",
                textAlign: { xs: "center", sm: "left" },
                width: "100%",
              }}
              data-aos="fade-up"
            >
              <img
                src={img3}
                alt="Image 3"
                className="cardImg"
                data-aos="fade-right"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "40%" },
                }}
                data-aos="fade-left"
              >
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2rem",
                      md: "2.5rem",
                    },
                    paddingTop: "20px",
                  }}
                >
                  {heading3}
                </Typography>
                <Typography
                  style={{ textAlign: "justify" }}
                  variant="body1"
                  sx={{
                    mt: 2,
                    ml: { sm: 2 },
                    width: { xs: "100%", sm: "80%" },
                  }}
                >
                  {para3}
                </Typography>
              </div>
            </Box>
          </Grid>

          {/* Tech Stacks Section */}
          <Grid item xs={12}>
            {tectStacks && (
              <>
                <Box sx={{ textAlign: "center", mb: 4, mt: "50px" }}>
                  <Typography variant="h4" fontWeight="bold">
                    Building Blocks
                  </Typography>
                </Box>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  data-aos="fade-up"
                >
                  {tectStacks.map((tech) => (
                    <Grid
                      item
                      key={tech.name}
                      xs={4}
                      sm={2}
                      md={1}
                      sx={{ textAlign: "center" }}
                      data-aos="zoom-up"
                    >
                      <img
                        src={tech.src}
                        alt={tech.name}
                        style={{ width: "50px", margin: "10px" }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CardPage;
