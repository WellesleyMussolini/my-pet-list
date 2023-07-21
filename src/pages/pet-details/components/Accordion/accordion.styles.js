import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Typography } from '@mui/material';

export const Container = styled(Accordion)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-weight: 600;
    color: rgba(146, 146, 146);


    &.MuiAccordion-root {
        border: none;
        box-shadow: none;
        background-color: transparent;
    };
`;

export const SummaryWrapper = styled(AccordionSummary)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    &:hover {
        background: rgb(36, 169, 251);
        transition: all 0.5s ease;
        cursor: pointer;
    };

    &:hover p {
        color: #fff;
    };

    &:hover svg {
        color: #fff !important;
    };

    &:hover svg:not([style*="color: rgb(36, 169, 251)"]) {
        color: rgba(0, 0, 0, 0.26) !important;
    };
`;

export const Summary = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    
    @media (min-width: 800px) {
        padding: 0 40px;
    };

    @media (max-width: 775px) {
        padding: 0 12px;
    };
`;

export const Paws = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 775px) {
        & > svg{
            font-size: 18px;
        }
    };
`;

export const Title = styled(Typography)`
    @media (max-width: 775px) {
        &.MuiTypography-root{
            font-size: 13px;
        };
    };
`;

export const Details = styled(Typography)`
    @media (min-width: 800px) {
        padding: 0 40px;
    };

    @media (max-width: 775px) {
        padding: 0 12px;
        &.MuiTypography-root{
            font-size: 13px;
        };
    };
`;