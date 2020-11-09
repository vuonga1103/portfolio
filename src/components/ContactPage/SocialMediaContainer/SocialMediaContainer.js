import React from "react";
import socialMediaData from "./socialMediaData";
import githubIcon from "./icons/github.png";
import resumeIcon from "./icons/resume.png";
import linkedinIcon from "./icons/linkedin.png";
import mediumIcon from "./icons/medium.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  iconImg: {
    width: 100,
    "@media (max-width: 799px)": {
      width: 80,
    },
  },
  socialMediaContainer: {
    display: "flex",
    justifyContent: "space-between",
    minWidth: 500,
    "@media (max-width: 799px)": {
      minWidth: 300,
    },
  },
});
export default function SocialMediaContainer() {
  const { iconImg, socialMediaContainer } = useStyles();

  const displaySocialMedia = () => {
    return socialMediaData.map(({ name, url }) => {
      let icon;

      switch (name) {
        case "resume":
          icon = resumeIcon;
          break;
        case "github":
          icon = githubIcon;
          break;
        case "medium":
          icon = mediumIcon;
          break;
        case "linkedin":
          icon = linkedinIcon;
          break;
        default:
          break;
      }

      return (
        <a href={url} target="_blank" key={name}>
          <img className={iconImg} src={icon} alt={`${name} icon`} />
        </a>
      );
    });
  };

  return <div className={socialMediaContainer}>{displaySocialMedia()}</div>;
}
