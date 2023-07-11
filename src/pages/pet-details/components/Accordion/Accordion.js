import * as React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PetsIcon from '@mui/icons-material/Pets';
import { 
    Container, 
    SummaryWrapper,
    Summary,
    Details, 
    Paws 
} from './accordion.styles';

import { Typography } from '@mui/material';

export const Accordion = ({ title, points, information }) => (
    <Container>
        <SummaryWrapper expandIcon={<ExpandMoreIcon />}>
            <Summary>
                <Typography>{title}</Typography>
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