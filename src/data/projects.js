export const projects = [
  {
    slug: 'rail-yojna', number: '01', title: 'Rail-Yojna', category: 'End-to-end system', year: 'Selected work', visual: 'rail',
    summary: 'Planning infrastructure for railway maintenance.',
    description: 'A decision-support system that connects risk prediction, maintenance planning, optimization, operational constraints, validation, and a React interface.',
    sections: [
      ['Problem', 'Turn operational data and competing constraints into a plan that people can inspect.'],
      ['Approach', 'Move from data and ML signals through planning and optimization to a reviewable recommendation.'],
      ['System', 'A full path across machine learning, FastAPI services, OR-Tools optimization, and a React frontend.'],
      ['Current state', 'The project brings model output, operational constraints, safety checks, and human review into one workflow.'],
    ],
    stack: ['Python', 'FastAPI', 'React', 'scikit-learn', 'OR-Tools'],
    github: 'https://github.com/AnshXGrind/Rail-Yojna',
  },
  {
    slug: 'lexiscan', number: '02', title: 'LexiScan', category: 'End-to-end product', year: 'Selected work', visual: 'lexi',
    summary: 'Learning-difficulty screening designed as an experience.',
    description: 'An interactive learning-difficulty screening platform built with React and TypeScript, with assessment flows, results, progress, and guidance in one product.',
    sections: [
      ['Problem', 'Make a sensitive screening flow clear, calm, and easy to move through.'],
      ['Approach', 'Guide a person through focused assessment tasks and turn responses into a readable product experience.'],
      ['Implementation', 'Reusable React and TypeScript interaction patterns support the screening flow and its surrounding views.'],
      ['Current state', 'The product presents screening as an interactive experience without making diagnostic claims.'],
    ],
    stack: ['TypeScript', 'React', 'Vite', 'Tailwind'],
    github: 'https://github.com/AnshXGrind/lexiscan',
  },
];
