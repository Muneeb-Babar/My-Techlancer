import React from "react";
import CardPage from "../Components/CardsPage/CardsPage";
import Seo from "../assets/images/stacks/seo/seo.avif";
import OnPageSeo from "../assets/images/stacks/seo/onpage.jpg";
import OffPageSeo from "../assets/images/stacks/seo/offpage.jpg";

const SeoOptimization = () => {
  const Comp1 = {
    img1: Seo,
    heading1: "SEO Optimization",
    para1: `Search Engine Optimization (SEO) is the practice of optimizing websites and content to improve their visibility 
            on search engine results pages (SERPs). By using a combination of technical, on-page, and off-page strategies, 
            businesses can increase their chances of ranking higher on search engines like Google, thereby attracting 
            more organic traffic. SEO involves understanding search engine algorithms, targeting relevant keywords, 
            enhancing website structure, and creating high-quality content that satisfies both users and search engines. 
            As search engines continuously evolve, staying up-to-date with SEO best practices is essential for maintaining 
            online visibility and driving long-term growth for businesses in the digital landscape.` 
};

const Comp2 = {
    img2: OnPageSeo,
    heading2: "On-Page SEO",
    para2: `On-Page SEO focuses on optimizing individual web pages to improve their search engine rankings. This includes 
            factors like keyword optimization, meta tags, headers, internal linking, and content quality. It also involves 
            improving user experience by ensuring faster page load times, mobile responsiveness, and clear navigation. 
            On-Page SEO allows search engines to understand the relevance and context of the content, helping it rank for 
            the right queries. Effective use of on-page SEO practices can significantly enhance a website's ability to 
            attract and engage users, leading to higher conversions and more relevant traffic.` 
};

const Comp3 = {
    img3: OffPageSeo,
    heading3: "Off-Page SEO",
    para3: `Off-Page SEO refers to actions taken outside of a website to improve its authority, trustworthiness, and search 
            engine rankings. The most common tactic is link building, where external websites link back to your content, 
            signaling to search engines that your site is credible and valuable. Off-page SEO also includes social media 
            engagement, influencer outreach, guest blogging, and online reputation management. These techniques contribute 
            to improving a site's authority and search engine performance over time, as they build a network of external 
            signals that help increase visibility and rankings for targeted keywords.` 
};

  return (
    <CardPage
      Comp1={Comp1}
      Comp2={Comp2}
      Comp3={Comp3}
      pageName={"Digital Marketing"}
    />
  );
};

export default SeoOptimization;
