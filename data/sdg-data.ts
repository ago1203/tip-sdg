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
        id: "sdg-3-0",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-3-0-1",
            title: "",
            link: "",
            description: "T.I.P. ensures a safe, healthy, and inclusive environment for students and employees by maintaining high standards of laboratory and workplace safety, providing mental health support, and promoting health through campus activities.",
            // imageCount: 3,
          },
        ],
      },
      {
        id: "sdg-3-1",
        title: "3.1 Research on health and well-being",
        link: "",
        indicators: [
          {
            id: "sdg-3-1-1",
            title: "3.1.1 Good Health and Well-being: paper views",
            link: "https://drive.google.com/file/d/1dg06j7RygQYO56ySffSKfvmGLNwwgPsc/view?usp=drive_link",
            description: "",
          },
          {
            id: "sdg-3-1-2",
            title: "3.1.2 Clinical citations",
            link: "https://drive.google.com/file/d/1NDKog7UIIygsAYLoFB_6aQV_8-XVZOsi/view?usp=drive_link",
            description: "",
          },
          {
            id: "sdg-3-1-3",
            title: "3.1.3 Good Health and Well-being: publications",
            link: "https://drive.google.com/file/d/1Qq-VPvjcDj_FJY1Wu27Jlczv7fszTKBo/view?usp=drive_link",
            description: "",
          },
        ],
      },
      {
        id: "sdg-3-2",
        title: "3.2 Number graduating in health professions",
        link: "",
        indicators: [
          {
            id: "sdg-3-2-1",
            title: "3.2.1 Indicator: Proportion of graduates in health professions Year: 2024",
            link: "https://drive.google.com/file/d/1NYuuNSItSjTKtKvrv3okiQqdOxXJix_8/view?usp=drive_link",
            description: "",
          },
        ],
      },
      {
        id: "sdg-3-3",
        title: "3.3 Collaborations and health services",
        link: "",
        indicators: [
          {
            id: "sdg-3-3-1",
            title: "3.3.1 Current collaborations with health institutions",
            link: "https://drive.google.com/file/d/1pTY1YpKHapBVzcPP4bOq1MFKEX9S8sXV/view?usp=drive_link",
            description: "",
          },
          {
            id: "sdg-3-3-2",
            title: "3.3.2 Health outreach programmes",
            link: "https://drive.google.com/file/d/1OZ6YQgpVQfTB6oAGEZucK7OE_td8i5so/view?usp=drive_link",
            description: "",
          },
          {
            id: "sdg-3-3-3",
            title: "3.3.3 Shared sports facilities",
            link: "https://drive.google.com/file/d/14XnbKTqYxXHsRq74878ABJvyXKhQLa2k/view?usp=drive_link",
            description: "",
          },
          {
            id: "sdg-3-3-4",
            title: "3.3.4 Sexual and reproductive health care services for students",
            link: "https://drive.google.com/file/d/17hC6kXgDF-xeJNxF_geXurF8dfRcHuSw/view?usp=drive_link",
            description: "",
          },
          {
            id: "sdg-3-3-5",
            title: "3.3.5 Mental health support for students",
            link: "https://drive.google.com/file/d/1bfP8-YjoQOLlFkUF7VIkeFJX1ntBG91i/view?usp=drive_link",
            description: "",
          },
          {
            id: "sdg-3-3-6",
            title: "3.3.6 Smoke-free policy",
            link: "https://drive.google.com/file/d/1o0hReQj5wFlyoLfzzWO_fc3Emqw4BhcX/view?usp=drive_link",
            description: "",
          },
          {
            id: "sdg-3-3-7",
            title: "3.3.7 Mental Health Support for Staff",
            link: "https://drive.google.com/file/d/1No-MjqC9p3hVpTP5nro7oLdWNl4Q-Aeb/view?usp=drive_link",
            description: "",
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
        id: "sdg-6-1",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-6-1-1",
            title: "",
            link: "",
            description: "T.I.P. commits to ensuring access to safe and potable water across all campuses, maintaining proper sanitation facilities, and promoting water conservation through sustainable plumbing, wastewater management, and educational initiatives for students.",
            // imageCount: 3,
          },
          {
            id: "sdg-6-1-3",
            title: "6.1.3 Clean Water and Sanitation: publications",
            link: "https://drive.google.com/file/d/1mrfNS-R0bbLX3mV4rSoV3U4AaEcXy3X5/view?usp=sharing",
            description: "",
            // imageCount: 3,
          },
        ],
      },
      {
        id: "sdg-6-2",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-6-2-1",
            title: "6.2.1 Water consumption tracking",
            link: "https://drive.google.com/file/d/17rY_iDpz2O2XxMkCLbpemctMAs4zGZAP/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-2-2",
            title: "6.2.2 Water consumption per person",
            link: "https://drive.google.com/file/d/19nEF9yNGV-NDz67akDrbuZUJTaDjrIsK/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
        ],
      },
      {
        id: "sdg-6-3",
        title: "6.3 Water usage and care",
        link: "",
        indicators: [
          {
            id: "sdg-6-3-1",
            title: "6.3.1 Wastewater treatment",
            link: "https://drive.google.com/file/d/1bSFSbHlPTSogUjZODw9MNBaI6q_yWcrn/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-3-3",
            title: "6.3.3 Free drinking water provided",
            link: "https://drive.google.com/file/d/1oRwOU6xcY3VdLaq1Zs4B3OR3Er9Su7Vq/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-3-4",
            title: "6.3.4 Water-conscious building standards",
            link: "https://drive.google.com/file/d/1WRQn73f89NKoBbBe0WdK4wmLwRxawasf/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-3-5",
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
        link: "",
        indicators: [
          {
            id: "sdg-6-5-1",
            title: "6.5.1 Water management educational opportunities",
            link: "https://drive.google.com/file/d/1xAz4trysMfc1Z31MFHFFGHu5xnwPAGcu/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-5-3",
            title: "6.5.3 Off campus water conservation support",
            link: "https://drive.google.com/file/d/1fj_vGwLbowz4QOKv00w3ux67VEevl6lq/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-5-4",
            title: "6.5.4 Sustainable water extraction on campus",
            link: "https://drive.google.com/file/d/1t2iH_6_xAxJrAoHUllRscyiqLHtGRJvh/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-6-5-5",
            title: "6.5.5 Cooperation on water security ",
            link: "https://drive.google.com/file/d/1Ta1u4zAAeppGCEWC7ZBTJO0NlP7-cP8b/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
	  {
            id: "sdg-6-5-6",
            title: "6.5.6 Promoting conscious water usage on campus",
            link: "https://drive.google.com/file/d/1b5v59CJvKCVQ5w43cfJbfKYOvFT0J5Ro/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
	  {
            id: "sdg-6-5-7",
            title: "6.5.7 Promoting conscious water usage in the wider community",
            link: "https://drive.google.com/file/d/1ouU0iQRdnsyGogqu1rxsiJ7ZSbqxJgdi/view?usp=sharing",
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
        id: "sdg-7-0",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-7-0-1",
            title: "",
            link: "",
            description: "T.I.P. pledges to advance the transition toward 100% renewable energy use beyond campus operations while continuously improving energy efficiency across its laboratories, buildings, and offices. Guided by the Philippines’ Renewable Energy Act of 2008 and UN Sustainable Development Goal 7 (Affordable and Clean Energy), T.I.P. commits to integrating clean energy and sustainable practices in its operations, curriculum, research, and community partnerships. Through sustained advocacy, education, and innovation, T.I.P. reaffirms its role as a catalyst for the nation’s clean energy transformation and a model for sustainability in higher education.",
            // imageCount: 3,
          },
        ],
      },
      {
        id: "sdg-7-1",
        title: "7.1 Research on clean energy",
        link: "https://drive.google.com/file/d/1RASrnmfF55Ddec4ZEkXbZjvHZ2mMu3L7/view?usp=drive_link",
        indicators: [
        ],
      },
      {
        id: "sdg-7-2",
        title: "7.2 University measures towards affordable and clean energy",
        link: "https://drive.google.com/file/d/15tHzzFxVSieKmS9KjWUfiQSvcHYkMAvy/view?usp=drive_link",
        indicators: [
        ],
      },
      {
        id: "sdg-7-3",
        title: "7.3 Energy use density",
        link: "https://drive.google.com/file/d/1peL4AJztYoKSipCAdxN0pQcucMqEXXvQ/view?usp=drive_link",
        indicators: [
        ],
      },
      {
        id: "sdg-7-4",
        title: "7.4 Energy and the community",
        link: "",
        indicators: [
          {
            id: "sdg-7-4-1",
            title: "7.4.1 Local community outreach for energy efficiency",
            link: "https://drive.google.com/file/d/1uR8syVBzLs_j8zFQrIXUUQCU0ExoubPE/view?usp=drive_link",
            description: ""
          },
          {
            id: "sdg-7-4-2",
            title: "7.4.2 100% renewable energy pledge",
            link: "https://drive.google.com/file/d/1RkgMVUHmaGZollfaKO7RirWLcRqI7UeP/view?usp=drive_link",
            description: ""
          },
          {
            id: "sdg-7-4-3",
            title: "7.4.3 Energy efficiency services for industry",
            link: "https://drive.google.com/file/d/1biAdYLD82hrHmtYpwXl4xYAI4URroYjc/view?usp=drive_link",
            description: ""
          },
          {
            id: "sdg-7-4-4",
            title: "7.4.4 Policy development for clean energy technology",
            link: "https://drive.google.com/file/d/19dO1tSQ8tpVwA-Caq2EaFB5qZ7KGxzef/view?usp=drive_link",
            description: ""
          },
          {
            id: "sdg-7-4-5",
            title: "7.4.5 Assistance to low-carbon innovation",
            link: "https://drive.google.com/file/d/1FOnMqfCIcVUB-k_jfoepPv_sRBVuDskW/view?usp=drive_link",
            description: ""
          },
        ],
      },
      {
        id: "sdg-7-5",
        title: "7.5 Low-carbon energy use",
        link: "",
        indicators: [
          {
            id: "sdg-7-5-1",
            title: "7.5 Low-carbon energy use",
            link: "https://drive.google.com/file/d/1S-qEe2GtAb4j-dGBPhkvxXoIGX4LTFZP/view?usp=drive_link",
            description: ""
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
          {
            id: "sdg-8-1-2",
            title: "8.1.2 Decent Work and Economic Growth: publications",
            link: "https://drive.google.com/file/d/1CTVolHcAgQCF4XQ9YbDY4-D1fcX9L2Ae/view?usp=drive_link",
            description: "",
            // imageCount: 3,
          },
        ],
      },
      {
        id: "sdg-8-2",
        title: "8.2 Employment practice",
        link: "",
        indicators: [
          {
            id: "sdg-8-2-1",
            title: "8.2.1 Employment practice living wage",
            link: "https://drive.google.com/file/d/1bkToZCz_aZMOW8RboiilmTnjBbKbo8S0/view?usp=drive_link",
            description: "",
            // imageCount: 3,
          },
          {
            id: "sdg-8-2-2",
            title: "8.2.2 Employment practice unions",
            link: "https://drive.google.com/file/d/1uJqHTT7CE-sN3kiBxXcfyr26TjCIzmE9/view?usp=drive_link",
            description: "",
            // imageCount: 3,
          },
          {
            id: "sdg-8-2-3",
            title: "8.2.3 Employment policy on discrimination",
            link: "https://drive.google.com/file/d/1WbnXqMcUQquaTSeRt39Ng6qIM83X0z3X/view?usp=drive_link",
            description: "",
            // imageCount: 3,
          },
          {
            id: "sdg-8-2-4",
            title: "8.2.4 Employment policy modern slavery",
            link: "https://drive.google.com/file/d/1-e1g4UeewxxKZU3UbXS_uDhqGSbayh4S/view?usp=drive_link",
            description: "",
            // imageCount: 3,
          },
          {
            id: "sdg-8-2-5",
            title: "8.2.5 Employment practice equivalent rights outsourcing",
            link: "https://drive.google.com/file/d/1Q-o1pxpXTL-F2JUQiBKGSThDkXihv16w/view?usp=drive_link",
            description: "",
            // imageCount: 3,
          },
          {
            id: "sdg-8-2-6",
            title: "8.2.6 Employment policy pay scale equity",
            link: "https://drive.google.com/file/d/11QWdFSvBQUkXg7Q1-U9gZ8AAGCCQSseR/view?usp=drive_link",
            description: "",
            // imageCount: 3,
          },
          {
            id: "sdg-8-2-7",
            title: "8.2.7 Tracking pay scale for gender equity",
            link: "https://drive.google.com/file/d/1EZ1kpqtOUn3W0Mp-nOjHN_6khxszGpjn/view?usp=drive_link",
            description: "",
            // imageCount: 3,
          },
          {
            id: "sdg-8-2-8",
            title: "8.2.8 Employment practice appeal process",
            link: "https://drive.google.com/file/d/1M4MDFd3V-_t2zYGcHB4mNXCxZWaBvMHR/view?usp=drive_link",
            description: "",
            // imageCount: 3,
          },
          {
            id: "sdg-8-2-9",
            title: "8.2.9 Employment practice labour rights",
            link: "https://drive.google.com/file/d/1KXMrkiY2VzcVhF3pjJEPot7Ej2id_gbs/view?usp=drive_link",
            description: "",
            // imageCount: 3,
          },
        ],
      },
      // {
      //   id: "sdg-8-3",
      //   title: "8.3 Expenditure per employee",
      //   link: "",
      //   indicators: [
      //     {
      //       id: "sdg-8-3-1",
      //       title: "8.3.1 Indicator: Expenditure per employee",
      //       link: "https://drive.google.com/file/d/1aEGIKeF34CQEqJ9IkoqjDTsm82XrG5zJ/view?usp=drive_link",
      //       description: "",
      //       // imageCount: 3,
      //     },
      //   ],
      // },
      {
        id: "sdg-8-4",
        title: "8.4 Proportion of students taking work placements",
        link: "",
        indicators: [
          {
            id: "sdg-8-4-1",
            title: "8.4.1 Indicator: Proportion of students with work placements",
            link: "https://drive.google.com/file/d/1fr2klIN68S_DrsKjF4c3G9-2um6mQg7e/view?usp=drive_link",
            description: "",
            // imageCount: 3,
          },
        ],
      },
      {
        id: "sdg-8-5",
        title: "8.5 Proportion of employees on secure contracts",
        link: "",
        indicators: [
          {
            id: "sdg-8-5-1",
            title: "8.5.1 Indicator: Proportion of employees on secure contracts",
            link: "https://drive.google.com/file/d/1beEX0NQP7EHa78AfSpMgKfOUvU_Qv5NQ/view?usp=drive_link",
            description: "",
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
        id: "sdg-17-0",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-17-0-1",
            title: "",
            link: "",
            description: "T.I.P. pledges to strengthen collaborations with industry, academe, government, and international partners to advance research, education, and outreach initiatives that accelerate the achievement of the SDGs.",
            // imageCount: 3,
          },
        ],
      },
      {
        id: "sdg-17-2",
        title: "17.2 Relationships to support the goals",
        link: "",
        indicators: [
          {
            id: "sdg-17-2-1",
            title: "17.2.1 Relationships with regional NGOs and government for SDG policy",
            link: "https://drive.google.com/file/d/17iwYEuJncG1jNKRKRIqrW-_Si-UlJs4T/view?usp=sharing",
            description: "",
            // imageCount: 3,
          },
          {
            id: "sdg-17-2-2",
            title: "17.2.2 Cross sectoral dialogue about SDGs",
            link: "https://drive.google.com/file/d/1tQ9ekzrPX9E6JlHLRZYMP-NFGOUsRB0g/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-17-2-3",
            title: "17.2.3 International collaboration data gathering for SDG",
            link: "https://drive.google.com/file/d/1Rx5-dmm4KLEKU-4s8qFHZ96OwyzaYSoH/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-17-2-4",
            title: "17.2.4 Collaboration for SDG best practice",
            link: "https://drive.google.com/file/d/1BcCr3AU7BzMtCMnoRdBEWmksMyF7a20A/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
          {
            id: "sdg-17-2-5",
            title: "17.2.5 Collaboration with NGOs for SDGs",
            link: "https://drive.google.com/file/d/1hpw2c4QqX70VhL3mBB1xf_Dx7dlLhpnG/view?usp=sharing",
            description: "",
            // imageCount: 2,
          },
        ],
      },
      {
        id: "sdg-17-3",
        title: "",
        link: "",
        indicators: [
          {
            id: "sdg-17-3-1",
            title: "17.3.1 to 17.3.17 Publication of SDG reports - per SDG",
            link: "https://tip-sdg-411d547782ea.herokuapp.com/",
            description: "",
            // imageCount: 3,
          },
        ],
      },
      {
        id: "sdg-17-4",
        title: "17.4 Education for the SDGs",
        link: "",
        indicators: [
          {
            id: "sdg-17-4-1",
            title: "17.4.1 Education for SDGs commitment to meaningful education",
            link: "https://drive.google.com/file/d/1JSBlKZ-ujThNkzGfAPF9QbJRtxe3xAhs/view?usp=sharing",
            description: "",
            // imageCount: 3,
          },
          {
            id: "sdg-17-4-2",
            title: "17.4.2 Education for SDGs: specific courses on sustainability",
            link: "https://drive.google.com/file/d/1-2ui21RfaZlvP37-mppCzaQWgNnRgkUG/view?usp=sharing",
            description: "",
            // imageCount: 3,
          },
          {
            id: "sdg-17-4-3",
            title: "17.4.3 Education for SDGs in the wider community",
            link: "https://drive.google.com/file/d/1dRsi7g4xxzDAoerHlfHhvu_5br__l9F7/view?usp=sharing",
            description: "",
            // imageCount: 3,
          },
        ],
      },
    ],
  },
]
