import React from "react";
import FeatureCard from "./FeatureCard";

import clinicIcon from "../assets/clinic.png";
import vegIcon from "../assets/veg.png";
import flagIcon from "../assets/made-in.png";
import gmoIcon from "../assets/gmo.png";
import noRiskIcon from "../assets/no-risk.png";
import shippingIcon from "../assets/shipping.png";

const FeaturesData = [
  {
    id: 1,
    title: "clinically studied",
    description:
      "All products that we offer have undergone lab and safety tests",
    icon: clinicIcon,
  },
  {
    id: 2,
    title: "Vegetarian Friendly",
    description:
      "We have a wide selection of vegetarian products to meet your needs",
    icon: vegIcon,
  },
  {
    id: 3,
    title: "Made in India",
    description:
      "Shop local and explore health products made right here in India",
    icon: flagIcon,
  },
  {
    id: 4,
    title: "Free shipping",
    description:
      "We deliver to your door with no shipping costs on your orders",
    icon: shippingIcon,
  },
  {
    id: 5,
    title: "No Risk",
    description:
      "We ensure that all products are safe and within their use-by date",
    icon: noRiskIcon,
  },
  {
    id: 6,
    title: "GMO free",
    description:
      "Natural, no modified products and derivatives for those who need it",
    icon: gmoIcon,
  },
];

function Features() {
  return (
    <div className="bg-secondary w-4/5 mx-auto rounded-[30px] md:rounded-[44px] grid xl:grid-cols-3 md:grid-cols-2 p-8 -mt-28">
      {FeaturesData.map((feature) => (
        <FeatureCard
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
}

export default Features;
