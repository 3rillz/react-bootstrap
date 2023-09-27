/* eslint-disable @typescript-eslint/no-explicit-any */
import brand1 from "../../assets/images/google.png";
import brand2 from "../../assets/images/github.png";
import brand3 from "../../assets/images/slack.png";
import brand4 from "../../assets/images/skrill.png";
import brand5 from "../../assets/images/paypal.png";

export interface BrandI {
  name: string;
  logo: any;
}

export const brands: BrandI[] = [
  { name: "Google", logo: brand1 },
  { name: "Github", logo: brand2 },
  { name: "Slack", logo: brand3 },
  { name: "Skrill", logo: brand4 },
  { name: "Paypal", logo: brand5 },
];

export const brands2: BrandI[] = [
  { name: "Github", logo: brand2 },
  { name: "Slack", logo: brand3 },
  { name: "Skrill", logo: brand4 },
  { name: "Paypal", logo: brand5 },
  { name: "Google", logo: brand1 },
];

export const brands3: BrandI[] = [
  { name: "Slack", logo: brand3 },
  { name: "Skrill", logo: brand4 },
  { name: "Paypal", logo: brand5 },
  { name: "Google", logo: brand1 },
  { name: "Github", logo: brand2 },
];

export const brands4: BrandI[] = [
  { name: "Skrill", logo: brand4 },
  { name: "Paypal", logo: brand5 },
  { name: "Google", logo: brand1 },
  { name: "Github", logo: brand2 },
  { name: "Slack", logo: brand3 },
];
