import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';


const Footer = () => {
    const styles = {
        placement: {
            position: 'fixed',
            bottom: 0,
            width: '100%'
        },
        bgDarkCustom: {
            backgroundColor: '#212529',
            boxShadow: 'none'
        },
    }

    return (
        <MDBFooter className='text-center text-white' style={{ ...styles.placement, ...styles.bgDarkCustom }}>
            <MDBContainer className='p-1 pb-0'>
                <section className='mb-1 mt-2'>
                    <MDBBtn outline size="lg" color="light" floating className='mx-3' href='mailto:nicholasmorris2599@gmail.com' role='button' title="Gmail">
                        <MDBIcon fab icon='google' size="lg" />
                    </MDBBtn>
                    <MDBBtn outline size="lg" color="light" floating className='mx-3' href='https://www.linkedin.com/in/nick-morris-morralytics/' target="blank" role='button' title="LinkedIn">
                        <MDBIcon fab icon='linkedin-in' size="lg" />
                    </MDBBtn>
                    <MDBBtn outline size="lg" color="light" floating className='mx-3' href='https://github.com/Morralytics' target="blank" role='button' title="GitHub">
                        <MDBIcon fab icon='github' size="lg" />
                    </MDBBtn>
                </section>
            </MDBContainer>
            <MDBContainer className='p-1 pb-0'>
                <section className='mb-3 mt-2'>
                    <a href="" title="JavaScript">
                        <MDBIcon className='p-2 hoverText' fab href='#' icon="js-square" size="3x" color="white" />
                    </a>
                    <a href="" title="HTML5">
                        <MDBIcon className='p-2' fab icon="html5" size="3x" color="white"/>
                    </a>
                    <a href="" title="CSS3">
                        <MDBIcon className='p-2' fab icon="css3-alt" size="3x" color="white" />
                    </a>
                    <a href="" title="Figma">
                        <MDBIcon className='p-2' fab icon="figma" size="3x" color="white" />
                    </a>
                    <a href="" title="Python">
                        <MDBIcon className='p-2' fab icon="python" size="3x" color="white" />
                    </a>
                    <a href="" title="React.js">
                        <MDBIcon className='p-2' fab icon="react" size="3x" color="white" />
                    </a>
                    <a href="" title="Node.js">
                        <MDBIcon className='p-2' fab icon="node" size="3x" color="white" />
                    </a>
                    <a href="" title="SQL">
                        <MDBIcon className='p-2' fas icon="database" size="3x" color="white" />
                    </a>
                    <a href="" title="AWS">
                        <MDBIcon className='p-2' fab icon="aws" size="3x" color="white" />
                    </a>
                </section>
            </MDBContainer>
        </MDBFooter>
    );
}

export default Footer;