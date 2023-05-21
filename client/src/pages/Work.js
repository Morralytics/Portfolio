import { Container } from "react-bootstrap";
import ProjectList from "../components/ProjectList";

import { QUERY_PROJECTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

export const Work = () => {
  const styles = {
    background: {
      backgroundColor: "#212529",
      height: "100vh",
    },
    alignment: {
      fontSize: "20px"
    },
    card: {
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "5%",
    },
    cardPanel: {
      borderRadius: '5px'
    },
    linkLogo: {
      color: "#1E3050",
      paddingRight: "5px",
    },
    footer: {
      display: 'flex',
      justifyContent: 'center',
    },
    containerStyle: {
      border: '2px groove',
      borderRadius: '10px',
      padding: '10px',
      boxShadow: '3px 3px 12px 8px #d8b65c'
    },
    caption: {
      marginBottom: '160px',
    },
    captionAdjust: {
      marginBottom: '140px',
    },
    captionAdjustTwo: {
      marginBottom: '110px'
    }
  };

  const { data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

  return (
    <div style={styles.background}>
      <Container>
          <ProjectList
            projects={projects}
          />
      </Container>
    </div>
  );
};
