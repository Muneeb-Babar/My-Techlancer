import React from "react";
import CardPage from "../Components/CardsPage/CardsPage";
import Seo from "../assets/images/stacks/digital-marketing/seo.png";
import Analysis from "../assets/images/stacks/digital-marketing/analysis.png";
import Email from "../assets/images/stacks/digital-marketing/email.png";
import Hubspot from "../assets/images/stacks/digital-marketing/hubspot.png";
import Affiliate from "../assets/images/stacks/digital-marketing/affiliate-marketing.png";
import Digital from "../assets/images/stacks/digital-marketing/digital.avif";
import AffiliateMarketing from "../assets/images/stacks/digital-marketing/affiliate.avif";
import EmailMarketing from "../assets/images/stacks/digital-marketing/email.avif";

const digitalMarketing = () => {
  const techStacks = [
    { name: "SEO", src: Seo },
    { name: "Analysis", src: Analysis },
    { name: "Emal", src: Email },
    { name: "Affiliate", src: Affiliate },
    { name: "HubSpot", src: Hubspot },
  ];

  const Comp1 = {
    img1: Digital,
    heading1: "Digital Marketing",
    para1: `Digital marketing refers to the strategic use of digital channels, platforms, and technologies to promote products, services, or brands to a targeted audience. It encompasses a vast array of online marketing strategies and tactics aimed at engaging potential customers, generating leads, and driving conversions. By leveraging the power of the internet and digital tools, businesses can connect with their audience where they spend much of their time—online. Digital marketing has become an essential aspect of modern business operations due to its ability to reach a global audience with precision and efficiency.`,
  };

  const Comp2 = {
    img2: AffiliateMarketing,
    heading2: "Affiliate Marketing",
    para2: `Affiliate marketing is a strategic, performance-based marketing model where businesses collaborate with external partners, known as affiliates, to promote their products or services. These affiliates can include influencers, bloggers, websites, or even specialized affiliate marketers who have established audiences and platforms. The primary goal of affiliate marketing is to leverage the affiliate’s reach to expand the business’s visibility, generate leads, and ultimately drive sales. Affiliates earn a commission based on the sales or conversions they help generate, making it a cost-effective, results-driven model.`,
  };

  const Comp3 = {
    img3: EmailMarketing,
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

export default digitalMarketing;
