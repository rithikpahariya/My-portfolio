import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@rithikpahariya",
    icon: Icons.gitHub,
    link: "https://github.com/rithikpahariya",
  },
  {
    name: "LinkedIn",
    username: "Rithik Pahariya",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/rithik-pahariya-725a5b1bb",
  },
  // {
  //   name: "Twitter",
  //   username: "@rithikpahariya",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/rithikpahariya",
  // },
  {
    name: "Gmail",
    username: "rithik.pahariya1999",
    icon: Icons.gmail,
    link: "mailto:rithik.pahariya1999@gmail.com",
  },
];
