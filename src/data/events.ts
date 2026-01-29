export interface EventData {
  id: string;
  name: string;
  description: string;
  category: string;
  time: string;
  rules: string[];
  link: string;
}

export interface PassData {
  id: string;
  name: string;
  description: string;
  price: string;
  benefits: string[];
  rules: string[];
  link: string;
}

export const EVENTS_DATA: EventData[] = [
  {
    id: '1',
    name: 'Paper Presentation',
    description: 'Showcase your groundbreaking research and innovative ideas in technology and AI.',
    category: 'Technical',
    time: 'TBA',
    rules: [
      'Topic should be related to AI/DS.',
      'Max 2 participants per team.',
      'Presentation time: 10 mins + 5 mins Q&A.'
    ],
    link: 'https://forms.gle/pJFejf4ntqDzo3gq7'
  },
  {
    id: '2',
    name: 'Geek Fued',
    description: 'The ultimate technical showdown! A Family Feud-style trivia battle for true tech enthusiasts.',
    category: 'Technical',
    time: 'TBA',
    rules: [
      'Teams of 3-4 members.',
      'Fastest to answer wins points.',
      'No electronic devices allowed.'
    ],
    link: 'https://forms.gle/YvxFiNGPcL52amkw6'
  },
  {
    id: '3',
    name: 'Prompt Quest',
    description: 'Master art of AI communication. Craft perfect prompts and unlock creative outputs.',
    category: 'Technical',
    time: 'TBA',
    rules: [
      'Must use provided AI tools.',
      'Time limit: 30 minutes per prompt.',
      'Creativity scores higher than accuracy.'
    ],
    link: 'https://forms.gle/o7AQcznfGAZrVT3eA'
  },
  {
    id: '4',
    name: 'Glitch Saga',
    description: 'Dive into code, find bugs, and fix the glitches before time runs out.',
    category: 'Technical',
    time: 'TBA',
    rules: [
      'Individual event only.',
      'Time limit: 45 minutes.',
      'Internet access disabled.'
    ],
    link: 'https://forms.gle/ntNuhLLAw1y161iM9'
  },
  {
    id: '5',
    name: 'Mind2Machine',
    description: 'Solve complex data puzzles and decipher clues to unlock the secrets and escape.',
    category: 'Technical',
    time: 'TBA',
    rules: [
      'Max 3 members per team.',
      'Clues hidden in datasets.',
      'First to solve wins.'
    ],
    link: 'https://forms.gle/NndFKG7AtEzfrPv6A'
  },
  {
    id: '6',
    name: 'Webify_AI',
    description: 'Design and deploy AI-powered web solutions. A hackathon-style event for web developers.',
    category: 'Technical',
    time: 'TBA',
    rules: [
      '24 hour hackathon.',
      'Teams up to 4 members.',
      'Deployment required for judging.'
    ],
    link: 'https://forms.gle/t5NpZjzjDrf588Ub7'
  },
  {
    id: '7',
    name: 'Code Relay',
    description: 'A team-based coding sprint! Pass the baton to your teammates to solve challenges.',
    category: 'Technical',
    time: 'TBA',
    rules: [
      'Team of 4 members.',
      'Round-robin rotation of coders.',
      'Languages: C++, Java, Python.'
    ],
    link: 'https://forms.gle/3QSALuFgCgwdCu2r6'
  },
  {
    id: '8',
    name: 'Lies between lines',
    description: 'Decode hidden messages and uncover the truth buried within the data.',
    category: 'Technical',
    time: 'TBA',
    rules: [
      'Individual event.',
      'No use of external decoders.',
      '50 minutes time limit.'
    ],
    link: 'https://forms.gle/6RszChmwMbsCaG5z7'
  },
  {
    id: '9',
    name: 'Hack-O-Tank',
    description: 'The ultimate 24-hour innovation marathon. Code, build, and pitch your revolutionary tech solutions to industry experts.',
    category: 'Technical',
    time: '24 Hours',
    rules: [
      'Team size: 2-4 members.',
      'Hardware/Software open stack.',
      'Mandatory prototype demo.'
    ],
    link: '#'
  },
  {
    id: '10',
    name: 'Cipher Chase',
    description: 'A high-stakes Cryptography and CTF event. Decrypt complex algorithms, find hidden flags, and breach the firewall.',
    category: 'Technical',
    time: 'TBA',
    rules: [
      'Individual or pairs.',
      'Bring your own laptop.',
      'Strictly no unauthorized tools.'
    ],
    link: '#'
  },
];

export const PASSES_DATA: PassData[] = [
  {
    id: 'p1',
    name: 'Trifecta Pass',
    description: 'Unlock full potential of Datronix with this exclusive pass. Designed for participants who want to dive deep into the technical ecosystem.',
    price: '₹300',
    benefits: [
      'Participate in maximum of 3 events',
      'Complimentary Food & Refreshments'
    ],
    rules: [
      'Hack-O-Tank and Webify_AI will not be allowed in Trifecta Pass',
      'Maximum of 3 events will be allowed to participate in pass',
      'Choose events wisely without timing clashed if any organizer is not responsible'
    ],
    link: '#'
  }
];
