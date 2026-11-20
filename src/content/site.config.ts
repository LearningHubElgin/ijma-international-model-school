export interface NavItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
  isMega?: boolean;
  megaImage?: string;
  megaTitle?: string;
}

export const siteConfig = {
  school: {
    name: 'GD Goenka La Petite',
    subName: 'Rohini, New Delhi',
    fullName: 'GD Goenka La Petite Preschool, Rohini',
    tagline: 'Center For Excellence | Learning With Fun',
    motto: 'We Educate Knowledge & Essential Skills!',
    description:
      'GD Goenka La Petite, Rohini is a premier Montessori-based preschool offering innovative, nurturing early education that develops independence, confidence, and a positive sense of self.',
    logo: '/assets/logo/gdglp-logo.png',
    affiliation: 'Montessori-Based Early Childhood Education',
  },

  contact: {
    address: 'Bhartiya Jan Sahyog Parishad, Pocket B-5, Sector 3, Rohini, New Delhi – 110085',
    landmark: 'Near Jaipur Golden Hospital',
    phones: ['+91 8800012762', '+91 8800012763'],
    primaryPhone: '+918800012762',
    email: 'team@gdgoenkarohini.com',
    hours: 'Mon - Sat: 9:00 AM - 3:00 PM',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.789114207925!2d77.1082!3d28.7011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c200000001%3A0x8849b28b76b2901a!2sSector%203%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },

  socials: {
    facebook: 'https://www.facebook.com/GDGoenkaLaPetiteRohini',
    instagram: 'https://www.instagram.com/gdgoenkalprohini/',
    youtube: 'https://www.youtube.com/watch?v=N8C9PpceGT8',
  },

  navigation: [
    {
      label: 'Programmes',
      href: '/programmes',
      isMega: true,
      megaTitle: 'Facilities Available',
      megaImage: '/assets/programmes/programme-mega-panel.svg',
      children: [
        {
          label: 'Mom and Me (12-18 Months)',
          href: '/programmes/mom-and-me',
          description: 'A special bonding & developmental foundation programme for toddlers and mothers.',
        },
        {
          label: 'Play Group (18-24 Months)',
          href: '/programmes/play-group',
          description: 'Encouraging exploratory play, motor development, and social curiosity.',
        },
        {
          label: 'Pre Nursery (2-3 Years)',
          href: '/programmes/pre-nursery-age-group-2-years-to-3-years',
          description: 'Structured sensory experiences, language acquisition, and independent routines.',
        },
        {
          label: 'Nursery (3-4 Years)',
          href: '/programmes/nursery-age-group-3-years-to-4-years',
          description: 'Early literacy, numeracy, critical thinking, and social collaboration.',
        },
        {
          label: 'Day Care (12 Months - 12 Years)',
          href: '/programmes/day-care-age-group-12-months-to-12-years',
          description: 'Safe, stimulating home-away-from-home care with nutritious meals and guided study.',
        },
        {
          label: 'After School Activity Center (2 - 12 Years)',
          href: '/programmes/after-school-activity-center-2-years-12-years',
          description: 'Enriching arts, skating, taekwondo, dance, music, and personality growth.',
        },
      ],
    },
    {
      label: 'Admissions',
      href: '/admissions',
      children: [
        { label: 'Application Form', href: '/admissions/application-form' },
        { label: 'Application Process', href: '/admissions/application-process' },
        { label: 'Eligibility & Fees', href: '/admissions/eligibility-fee' },
      ],
    },
    {
      label: 'Montessori',
      href: '/montessori-methodology',
      children: [
        { label: 'Celebrations', href: '/celebrations' },
        { label: 'Curriculum', href: '/curriculum' },
        { label: 'Field Trips', href: '/field-trips' },
        { label: 'Music & Movement', href: '/music-movement' },
        { label: 'Physical Education', href: '/physical-education' },
        { label: 'Speech And Drama', href: '/speech-and-drama' },
      ],
    },
    { label: 'Blog', href: '/blog' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
  ] as NavItem[],

  heroSlides: [
    {
      id: 1,
      badge: 'Welcome to GD Goenka La Petite',
      title: 'Learning With Fun',
      subtitle: 'Center For Excellence',
      description:
        'Cultivating curious minds through child-centered Montessori environments where every discovery sparks confidence, creativity, and joyful lifelong learning.',
      ctaText: 'Know More',
      ctaHref: '/about-us',
      image: '/assets/hero/hero-slide-1.jpg',
    },
    {
      id: 2,
      badge: 'Premier Early Childhood Center',
      title: 'Children Focused Education',
      subtitle: 'Early Education',
      description:
        'Empowering young learners through hands-on materials, supportive mentors, and thoughtful spaces that inspire independence and personal achievement.',
      ctaText: 'Know More',
      ctaHref: '/programmes',
      image: '/assets/hero/hero-slide-2.jpg',
    },
  ],

  about: {
    eyebrow: 'About Us',
    heading: 'We Educate Knowledge & Essential Skills!',
    paragraph1:
      'We provide a warm and encouraging atmosphere that enhances self-concept, instills basic moral values, encourages social interaction, and enriches awareness of the natural and cultural world. We’re a warm and loving community of preschoolers, teachers, and parents who inspire imagination, creativity, and play for every learner.',
    paragraph2:
      "In an environment rooted in respect and compassion, we strive to nourish each child's spirit and provide a protective space for him or her to grow.",
    ctaText: 'Read More',
    ctaHref: '/about-us',
    mainImage: '/assets/about/about-main.jpg',
    toddlerImage: '/assets/about/toddler-play.png',
    floatingStar: '/assets/decorative/sleeping-star.svg',
    floatingRocket: '/assets/decorative/doodle-rocket.svg',
    floatingSwirls: '/assets/decorative/doodle-swirls.svg',
    gradCapIcon: '/assets/decorative/grad-cap.svg',
  },

  stepByStep: {
    heading: 'Step By Step Systematic Education',
    description:
      'We provide an innovative, nurturing and stimulating environment where children develop independence, confidence and a positive sense of self and the world around them. Our curriculum is designed to involve children in experiences that enhance language, literacy, music, movement, art and socialization. Through play, all areas of development are fostered.',
    abacusIcon: '/assets/decorative/doodle-abacus.svg',
    planetDoodle: '/assets/decorative/doodle-planet.svg',
    abcDoodle: '/assets/decorative/doodle-abc.svg',
    pencilDoodle: '/assets/decorative/doodle-pencil.svg',
    montessoriHeading: 'Montessori Methodology',
    montessoriDescription:
      'Isn’t an educational approach that is over 100 years old a little out-dated? After all, the content of what children learn today is utterly different from what they learnt even 10 years ago. Yet the ability that the child has to teach themselves is a psychological fact of the human being that has not changed for at least 10,000 years. Any educational approach designed around what children learn is constantly out-of-date – unlike an educational approach built around how children learn. This is why we say Montessori is ‘timeless education for a changing world’.',
    montessoriImage: '/assets/gallery/playground-1.jpg',
    montessoriHref: '/montessori-methodology',
  },

  features: [
    {
      id: 'montessori',
      title: 'Montessori Methodology',
      description:
        'Timeless education for a changing world. Self-directed activity, hands-on learning, and collaborative play designed to foster intrinsic motivation and critical thinking.',
      color: '#ed145b',
      image: '/assets/gallery/playground-1.jpg',
      href: '/montessori-methodology',
    },
    {
      id: 'curriculum',
      title: 'Curriculum',
      description:
        'A comprehensive, integrated syllabus blending sensorial discovery, language arts, mathematical reasoning, and creative cultural experiences.',
      color: '#1cbbb4',
      image: '/assets/features/curriculum.jpg',
      href: '/curriculum',
    },
    {
      id: 'celebrations',
      title: 'Celebrations',
      description:
        'Vibrant cultural festivities and theme days that build community belonging, social warmth, and an appreciation for global diversity.',
      color: '#f7941e',
      image: '/assets/features/celebrations.jpg',
      href: '/celebrations',
    },
    {
      id: 'music-movement',
      title: 'Music & Movement',
      description:
        'Rhythmic games, melodic exploration, and physical movement sessions that develop vestibular balance, coordination, and creative expression.',
      color: '#0a6375',
      image: '/assets/features/music-movement.jpg',
      href: '/music-movement',
    },
    {
      id: 'field-trips',
      title: 'Field Trips',
      description:
        'Curated experiential journeys to nature gardens, interactive science museums, and community centers extending learning beyond the classroom.',
      color: '#ed145b',
      image: '/assets/features/field-trips.jpg',
      href: '/field-trips',
    },
    {
      id: 'physical-education',
      title: 'Physical Education',
      description:
        'Age-appropriate motor development, splash pool activities, outdoor games, and taekwondo that instill body strength and resilience.',
      color: '#1cbbb4',
      image: '/assets/features/physical-education.jpg',
      href: '/physical-education',
    },
    {
      id: 'speech-drama',
      title: 'Speech And Drama',
      description:
        'Playful storytelling, character dramatization, and voice articulation activities that build stage confidence, empathy, and vocabulary.',
      color: '#f7941e',
      image: '/assets/features/speech-drama.jpg',
      href: '/speech-and-drama',
    },
  ],

  programmes: {
    eyebrow: 'Creative Learning Opportunity For Kids',
    heading: 'Programmes',
    description:
      'Children are uniquely supported to think for themselves and do for themselves. The mixed-aged group of children are free to direct their own learning, and learn quickly to respect the work of people around them.',
    ctaText: 'View More',
    ctaHref: '/programmes',
    list: [
      {
        id: 'mom-and-me',
        title: 'Mom and Me',
        ageRange: '12 months- 18 months',
        bgColor: '#4D4EFF',
        description:
          'A comforting transition for infant and mother, strengthening emotional bonding and introducing sensory-rich group play.',
        image: '/assets/programmes/programme-mom-me.svg',
        href: '/programmes/mom-and-me',
      },
      {
        id: 'play-group',
        title: 'Play Group',
        ageRange: '18 months -24 months',
        bgColor: '#FF994E',
        description:
          'Promoting physical coordination, early social interaction, and sensorial discovery through tactile Montessori materials.',
        image: '/assets/programmes/programme-playgroup.svg',
        href: '/programmes/play-group',
      },
      {
        id: 'pre-nursery',
        title: 'Pre Nursery',
        ageRange: '2 years to 3 years',
        bgColor: '#73BE48',
        description:
          'Encouraging verbal expression, fine motor manipulation, and foundational social confidence in a structured yet playful room.',
        image: '/assets/programmes/programme-prenursery.svg',
        href: '/programmes/pre-nursery-age-group-2-years-to-3-years',
      },
      {
        id: 'nursery',
        title: 'Nursery',
        ageRange: '3 years to 4 years',
        bgColor: '#1CBBB4',
        description:
          'Building phonemic awareness, pre-math concepts, collaborative problem-solving, and creative self-expression.',
        image: '/assets/programmes/programme-nursery.svg',
        href: '/programmes/nursery-age-group-3-years-to-4-years',
      },
      {
        id: 'day-care',
        title: 'Day Care',
        ageRange: '12 months to 12 years',
        bgColor: '#FF994E',
        description:
          'A loving, hygienic haven offering structured routines, wholesome meals, supervised homework time, and enriching afternoon hobbies.',
        image: '/assets/programmes/programme-daycare.svg',
        href: '/programmes/day-care-age-group-12-months-to-12-years',
      },
      {
        id: 'activity-centre',
        title: 'Activity Centre',
        ageRange: '2 years-12 years',
        bgColor: '#73BE48',
        description:
          'Weekend and afternoon clubs spanning skating, martial arts, classical & contemporary dance, vocal music, and public speaking.',
        image: '/assets/programmes/programme-activity.svg',
        href: '/programmes/after-school-activity-center-2-years-12-years',
      },
    ],
  },

  facilities: {
    heading: 'Engaging & Spacious School Campus',
    description:
      'Every corner of our Rohini campus is purposefully crafted to stimulate curiosity, ensure complete physical security, and support child-led discovery.',
    list: [
      {
        id: 'classrooms',
        title: 'Class Room',
        description:
          'Montessori-based, hands-on learning environment equipped with child-sized furniture and sensorial learning apparatus.',
        icon: 'School',
        image: '/assets/facilities/facility-classroom.svg',
      },
      {
        id: 'healthy-foods',
        title: 'Healthy Foods',
        description:
          'Nutritionist-planned, balanced, hygienic meals that cultivate wholesome eating habits and energetic physical wellbeing.',
        icon: 'Utensils',
        image: '/assets/facilities/facility-food.svg',
      },
      {
        id: 'play-area',
        title: 'Play Area',
        description:
          'Safe indoor and outdoor play spaces with uneven tactile surfaces designed to enhance gross motor strength, balance, and spatial awareness.',
        icon: 'Gamepad2',
        image: '/assets/facilities/facility-playarea.svg',
      },
      {
        id: 'transport',
        title: 'Transport',
        description:
          'GPS-enabled, air-conditioned school buses with trained attendants and speed governors ensuring safe, reliable pick-and-drop service.',
        icon: 'Bus',
        image: '/assets/facilities/facility-transport.svg',
      },
    ],
  },

  counters: [
    {
      id: 1,
      // TODO: Replace with official verified statistics from GD Goenka Rohini administration
      value: 500,
      suffix: '+',
      label: 'Students Admission',
    },
    {
      id: 2,
      // TODO: Replace with official verified statistics from GD Goenka Rohini administration
      value: 15,
      suffix: '+',
      label: 'Total No. of Class',
    },
    {
      id: 3,
      // TODO: Replace with official verified statistics from GD Goenka Rohini administration
      value: 25,
      suffix: '+',
      label: 'No. of Teachers',
    },
    {
      id: 4,
      // TODO: Replace with official verified statistics from GD Goenka Rohini administration
      value: 10,
      suffix: '+',
      label: 'Years Experience',
    },
  ],

  infrastructureGallery: {
    eyebrow: 'Engaging and spacious school campus',
    heading: 'Infrastructure',
    description:
      'Take a glimpse inside our vibrant campus designed to ignite young imaginations and ensure safety at every turn.',
    items: [
      {
        id: 1,
        title: 'Montessori Practical Life Room',
        category: 'Classroom',
        image: '/assets/gallery/infra-1.svg',
      },
      {
        id: 2,
        title: 'Sensorial & Cognitive Zone',
        category: 'Montessori',
        image: '/assets/gallery/infra-2.svg',
      },
      {
        id: 3,
        title: 'Interactive Audio-Visual Theatre',
        category: 'Technology',
        image: '/assets/gallery/infra-3.svg',
      },
      {
        id: 4,
        title: 'Safe Soft Play Gymnasium',
        category: 'Play Area',
        image: '/assets/gallery/infra-4.svg',
      },
      {
        id: 5,
        title: 'Creative Art & Clay Studio',
        category: 'Arts',
        image: '/assets/gallery/infra-5.svg',
      },
      {
        id: 6,
        title: 'Splash Pool & Outdoor Arena',
        category: 'Outdoors',
        image: '/assets/gallery/infra-6.svg',
      },
    ],
  },

  activities: {
    heading: 'Smart Activities',
    description:
      'Curated extracurricular engagements designed to cultivate physical agility, creative expression, and collaborative leadership.',
    list: [
      {
        id: 'physical',
        title: 'Physical Activities',
        description:
          'Splash pool, skating, and taekwondo designed to strengthen posture, flexibility, and physical endurance.',
        image: '/assets/activities/activity-physical.svg',
      },
      {
        id: 'team',
        title: 'Team Activities',
        description:
          'Cooperative games and problem-solving group projects that nurture empathy, camaraderie, and early leadership.',
        image: '/assets/activities/activity-team.svg',
      },
      {
        id: 'individual',
        title: 'Individual Activity',
        description:
          'Mindful concentration tasks and self-chosen exercises promoting personal agency, focus, and motor precision.',
        image: '/assets/activities/activity-individual.svg',
      },
      {
        id: 'craft',
        title: 'Craft',
        description:
          'Hands-on paper crafting, origami, and tactile building that hone fine motor dexterity for effortless handwriting.',
        image: '/assets/activities/activity-craft.svg',
      },
      {
        id: 'painting',
        title: 'Painting',
        description:
          'Free-flow finger painting, brush experiments, and color mixing celebrating emotional freedom and aesthetic expression.',
        image: '/assets/activities/activity-painting.svg',
      },
    ],
  },

  blog: {
    eyebrow: 'Our Educational Insights',
    heading: 'News about our Education',
    description:
      'Practical guides, pedagogical advice, and community updates from our early childhood development experts.',
    ctaText: 'View More',
    ctaHref: '/blog',
    posts: [
      {
        id: 'benefits-of-montessori',
        slug: 'the-benefits-of-montessori-based-education-a-comprehensive-guide',
        title: 'The Benefits of Montessori-Based Education: A Comprehensive Guide',
        excerpt:
          'Discover why child-centered Montessori environments cultivate intrinsic discipline, resilient thinking, and deep conceptual comprehension in the formative years.',
        date: 'March 15, 2024',
        author: 'Academic Directorate',
        category: 'Montessori Pedagogy',
        image: '/assets/blog/blog-1.svg',
      },
      {
        id: 'best-play-school',
        slug: 'best-play-school-in-delhi-gd-goenka-la-petite-rohini',
        title: 'Best Play School in Delhi: GD Goenka La Petite Rohini',
        excerpt:
          'What makes GD Goenka La Petite Rohini stand out? A closer look at our safety infrastructure, passionate teachers, and holistic development philosophy.',
        date: 'February 28, 2024',
        author: 'Admissions Desk',
        category: 'Preschool Life',
        image: '/assets/blog/blog-2.svg',
      },
      {
        id: 'importance-of-playschool',
        slug: 'importance-of-playschool-and-their-various-types',
        title: 'Importance of Playschool and Their Various Types: A Parent’s Compass',
        excerpt:
          'Navigating preschool options in Delhi? Understand how playgroups, Montessori houses, and structured nurseries differ and choose the ideal fit for your toddler.',
        date: 'January 19, 2024',
        author: 'Child Psychologist Desk',
        category: 'Parenting Guide',
        image: '/assets/blog/blog-3.svg',
      },
    ],
  },

  newsletter: {
    heading: 'Subscribe To Get the Latest News About us',
    subheading: 'Join our weekly parent newsletter for early childhood tips, events, and campus announcements.',
    placeholder: 'Enter your email address...',
    buttonText: 'Subscribe',
  },

  footer: {
    about:
      'GD Goenka La Petite, Rohini provides an empowering, safe, and joyful early childhood foundation. We nurture young minds to become curious thinkers and compassionate lifelong learners.',
    quickLinks: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Montessori Philosophy', href: '/montessori-methodology' },
      { label: 'School Curriculum', href: '/curriculum' },
      { label: 'Admission Process', href: '/admissions/application-process' },
      { label: 'Fee Structure & Eligibility', href: '/admissions/eligibility-fee' },
      { label: 'Contact & Campus Visit', href: '/contact-us' },
    ],
    programmeLinks: [
      { label: 'Mom and Me', href: '/programmes/mom-and-me' },
      { label: 'Play Group', href: '/programmes/play-group' },
      { label: 'Pre Nursery', href: '/programmes/pre-nursery-age-group-2-years-to-3-years' },
      { label: 'Nursery', href: '/programmes/nursery-age-group-3-years-to-4-years' },
      { label: 'Day Care', href: '/programmes/day-care-age-group-12-months-to-12-years' },
      { label: 'Activity Center', href: '/programmes/after-school-activity-center-2-years-12-years' },
    ],
    galleryHeading: 'Our Galleries',
    galleryBlurb: 'Capturing joyful daily moments of discovery, laughter, and friendship across our campus.',
    galleryThumbnails: [
      { id: 1, title: 'Classroom Exploration', image: '/assets/footer-gallery/thumb-1.svg' },
      { id: 2, title: 'Outdoor Play', image: '/assets/footer-gallery/thumb-2.svg' },
      { id: 3, title: 'Arts & Crafts', image: '/assets/footer-gallery/thumb-3.svg' },
      { id: 4, title: 'Music & Dance', image: '/assets/footer-gallery/thumb-4.svg' },
      { id: 5, title: 'Sensorial Fun', image: '/assets/footer-gallery/thumb-5.svg' },
      { id: 6, title: 'Storytelling Time', image: '/assets/footer-gallery/thumb-6.svg' },
      { id: 7, title: 'Splash Pool Activity', image: '/assets/footer-gallery/thumb-7.svg' },
      { id: 8, title: 'Sports Day Practice', image: '/assets/footer-gallery/thumb-8.svg' },
      { id: 9, title: 'Annual Celebration', image: '/assets/footer-gallery/thumb-9.svg' },
    ],
    copyright: `© ${new Date().getFullYear()} GD Goenka La Petite, Rohini. All Rights Reserved.`,
    legalLinks: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
};
