import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const CardFooter = () => {
    const styles= {
        linkLogo: {
          color: '#1E3050',
          height: '40px'
        }
      }
    return (
        <>
            <div>
            <a href="https://github.com/Morralytics/Yoda-Translator" target="_blank"><FontAwesomeIcon icon={faSquareGithub} style={styles.linkLogo}/></a>
            </div>
        </>
    )
}

export default CardFooter;