import React from "react";
import CardPage from "../Components/CardsPage/CardsPage";
import Seo from "../assets/images/stacks/web/seo.png";
import Analysis from "../assets/images/stacks/web/analysis.png";
import Email from "../assets/images/stacks/web/email.png";
import Hubspot from "../assets/images/stacks/web/hubspot.png";
import Affiliate from "../assets/images/stacks/web/affiliate-marketing.png";

const AppDevelopment = () => {
  const techStacks = [
    { name: "SEO", src: Seo },
    { name: "Analysis", src: Analysis },
    { name: "Emal", src: Email },
    { name: "Affiliate", src: Affiliate },
    { name: "HubSpot", src: Hubspot },
  ];

  const Comp1 = {
    img1: "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063134.jpg?t=st=1726766185~exp=1726769785~hmac=66b1f58baef42cef8324273e625b06f61a995220eb1cc53e2a2128842d65d333&w=900",
    heading1: "Digital Marketing",
    para1: `Digital marketing refers to the strategic use of digital channels, platforms, and technologies to promote products, services, or brands to a targeted audience. It encompasses a vast array of online marketing strategies and tactics aimed at engaging potential customers, generating leads, and driving conversions. By leveraging the power of the internet and digital tools, businesses can connect with their audience where they spend much of their time—online. Digital marketing has become an essential aspect of modern business operations due to its ability to reach a global audience with precision and efficiency.`,
  };

  const Comp2 = {
    img2: "https://img.freepik.com/premium-photo/affiliate-marketing-milestones-concept-business-concept-text_384948-9984.jpg?w=900",
    heading2: "Affiliate Marketing",
    para2: `Affiliate marketing is a strategic, performance-based marketing model where businesses collaborate with external partners, known as affiliates, to promote their products or services. These affiliates can include influencers, bloggers, websites, or even specialized affiliate marketers who have established audiences and platforms. The primary goal of affiliate marketing is to leverage the affiliate’s reach to expand the business’s visibility, generate leads, and ultimately drive sales. Affiliates earn a commission based on the sales or conversions they help generate, making it a cost-effective, results-driven model.`,
  };

  const Comp3 = {
    img3: "https://img.freepik.com/free-photo/e-mail-global-communications-connection-social-networking-concept_53876-123795.jpg?t=st=1726766426~exp=1726770026~hmac=650ba77802948b61f4e9b2c2a2fa8f43c60336adc4b6082ab6bd6da84b028838&w=900",
    heading3: "Email Marketing",
    para3: `Email marketing remains one of the most powerful and cost-effective forms of direct communication with customers. It enables businesses to connect with their audience on a personal level, delivering tailored messages straight to their inboxes. Through personalized and targeted email campaigns, businesses can build stronger relationships with both potential and existing customers, ensuring that they stay engaged with the brand over time.`,
  };
  return (
    <CardPage
      tectStacks={techStacks}
      Comp1={Comp1}
      Comp2={Comp2}
      Comp3={Comp3}
      pageName={"Digital Marketing"}
    />
  );
};

export default AppDevelopment;
