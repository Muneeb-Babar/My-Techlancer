import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import BreadCumb from "../../Components/Common/BreadCumb";

const CardPage = ({ tectStacks, pageName, Comp1, Comp2, Comp3 }) => {
  const { img1, heading1, para1 } = Comp1;
  const { img2, heading2, para2 } = Comp2;
  const { img3, heading3, para3 } = Comp3;

  return (
    <>
      <BreadCumb Title={pageName}></BreadCumb>
      <Container style={{ marginTop: "100px" }}>
        <Grid container spacing={4} sx={{ my: 4 }}>
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
            >

                <img
                  src={img1}
                  alt="Image 1"
                  // style={{ width: "40%", height: "auto", borderRadius: "8px" }} 
                  className="cardImg"
                />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "40%" },
                }}
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
            >
              <img
                src={img2}
                alt="Image 2"
                className="cardImg"
                />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "40%" },
                }}
              >
                <Typography variant="h3" fontWeight="bold"  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2rem",
                      md: "2.5rem",
                    },
                    paddingTop: "20px",
                  }}>
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
            >
              <img
                src={img3}
                alt="Image 1"
                className="cardImg"
                />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "40%" },
                }}
              >
                <Typography variant="h3" fontWeight="bold"  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2rem",
                      md: "2.5rem",
                    },
                    paddingTop: "20px",
                  }}>
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

          {/* <Grid item xs={12}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" fontWeight="bold">Stacks</Typography>
          </Box>          <Grid container spacing={4}>
            {techStacks.map((tech) => (
              <Grid item xs={12} sm={4} key={tech.title}>
                <Card sx={{ maxWidth: 345, margin: "auto" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={tech.image}
                    alt={tech.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {tech.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tech.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid> */}

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
                >
                  {tectStacks.map((tech) => (
                    <Grid
                      item
                      key={tech.name}
                      xs={4}
                      sm={2}
                      md={1}
                      sx={{ textAlign: "center" }}
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
