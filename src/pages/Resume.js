import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdWork, MdSchool } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
}));

export default function Resume() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "tan", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid tomato" }}
          date="apr of 2020 - present"
          iconStyle={{ background: "tomato", color: "#fff" }}
          icon={<MdWork />}
        >
          <Typography variant="h4">Front-End Developer - full</Typography>
          <Typography variant="h6">Ivory It</Typography>
          <Typography variant="h6">Belo Horizonte</Typography>
          <Typography variant="subtitle2">
            Some concepts and technologies employed: React.JS, Hooks, Redux,
            Next.JS, Bootstrap, Material UI, UX , Graphql, React Native , Push
            Notification , Aws,
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "tan", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid tomato" }}
          date="aug of 2019 - apr of 2020 - 9 months"
          iconStyle={{ background: "tomato", color: "#fff" }}
          icon={<MdWork />}
        >
          <Typography variant="h4">Front-End Developer - junior</Typography>
          <Typography variant="h6">Group Software</Typography>
          <Typography variant="h6">Belo Horizonte</Typography>
          <Typography variant="subtitle2">
            Some concepts and technologies employed: React.JS, Hooks, Redux,
            Next.JS, Bootstrap, Material UI, UX
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "tan", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid tomato" }}
          date="jan of 2020 - 1 month"
          iconStyle={{ background: "tomato", color: "#fff" }}
          icon={<MdWork />}
        >
          <Typography variant="h4">Front-End Developer - freelancer</Typography>
          <Typography variant="h6">Recrutei</Typography>
          <Typography variant="h6">Uberlândia</Typography>
          <Typography variant="subtitle2">
            Some concepts and technologies employed: react, atlaskit, hooks,
            adobe xd
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "tan", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid tomato" }}
          date="sep of 2019 - aug of 2019 - 3 months"
          iconStyle={{ background: "tomato", color: "#fff" }}
          icon={<MdWork />}
        >
          <Typography variant="h4">Front-End Developer - freelancer</Typography>
          <Typography variant="h6">Anjoz</Typography>
          <Typography variant="h6">Belo Horizonte</Typography>
          <Typography variant="subtitle2">
            Some concepts and technologies employed: React.JS, Hooks, Redux,
            Material UI, UX;
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "tan", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid tomato" }}
          date="dec of 2018 - aug of 2019 - 9 months"
          iconStyle={{ background: "tomato", color: "#fff" }}
          icon={<MdWork />}
        >
          <Typography variant="h4">Front-End Developer - Trainee</Typography>
          <Typography variant="h6">Zup Innovation</Typography>
          <Typography variant="h6">Uberlândia</Typography>
          <Typography variant="subtitle2">
            Some concepts and technologies employed: React.JS, Bootstrap, UX,
            CSS
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "tan", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid tomato" }}
          date="nov of 2018 - dec of 2018 - 2 months"
          iconStyle={{ background: "tomato", color: "#fff" }}
          icon={<MdWork />}
        >
          <Typography variant="h4">Front-End Developer - internship</Typography>
          <Typography variant="h6">Zup Innovation</Typography>
          <Typography variant="h6">Uberlândia</Typography>
          <Typography variant="subtitle2">
            Some concepts and technologies employed: Angular 4, Asp.Net, Unit
            Testing using Jasmine and Karma, BDD with Selenium Webdriver and
            Specflow using .Net core, Requirements gathering, reverse
            engineering
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "tan", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid tomato" }}
          date="2019"
          iconStyle={{ background: "tomato", color: "#fff" }}
          icon={<MdSchool />}
        >
          <Typography variant="h4">Front-end developer training</Typography>
          <Typography variant="h6">Gama Academy</Typography>
          <Typography variant="h6">Belo Horizonte</Typography>
          <Typography variant="subtitle2">
            - CSS Flexbox - JavaScript - Node - API`s consumption - Data
            persistence - Webpack - TypeScript - React.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "tan", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid tomato" }}
          date="2017 - 2019"
          iconStyle={{ background: "tomato", color: "#fff" }}
          icon={<MdSchool />}
        >
          <Typography variant="h4">
            Technology in Systems Analysis and Development
          </Typography>
          <Typography variant="h6">
            Unopar - Northern University of Paraná
          </Typography>
          <Typography variant="h6">Betim</Typography>
          <Typography variant="subtitle2">
            Technology in technological graduation
          </Typography>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
}
