import React from 'react';
import { shallow } from 'enzyme';
import Results from './results';
import { RadarResults, RadarSample, RadarState } from '../../core/radar.types';
import { Invader } from '../../core/invaders/Invader';

const mockInvader = new Invader('mockInvader', '');

const mockSample: RadarSample = {
    position: [0,0],
    sample: [['o','-','0'],['o','-','0'],['o','-','0']]
};

const mockResult: RadarResults = {
    positives: [[0,0]],
    negatives: [[0,1]],
    sample: mockSample,
    matchRatio: 1,
    image: '',
    invader: mockInvader
};

const mockState: RadarState = {
    input:'',
    samples: [mockSample],
    results: [mockResult, mockResult],
    definition: 0,
    invaders:[]
};

test('renders the component', () => {
  const component = shallow(<Results state={mockState} />);
  expect(component).toMatchSnapshot();
});

test('should update the index on next button', () => {
    const component = shallow(<Results state={mockState} />);
});