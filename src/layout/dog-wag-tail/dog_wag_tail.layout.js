import React from 'react';
import { Dog, DogBody, DogEar, DogEars, DogEye, DogEyes, DogHead, DogMuzzle, DogTail, DogTongue, DogTorso, Wrapper } from './dog_wag_tail.styles';

const DogWagTail = () => (
    <Wrapper>
        <Dog>
            <DogBody>
                <DogTail>
                    <DogTail>
                        <DogTail>
                            <DogTail>
                                <DogTail>
                                    <DogTail>
                                        <DogTail>
                                            <DogTail></DogTail>
                                        </DogTail>
                                    </DogTail>
                                </DogTail>
                            </DogTail>
                        </DogTail>
                    </DogTail>
                </DogTail>
            </DogBody>
            <DogTorso></DogTorso>
            <DogHead>
                <DogEars>
                    <DogEar></DogEar>
                    <DogEar></DogEar>
                </DogEars>
                <DogEyes>
                    <DogEye></DogEye>
                    <DogEye></DogEye>
                </DogEyes>
                <DogMuzzle>
                    <DogTongue></DogTongue>
                </DogMuzzle>
            </DogHead>
        </Dog>
    </Wrapper>
);

export default DogWagTail;