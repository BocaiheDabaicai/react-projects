import blueberry from './assets/buleberry.svg'
import coco from './assets/coco.svg'
import litchi from './assets/litchi.svg'
import watermelon from './assets/watermelon.svg'

export const CORE_CONCEPTS = [
    {
        image: blueberry,
        title: 'Components',
        description:
            'The core UI building block - compose the user interface by combining multiple components.',
    },
    {
        image: coco,
        title: 'JSX',
        description:
            'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    },
    {
        image: litchi,
        title: 'Props',
        description:
            'Make components configurable (and therefore reusable) by passing input data to them.',
    },
    {
        image: watermelon,
        title: 'State',
        description:
            'React-managed data which, when changed, causes the component to re-render & the UI to update.',
    },
];