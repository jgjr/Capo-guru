import { Sequence } from 'guitar-chord-sequence';

const capoSequence = new Sequence([
    {root: 'C', type: 'maj'},
    {root: 'A', type: 'min'},
    {root: 'F', type: 'maj'},
    {root: 'G', type: 'maj'},
]);

const openSequence = new Sequence([
    {root: 'G', type: 'maj'},
    {root: 'E', type: 'min'},
    {root: 'C', type: 'maj'},
    {root: 'D', type: 'maj'},
]);

export {capoSequence, openSequence};
