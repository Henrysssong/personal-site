/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Got10IN',
    position: 'Co-founder & Full-stack Software Engineer',
    url: 'https://got10in.com',
    startDate: '2023-10-01',
    summary: `Got10IN aims to revolutionize the college application consulting industry by providing AI Agents which drop the price
    by 100x. We want to make it affordable for all.`,
    highlights: [
      'Utilized Next.js (React.js) for frontend development, redux to handle statement management.',
      'Implemented backend using Node.js and Express.js, with Prisma, MongoDB serving as the database.',
      'Set up a CI/CD pipeline using Jenkins and designed a distributed system for scalability.',
    ],
  },
  {
    name: 'ActEarn, inc.',
    position: 'Software Engineer Intern',
    url: 'https://www.linkedin.com/company/actearn/',
    startDate: '2013-08-01',
    endDate: '2013-012-01',
    highlights: [
      'Delivered features using React Native for mobile development .',
    ],
  },
  {
    name: 'MiraclePlus (formerly YC China)',
    position: 'Investment Analyst Intern',
    url: 'https://www.miracleplus.com/',
    startDate: '2023-02-01',
    endDate: '2023-08-01',
    highlights: [
      'Specialized in AI sector deal sourcing, proactively identifying and engaging with promising startups and entrepreneurs to foster potential investment opportunities for MiraclePlus.',
      'Conducted deep dives into the AI market landscape, gaining nuanced insights into emerging trends, challenges, and opportunities.',
      'Established and nurtured relationships with AI startups, understanding their business models, goals, and challenges to assess investment potential.',
    ],
  },
  {
    name: 'GPTBang',
    position: 'Co-founder',
    startDate: '2023-02-01',
    endDate: '2023-08-01',
    url: '',
    highlights: [
      'Gained acceptance into the selective CSAC 2023 Spring accelerator program through GPTBang, a platform that leverages diverse applications of the ChatGPT API.',
      'Lead and collaborated with a cross-functional team to deliver a robust web application with Vue.js and Java, ensuring seamless front-end and back-end interaction.',
      'Strategically managed the product roadmap by aligning user feedback with business objectives, ensuring customer centric product evolution.',
    ],
  },
  {
    name: 'CoffeeVerse',
    position: 'Co-founder',
    url: '',
    startDate: '2022-10-01',
    endDate: '2023-02-01',
    summary: 'Initiated from 0 to 1 an online marketplace for coffee chats between college students and applicants, amassing over 1000 community members.',
    highlights: [
      'In a team of 4, developed a full set of backend REST API using FastAPI, Poetry, Alembic and PostgreSQL following best practices, including modules like authentication, profile management, recommendation, payment etc.',
    ],
  },

];

export default work;
