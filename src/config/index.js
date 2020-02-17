module.exports = {
  siteTitle: 'Mayuresh Khendkar | Software Engineer',
  siteDescription:
    'Mayuresh Khendkar is a software engineer based in Boston, MA.',
  siteKeywords:
    'Mayuresh Khendkar, mayureshk7, software engineer, C/C++ engineer, web developer, software developer, northeastern',
  siteUrl: 'https://mayureshkhendkar.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Mayuresh Khendkar',
  location: 'Boston, MA',
  email: 'mayuresh300894@gmail.com',
  github: 'https://github.com/mayureshk7',
  twitterHandle: '@mayureshk7',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/mayureshk7',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mayuresh-khendkar-7a22b5119/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mayuresh7',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mayureshk7',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
