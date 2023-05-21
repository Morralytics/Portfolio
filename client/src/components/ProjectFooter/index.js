import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

const ProjectFooter = () => {
    const styles = {
        placement: {
            position: 'fixed',
            bottom: 0,
            width: '100%',
            left: '0'
        },
        bgDarkCustom: {
            backgroundColor: '#212529',
            boxShadow: 'none'
        },
    }
    return (
        <MDBFooter className='text-center text-white' style={{ ...styles.placement, ...styles.bgDarkCustom }}>
            <MDBContainer className='p-1 pb-0'>
                <section className='mb-5 mt-2'>
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
        </MDBFooter>
    )
}

export default ProjectFooter;