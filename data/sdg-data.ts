export interface SDGIndicator {
  id: string
  title?: string
  link?: string
  description: string
  // imageCount?: number
}

export interface SDGTarget {
  id: string
  title?: string
  link?: string
  indicators: SDGIndicator[]
}

export interface SDG {
  id: string
  number: number
  title: string
  targets: SDGTarget[]
}

export const sdgData: SDG[] = [
  {
    id: "sdg-1",
    number: 1,
    title: "No Poverty",
    targets: [
      {
        id: "sdg-1-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-1-1-1",
            title: "",
            link: "",
            description: "T.I.P. commits to breaking the cycle of poverty by expanding scholarship and financial assistance programs, strengthening industry linkages for employability, and supporting community livelihood and technology-transfer projects.",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-2",
    number: 2,
    title: "Zero Hunger",
    targets: [
      {
        id: "sdg-2-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-2-1-1",
            title: "",
            link: "",
            description: "T.I.P. pledges to support food security initiatives through agricultural engineering innovations, community gardens, food technology research, and partnerships that promote sustainable food production and responsible consumption.",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-3",
    number: 3,
    title: "Good Health and Well-Being",
    targets: [
      {
        id: "sdg-3-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-3-1-1",
            title: "",
            link: "",
            description: "T.I.P. ensures a safe, healthy, and inclusive environment for students and employees by maintaining high standards of laboratory and workplace safety, providing mental health support, and promoting health through campus activities.",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-4",
    number: 4,
    title: "Quality Education",
    targets: [
      {
        id: "sdg-4-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-4-1-1",
            title: "",
            link: "",
            description: "T.I.P. upholds its mission to transform students into globally competitive professionals through outcomes-based education, continuous faculty development, research integration, and lifelong learning opportunities.",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-5",
    number: 5,
    title: "Gender Equality",
    targets: [
      {
        id: "sdg-5-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-5-1-1",
            title: "",
            link: "",
            description: "T.I.P. promotes an equitable learning and working environment where all genders have equal access to education, leadership, and advancement opportunities, ensuring policies that eliminate discrimination and harassment.",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-6",
    number: 6,
    title: "Clean Water and Sanitation",
    targets: [
      {
        id: "sdg-1-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-6-1-0",
            title: "",
            link: "",
            description: "T.I.P. commits to ensuring access to safe and potable water across all campuses, maintaining proper sanitation facilities, and promoting water conservation through sustainable plumbing, wastewater management, and educational initiatives for students.",
            // imageCount: 3,
          },
          {
            id: "sdg-6-1-1",
            title: "6.1.3 Clean Water and Sanitation: publications",
            link: "https://drive.google.com/file/d/1mrfNS-R0bbLX3mV4rSoV3U4AaEcXy3X5/view?usp=sharing",
            description: "",
            // imageCount: 3,
          },
          {
            id: "sdg-6-1-2",
            title: "6.2.1 Water consumption tracking",
            link: "https://drive.google.com/file/d/17rY_iDpz2O2XxMkCLbpemctMAs4zGZAP/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-1-3",
            title: "6.2.2 Water consumption per person",
            link: "https://drive.google.com/file/d/17rY_iDpz2O2XxMkCLbpemctMAs4zGZAP/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
        ],
      },
      {
        id: "sdg-6-3",
        title: "6.3 Water usage and care",
        link: "https://drive.google.com/file/d/1bSFSbHlPTSogUjZODw9MNBaI6q_yWcrn/view?usp=sharing",
        indicators: [
          {
            id: "sdg-6-1-4",
            title: "6.3.1 Wastewater treatment",
            link: "https://drive.google.com/file/d/1bSFSbHlPTSogUjZODw9MNBaI6q_yWcrn/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-1-5",
            title: "6.3.3 Free drinking water provided",
            link: "https://drive.google.com/file/d/1oRwOU6xcY3VdLaq1Zs4B3OR3Er9Su7Vq/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-1-6",
            title: "6.3.4 Water-conscious building standards",
            link: "https://drive.google.com/file/d/1WRQn73f89NKoBbBe0WdK4wmLwRxawasf/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-1-7",
            title: "6.3.5 Water-conscious planting",
            link: "https://drive.google.com/file/d/1TUdt-wZBBogwnLsFsPAZ8EJUf4azb4yS/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
        ],
      },
      {
        id: "sdg-6-5",
        title: "6.5 Water in the community",
        link: "https://drive.google.com/file/d/1xAz4trysMfc1Z31MFHFFGHu5xnwPAGcu/view?usp=sharing",
        indicators: [
          {
            id: "sdg-6-1-8",
            title: "6.5.1 Water management educational opportunities",
            link: "https://drive.google.com/file/d/1xAz4trysMfc1Z31MFHFFGHu5xnwPAGcu/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-1-9",
            title: "6.5.3 Off campus water conservation support",
            link: "https://drive.google.com/file/d/1fj_vGwLbowz4QOKv00w3ux67VEevl6lq/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-1-10",
            title: "6.5.5 Cooperation on water security ",
            link: "https://drive.google.com/file/d/1Ta1u4zAAeppGCEWC7ZBTJO0NlP7-cP8b/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-7",
    number: 7,
    title: "Affordable and Clean Energy",
    targets: [
      {
        id: "sdg-7-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-7-1-1",
            title: "",
            link: "",
            description: "T.I.P. pledges to improve energy efficiency in its laboratories, buildings, and offices, promote renewable energy technologies in its curriculum and research, and adopt sustainable practices that reduce the institutional carbon footprint.",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-8",
    number: 8,
    title: "Decent Work and Economic Growth",
    targets: [
      {
        id: "sdg-8-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-8-1-1",
            title: "",
            link: "",
            description: "T.I.P. supports fair and safe employment practices for faculty and staff, promotes entrepreneurship and innovation among students, and fosters partnerships with industry that lead to meaningful work and inclusive economic opportunities.",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-9",
    number: 9,
    title: "Industry, Innovation and Infrastructure",
    targets: [
      {
        id: "sdg-9-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-9-1-1",
            title: "",
            link: "",
            description: "T.I.P. commits to strengthening its Technopreneurship and Collaborative Research (TechnoCoRe) programs, developing innovative and sustainable laboratories, and driving innovation that supports resilient infrastructure and responsible industrial growth.",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-10",
    number: 10,
    title: "Reduced Inequalities",
    targets: [
      {
        id: "sdg-10-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-10-1-1",
            title: "",
            link: "",
            description: "T.I.P. ensures that education and institutional services are accessible to all regardless of background, and promotes inclusivity through scholarships, accessible facilities, and equal opportunities in learning and employment.",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-11",
    number: 11,
    title: "Sustainable Cities and Communities",
    targets: [
      {
        id: "sdg-11-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-11-1-1",
            title: "",
            link: "",
            description: "T.I.P. pledges to make its campuses models of sustainability through green building initiatives, safe learning environments, disaster resilience planning, and community engagement in sustainable urban development.",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-12",
    number: 12,
    title: "Responsible Consumption and Production",
    targets: [
      {
        id: "sdg-12-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-12-1-1",
            title: "",
            link: "",
            description: "T.I.P. commits to responsible classroom and office operations by implementing proper waste management, sustainable procurement, and equipment lifecycle management while promoting resource efficiency and environmental consciousness.",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-13",
    number: 13,
    title: "Climate Action",
    targets: [
      {
        id: "sdg-13-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-13-1-1",
            title: "",
            link: "",
            description: "T.I.P. pledges to reduce its environmental impact through energy conservation, greening initiatives, and climate education, while integrating disaster risk reduction and climate resilience into its institutional operations and curricula.",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-14",
    number: 14,
    title: "Life Below Water",
    targets: [
      {
        id: "sdg-14-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-14-1-1",
            title: "",
            link: "",
            description: "T.I.P. supports initiatives for water conservation, pollution prevention, and research that protect marine and freshwater ecosystems, especially in communities affected by environmental degradation and industrial waste.",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-15",
    number: 15,
    title: "Life on Land",
    targets: [
      {
        id: "sdg-15-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-15-1-1",
            title: "",
            link: "",
            description: "T.I.P. commits to promoting biodiversity conservation and sustainable landscaping within its campuses through tree planting, green spaces, and environmental awareness programs that foster ecological responsibility.",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-16",
    number: 16,
    title: "Peace, Justice and Strong Institutions",
    targets: [
      {
        id: "sdg-16-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-16-1-1",
            title: "",
            link: "",
            description: "T.I.P. upholds transparency, accountability, and ethical governance in all its institutional processes, fostering a culture of peace, integrity, and responsible citizenship among students and employees.",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
  {
    id: "sdg-17",
    number: 17,
    title: "Partnerships for the Goals",
    targets: [
      {
        id: "sdg-17-1",
        title: "17.2 Relationships to support the goals",
        link: "https://drive.google.com/file/d/17iwYEuJncG1jNKRKRIqrW-_Si-UlJs4T/view?usp=sharing",
        indicators: [
          {
            id: "sdg-17-1-1",
            title: "17.2.1 Relationships with regional NGOs and government for SDG policy",
            link: "https://drive.google.com/file/d/17iwYEuJncG1jNKRKRIqrW-_Si-UlJs4T/view?usp=sharing",
            description: "T.I.P. pledges to strengthen collaborations with industry, academe, government, and international partners to advance research, education, and outreach initiatives that accelerate the achievement of the SDGs.",
            // imageCount: 3,
          },
          {
            id: "sdg-6-1-8",
            title: "17.2.2 Cross sectoral dialogue about SDGs",
            link: "https://drive.google.com/file/d/1tQ9ekzrPX9E6JlHLRZYMP-NFGOUsRB0g/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-1-9",
            title: "17.2.3 International collaboration data gathering for SDG",
            link: "https://drive.google.com/file/d/1Rx5-dmm4KLEKU-4s8qFHZ96OwyzaYSoH/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-1-10",
            title: "17.2.4 Collaboration for SDG best practice",
            link: "https://drive.google.com/file/d/1BcCr3AU7BzMtCMnoRdBEWmksMyF7a20A/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-1-11",
            title: "17.2.5 Collaboration with NGOs for SDGs",
            link: "https://drive.google.com/file/d/1hpw2c4QqX70VhL3mBB1xf_Dx7dlLhpnG/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
        ],
      },
    ],
  },
]
