import * as React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PetsIcon from '@mui/icons-material/Pets';
import { 
    Container, 
    SummaryWrapper,
    Summary,
    Details, 
    Paws, 
    Title
} from './accordion.styles';
export const Accordion = ({ title, points, information }) => (
    <Container>
        <SummaryWrapper expandIcon={<ExpandMoreIcon />}>
            <Summary>
                <Title>{title}</Title>
                <Paws>
                    {

                        [...Array(5)].map((_, index) => (
                            <PetsIcon
                                key={index}
                                style={{ color: index < points ? "rgb(36, 169, 251)" : "rgba(0, 0, 0, 0.26)" }}
                            />
                        ))
                    }
                </Paws>
            </Summary>
        </SummaryWrapper>
        <AccordionDetails>
            <Details>
                {information}
            </Details>
        </AccordionDetails>
    </Container>
);