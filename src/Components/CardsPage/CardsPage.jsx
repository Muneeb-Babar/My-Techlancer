import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

// import Html from "../../assets/images/stacks/web/html.png";
// import CSS from "../../assets/images/stacks/web/css.png";
// import AWS from "../../assets/images/stacks/web/aws.png";
// import Mongo from "../../assets/images/stacks/web/mongo.png";
// import JS from "../../assets/images/stacks/web/js.png";
// import ReactIcon from "../../assets/images/stacks/web/react.png";
// import Vue from "../../assets/images/stacks/web/vue.png";
// import Node from "../../assets/images/stacks/web/node-js.png";
// import Docker from "../../assets/images/stacks/web/docker.png";
import BreadCumb from "../../Components/Common/BreadCumb";

// const techStacks = [
//   {
//     title: "HTML",
//     description: "The backbone of web pages, used to structure content.",
//     image:
//       "https://img.freepik.com/premium-photo/persons-hands-typing-keyboard-with-holographic-interface-projecting-html5-coding-elements_1272475-1001.jpg?w=740",
//   },
//   {
//     title: "CSS",
//     description:
//       "Used to style and layout web pages, including design, colors, and fonts.",
//     image:
//       "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?t=st=1726762300~exp=1726765900~hmac=d7556c1be0e246c464a8325a39acb0ff4ad14ef7e44a1107e514a5713f142458&w=900",
//   },
//   {
//     title: "JavaScript",
//     description: "Adds interactivity and dynamic features to web pages.",
//     image:
//       "https://img.freepik.com/premium-photo/modern-laptop-displaying-computer-code-screen-neon-light_207634-16455.jpg?w=1060",
//   },
//   {
//     title: "React",
//     description:
//       "A JavaScript library for building user interfaces, particularly single-page applications.",
//     image:
//       "https://img.freepik.com/premium-photo/react-js-programming-language-with-laptop-code-script-screen_1020200-5402.jpg?w=1060",
//   },
//   {
//     title: "Angular",
//     description:
//       "A TypeScript-based open-source framework for building web applications.",
//     image:
//       "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010119.jpg?t=st=1726762063~exp=1726765663~hmac=457409bfa6da5d27e80b6f009fbfdda213e094862c0a7000fe7b8ad15c469cc2&w=900",
//   },
//   {
//     title: "Vue.js",
//     description:
//       "A progressive JavaScript framework used for building user interfaces.",
//     image:
//       "https://img.freepik.com/premium-photo/blue-led-light-with-blue-led-light-it_14117-143676.jpg?w=1060",
//   },
// ];

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
                style={{ maxWidth: "40%", height: "auto", borderRadius: "8px" }}
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
                <Typography variant="h3" fontWeight="bold" >
                  {heading1}
                </Typography>
                <Typography
                style={{textAlign:'justify'}}
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
                style={{ maxWidth: "40%", height: "auto", borderRadius: "8px" }}
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
                <Typography variant="h3" fontWeight="bold">
                  {heading2}
                </Typography>
                <Typography
                style={{textAlign:'justify'}}
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
                style={{ maxWidth: "40%", height: "auto", borderRadius: "8px" }}
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
                <Typography variant="h3" fontWeight="bold">
                  {heading3}
                </Typography>
                <Typography
                style={{textAlign:'justify'}}
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
