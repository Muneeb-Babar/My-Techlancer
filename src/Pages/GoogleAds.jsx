import React from "react";
import CardPage from "../Components/CardsPage/CardsPage";
import GoogleAds from "../assets/images/googleads.jpg";
import Target from "../assets/images/googletarget.jpg";
import PPC from "../assets/images/ppc.png";

const digitalMarketing = () => {
  const Comp1 = {
    img1: GoogleAds,
    heading1: "Google Ads",
    para1: `Google Ads helps businesses maximize their online visibility by displaying ads on Google's search engine and its vast network of partner sites. With billions of searches conducted on Google daily, running ads ensures that businesses reach a large and diverse audience. By using relevant keywords and targeting options, companies can appear at the top of search results, gaining immediate exposure to potential customers actively searching for related products or services.`,
  };

  const Comp2 = {
    img2: Target,
    heading2: "Targeted Advertising",
    para2: `Google Ads offers precise targeting capabilities that allow businesses to reach the right audience at the right time. Advertisers can target based on factors like location, language, device, and even user behavior. This ensures that ads are shown to users who are most likely to engage, increasing the relevance and effectiveness of campaigns. Customizable targeting features make it possible to refine the audience over time, maximizing return on investment (ROI).`,
  };

  const Comp3 = {
    img3: PPC,
    heading3: "Pay-Per-Click (PPC)",
    para3: `Google Ads operates on a pay-per-click (PPC) model, meaning businesses only pay when someone clicks on their ad. This cost-effective approach ensures that advertising budgets are spent efficiently, targeting users who show genuine interest. By optimizing ad copy, bidding strategies, and landing pages, businesses can significantly boost conversions and achieve specific marketing goals, whether it's increasing website traffic, lead generation, or driving online sales.`,
  };
  return (
    <CardPage
      Comp1={Comp1}
      Comp2={Comp2}
      Comp3={Comp3}
      pageName={"Google Ads"}
    />
  );
};

export default digitalMarketing;
