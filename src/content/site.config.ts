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
    name: 'IJMA International Model School',
    subName: 'Topsia, Kolkata',
    fullName: 'IJMA INTERNATIONAL MODEL SCHOOL, Topsia, Kolkata',
    urduName: 'إجماع انترنیشنل ماڈل اسکول',
    arabicMotto: 'اَلْعِلْمُ نُوْرٌ',
    tagline: 'Al-Ilmu Noorun (Knowledge is Light)',
    motto: 'English Medium CBSE Curriculum with Islamic Education | ...Sky is the limit',
    description:
      'IJMA International Model School is a premier English medium Islamic school located in Topsia, Kolkata. We blend CBSE academic excellence with timeless Islamic values, Quranic understanding, STEM & Robotics innovation, Martial Arts, and holistic character building.',
    logo: '/assets/ijma/photos/Logo.jpeg',
    affiliation: 'English Medium CBSE Curriculum with Islamic Education (Class: Nursery to XII - Proposed)',
    estd: '2022',
  },

  contact: {
    address: '9/1, Topsia Road South, Topsia, Kolkata – 700046, West Bengal, India',
    landmark: 'Topsia South, Near EM Bypass Connector',
    phones: ['+91 75408 55755', '+91 98316 23162'],
    primaryPhone: '+917540855755',
    email: 'info@ijmaschool.com',
    hours: 'Mon - Sat: 8:30 AM - 3:30 PM',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14740.354152864696!2d88.3842!3d22.5401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276eb1c28c687%3A0x6b876e5d2634e2c!2sTopsia%2C%20Kolkata%2C%20West%20Bengal%20700046!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },

  socials: {
    facebook: 'https://www.facebook.com/IjmaInternationalModelSchool',
    instagram: 'https://www.instagram.com/ijmainternationalmodelschool/',
    youtube: 'https://www.youtube.com/@IjmaInternationalModelSchool',
  },

  navigation: [
    { label: 'Home', href: '/' },
    {
      label: 'About Us',
      href: '/about-us',
      children: [
        {
          label: 'Our Vision & Mission',
          href: '/about-us#vision-mission',
          description: 'Blending CBSE excellence with Islamic ethics, Tarbiyah, and leadership.',
        },
        {
          label: 'Islamic Philosophy & Values',
          href: '/about-us#islamic-values',
          description: 'Rooted in Quranic guidance, Akhlaq, and contemporary scientific thought.',
        },
        {
          label: 'Topsia Kolkata Campus',
          href: '/about-us#campus',
          description: 'Modern smart air-conditioned classrooms, STEM labs, and sports arenas.',
        },
      ],
    },
    {
      label: 'Academics',
      href: '/academics',
      isMega: true,
      megaTitle: 'Academic Wings & Islamic Studies',
      megaImage: '/assets/ijma/photos/Art-class.jpg',
      children: [
        {
          label: 'Pre-Primary & Montessori (Nursery - KG)',
          href: '/programmes',
          description: 'Sensory-rich foundation combining Montessori hands-on learning with early Islamic etiquette.',
        },
        {
          label: 'Primary Wing (Classes I - V)',
          href: '/academics#primary',
          description: 'CBSE curriculum fostering literacy, mathematics, science, Arabic, and Islamic studies.',
        },
        {
          label: 'Middle Wing (Classes VI - VIII)',
          href: '/academics#middle',
          description: 'Advanced STEM projects, languages (English, Urdu, Hindi, Bengali, Arabic), and Tarbiyah.',
        },
        {
          label: 'Secondary Wing (Classes IX - XII Proposed)',
          href: '/academics#secondary',
          description: 'Comprehensive CBSE board preparation with holistic moral grounding.',
        },
        {
          label: 'Islamic Studies & Quran Hifz',
          href: '/academics#islamic-studies',
          description: 'Tajweed, memorization, daily Duas, Islamic history, and moral character education.',
        },
        {
          label: 'STEM, Coding & Robotics',
          href: '/academics#stem',
          description: 'Hands-on electronic circuits, robotic cars, and scientific inquiry from young ages.',
        },
      ],
    },
    {
      label: 'Campus Life',
      href: '/campus-life',
      children: [
        { label: 'Annual Sports Meet', href: '/campus-life#sports' },
        { label: 'Karate & Self Defence', href: '/campus-life#karate' },
        { label: 'Art, Maths & Science Exhibitions', href: '/campus-life#exhibitions' },
        { label: 'Parent-Teacher Orientation (PTM)', href: '/campus-life#ptm' },
        { label: 'National Education Day Celebrations', href: '/campus-life#events' },
      ],
    },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Videos', href: '/videos' },
    {
      label: 'Admissions',
      href: '/admissions',
      children: [
        { label: 'Application Form', href: '/admissions/application-form' },
        { label: 'Application Process', href: '/admissions/application-process' },
        { label: 'Eligibility & Fees', href: '/admissions/eligibility-fee' },
      ],
    },
    { label: 'Contact Us', href: '/contact-us' },
  ] as NavItem[],

  heroSlides: [
    {
      id: 1,
      badge: 'Welcome to IJMA International Model School',
      title: 'Empowering Minds, Nurturing Faith',
      subtitle: 'English Medium CBSE Curriculum with Islamic Education • Topsia, Kolkata',
      description:
        'Cultivating curious minds and noble character through a balanced blend of academic excellence, Quranic values, hands-on STEM & Robotics, and physical fitness.',
      ctaText: 'Apply For Admission',
      ctaHref: '/admissions/application-form',
      image: '/assets/ijma/photos/Runnig-student-in-sports-meet.jpg',
    },
    {
      id: 2,
      badge: 'STEM & Innovation Excellence',
      title: 'Inspiring Future Innovators',
      subtitle: 'Hands-on Robotics, Science Labs & Creative Mathematics',
      description:
        'Equipping students with modern scientific inquiry, electronic circuitry, mechanical robotics, and critical thinking skills in air-conditioned smart labs.',
      ctaText: 'Explore Academics',
      ctaHref: '/academics',
      image: '/assets/ijma/photos/Art-class.jpg',
    },
    {
      id: 3,
      badge: 'Character, Discipline & Sports',
      title: 'Excellence in Faith & Action',
      subtitle: 'Karate Martial Arts, Annual Sports Meet & National Education Day',
      description:
        'Building resilience, self-defense, leadership, and moral rectitude through certified Karate sessions, sports tournaments, and award ceremonies.',
      ctaText: 'View Campus Life',
      ctaHref: '/campus-life',
      image: '/assets/ijma/photos/Prize-Distirbution-serimony.jpg',
    },
  ],

  about: {
    eyebrow: 'About Our Institution',
    heading: 'We Nurture Knowledge, Faith & Essential Life Skills!',
    arabicCalligraphy: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ • اَلْعِلْمُ نُوْرٌ',
    paragraph1:
      'Welcome to IJMA INTERNATIONAL MODEL SCHOOL (إجماع انترنیشنل ماڈل اسکول), conveniently situated at 9/1, Topsia Road South, Kolkata. Established in 2022, our institution is dedicated to offering a distinguished English Medium education following the CBSE curriculum, seamlessly infused with timeless Islamic education and character development (Tarbiyah).',
    paragraph2:
      'In a supportive, modern, and morally uplifting atmosphere, we empower boys and girls to attain academic excellence while remaining firmly grounded in Islamic ethics, Quranic understanding, mutual respect, and social responsibility.',
    ctaText: 'Discover More About Us',
    ctaHref: '/about-us',
    mainImage: '/assets/ijma/photos/Parent-tyeacher-meeting.jpeg',
    toddlerImage: '/assets/ijma/photos/Runnig-student-in-sports-meet.jpg',
    floatingStar: '/assets/decorative/sleeping-star.svg',
    floatingRocket: '/assets/decorative/doodle-rocket.svg',
    floatingSwirls: '/assets/decorative/doodle-swirls.svg',
    gradCapIcon: '/assets/decorative/grad-cap.svg',
  },

  stepByStep: {
    heading: 'Holistic & Systematic Educational Journey',
    description:
      'At IJMA International Model School, our curriculum integrates CBSE academic standards with Islamic studies, language mastery (English, Arabic, Urdu, Hindi, Bengali), practical STEM inquiry, and physical self-defense training to foster well-rounded Muslim scholars and leaders.',
    abacusIcon: '/assets/decorative/doodle-abacus.svg',
    planetDoodle: '/assets/decorative/doodle-planet.svg',
    abcDoodle: '/assets/decorative/doodle-abc.svg',
    pencilDoodle: '/assets/decorative/doodle-pencil.svg',
    montessoriHeading: 'Islamic Tarbiyah & Modern CBSE Pedagogy',
    montessoriDescription:
      'Education is not merely the transmission of data; it is the illumination of the mind and the purification of the heart ("Al-Ilmu Noorun"). We believe true success lies in harmonizing secular academic achievement with divine moral purpose. Our state-of-the-art interactive smart classrooms, robotics kits, and dedicated faculty guide each child towards intellectual brilliance and moral integrity.',
    montessoriImage: '/assets/ijma/photos/Art-class.jpg',
    montessoriHref: '/academics',
  },

  features: [
    {
      id: 'islamic-education',
      title: 'Islamic Studies & Tarbiyah',
      description:
        'Quran recitation with Tajweed, daily Duas, Hadith studies, Seerah of Prophet Muhammad (PBUH), and foundational 7 Pillars of Faith (Iman).',
      color: '#0a6348',
      image: '/assets/ijma/photos/photo_prize.jpeg',
      href: '/academics#islamic-studies',
    },
    {
      id: 'stem-robotics',
      title: 'STEM & Robotics Lab',
      description:
        'Hands-on engineering kits, motorized robotic cars, circuit design, and mechanical gears that awaken scientific curiosity and inventive minds.',
      color: '#1cbbb4',
      image: '/assets/ijma/photos/Art-class.jpg',
      href: '/academics#stem',
    },
    {
      id: 'karate-martial-arts',
      title: 'Karate & Self Defence',
      description:
        'Structured martial arts training under certified senseis, teaching discipline, mental focus, physical fitness, and vital self-defense skills.',
      color: '#ed145b',
      image: '/assets/ijma/photos/Kerate-session.jpeg',
      href: '/campus-life#karate',
    },
    {
      id: 'exhibitions-projects',
      title: 'Art, Maths & Science Exhibitions',
      description:
        'Annual multi-disciplinary exhibitions where students design models, science dioramas, geometry charts, and present their innovations to visitors.',
      color: '#f7941e',
      image: '/assets/ijma/photos/Art-exibition.jpeg',
      href: '/campus-life#exhibitions',
    },
    {
      id: 'annual-sports',
      title: 'Annual Sports & Athletics',
      description:
        'Sprint races, athletics tournaments, and team sports on green synthetic turf promoting health, sportsmanship, and teamwork.',
      color: '#0a6375',
      image: '/assets/ijma/photos/Runnig-student-in-sports-meet.jpg',
      href: '/campus-life#sports',
    },
    {
      id: 'smart-classrooms',
      title: 'Interactive Smart Classrooms',
      description:
        'Air-conditioned classrooms outfitted with Interactive Flat Displays, digital audio-visual resources, and ergonomically designed furniture.',
      color: '#1cbbb4',
      image: '/assets/ijma/photos/Parent-tyeacher-meeting.jpeg',
      href: '/about-us#campus',
    },
    {
      id: 'academic-awards',
      title: 'Celebrations & National Education Day',
      description:
        'Commemorating Maulana Abul Kalam Azad Birth Anniversary, academic merit awards, and cultural commemorations in Topsia, Kolkata.',
      color: '#f7941e',
      image: '/assets/ijma/photos/Best-student-prize-distribution.jpeg',
      href: '/campus-life#events',
    },
  ],

  programmes: {
    eyebrow: 'Comprehensive Academic Wings',
    heading: 'Programmes & Wings',
    description:
      'From foundational early childhood to senior secondary, IJMA International Model School nurtures students through age-appropriate curricula, experienced teachers, and Islamic values.',
    ctaText: 'View All Wings',
    ctaHref: '/academics',
    list: [
      {
        id: 'playgroup-nursery',
        title: 'Pre-Nursery & Nursery',
        ageRange: 'Age: 2.5 – 4 Years',
        bgColor: '#4D4EFF',
        description:
          'Nurturing sensory exploration, phonics, motor coordination, Islamic adab (etiquettes), and joyful play-based discovery.',
        image: '/assets/ijma/photos/Art-class.jpg',
        href: '/programmes',
      },
      {
        id: 'kindergarten',
        title: 'KG & Preparatory',
        ageRange: 'Age: 4 – 6 Years',
        bgColor: '#FF994E',
        description:
          'Early literacy, number concepts, basic Arabic alphabets, Dua memorization, and collaborative socialization.',
        image: '/assets/ijma/photos/teacher-watching-art-of the-students.jpeg',
        href: '/programmes',
      },
      {
        id: 'primary-wing',
        title: 'Primary Wing (Classes I - V)',
        ageRange: 'Age: 6 – 10 Years',
        bgColor: '#73BE48',
        description:
          'CBSE foundation in English, Mathematics, EVS, Languages, Tajweed, Islamic Studies, and introductory STEM robotics.',
        image: '/assets/ijma/photos/Runnig-student-in-sports-meet.jpg',
        href: '/academics#primary',
      },
      {
        id: 'middle-wing',
        title: 'Middle Wing (Classes VI - VIII)',
        ageRange: 'Age: 11 – 14 Years',
        bgColor: '#1CBBB4',
        description:
          'In-depth science labs, advanced mathematics, computer coding, social sciences, Quranic comprehension, and Karate.',
        image: '/assets/ijma/photos/Art-exibition.jpeg',
        href: '/academics#middle',
      },
      {
        id: 'secondary-wing',
        title: 'Secondary (Classes IX - X)',
        ageRange: 'Age: 14 – 16 Years',
        bgColor: '#FF994E',
        description:
          'Rigorous CBSE board exam preparation, critical problem solving, laboratory practicals, and ethical leadership.',
        image: '/assets/ijma/photos/Best-student-prize-distribution.jpeg',
        href: '/academics#secondary',
      },
      {
        id: 'co-curricular',
        title: 'Co-Curricular & Enrichment',
        ageRange: 'All Age Groups',
        bgColor: '#73BE48',
        description:
          'After-school Karate academy, Science and Art exhibition workshops, speech and calligraphy competitions.',
        image: '/assets/ijma/photos/Kerate-session.jpeg',
        href: '/campus-life',
      },
    ],
  },

  facilities: {
    eyebrow: 'School Facilities & Infrastructure',
    heading: 'State-of-the-Art Islamic Model Campus',
    description:
      'Situated in Topsia, Kolkata, our campus features fully air-conditioned, digitally enabled classrooms, interactive flat panels, dedicated STEM & robotics learning corners, and safe synthetic turf athletic grounds.',
    list: [
      {
        id: 'smart-classrooms',
        title: 'Smart Classrooms',
        description:
          'Air-conditioned classrooms equipped with large Interactive Flat Panel displays for engaging multimedia lessons.',
        ctaText: 'View More',
        ctaHref: '/about-us#campus',
        icon: '/assets/decorative/doodle-book.svg',
      },
      {
        id: 'stem-lab',
        title: 'Robotics & STEM Lab',
        description:
          'Hands-on experimental facility where students build motorized robots, gear systems, circuits, and science models.',
        ctaText: 'View More',
        ctaHref: '/academics#stem',
        icon: '/assets/decorative/doodle-book.svg',
      },
      {
        id: 'sports-arena',
        title: 'Sports & Karate Arena',
        description:
          'Synthetic turf field for athletics, sprint races, and martial arts dojo for Karate training and physical stamina.',
        ctaText: 'View More',
        ctaHref: '/campus-life#sports',
        icon: '/assets/decorative/doodle-slide.svg',
      },
      {
        id: 'transport',
        title: 'Safe School Transport',
        description:
          'Dedicated school bus and pick-and-drop transport facility serving Topsia, Park Circus, EM Bypass, and surrounding areas of Kolkata.',
        ctaText: 'View More',
        ctaHref: '/contact-us',
        icon: '/assets/decorative/doodle-bus.svg',
      },
    ],
  },

  counters: [
    {
      id: 1,
      value: 1200,
      suffix: '+',
      label: 'Students Enrolled',
      icon: '/assets/decorative/counter-icon-0.svg',
    },
    {
      id: 2,
      value: 25,
      suffix: '+',
      label: 'Smart Air-Conditioned Classrooms',
      icon: '/assets/decorative/counter-icon-1.svg',
    },
    {
      id: 3,
      value: 50,
      suffix: '+',
      label: 'Dedicated & Qualified Faculty',
      icon: '/assets/decorative/counter-icon-2.svg',
    },
    {
      id: 4,
      value: 2022,
      suffix: '',
      label: 'Year Established in Kolkata',
      icon: '/assets/decorative/counter-icon-3.svg',
    },
  ],

  infrastructureGallery: {
    eyebrow: 'Glimpse into Our Dynamic School Campus',
    heading: 'Campus & Activities Gallery',
    description:
      'Explore life at IJMA International Model School — from athletic triumphs on the sports track to robotics innovations in our science classrooms.',
    items: [
      {
        id: 1,
        title: 'Annual Sports Meet & Sprint Races',
        category: 'Athletics',
        image: '/assets/ijma/photos/Runnig-student-in-sports-meet.jpg',
      },
      {
        id: 2,
        title: 'STEM & Robotics Innovation Class',
        category: 'Robotics',
        image: '/assets/ijma/photos/Art-class.jpg',
      },
      {
        id: 3,
        title: 'Karate & Self Defence Practice',
        category: 'Martial Arts',
        image: '/assets/ijma/photos/Kerate-session.jpeg',
      },
      {
        id: 4,
        title: 'Science & Art Project Exhibition',
        category: 'Exhibitions',
        image: '/assets/ijma/photos/Art-exibition.jpeg',
      },
      {
        id: 5,
        title: 'Interactive Smart Classroom & Orientation',
        category: 'Smart Learning',
        image: '/assets/ijma/photos/Parent-tyeacher-meeting.jpeg',
      },
      {
        id: 6,
        title: 'National Education Day Prize Distribution',
        category: 'Achievements',
        image: '/assets/ijma/photos/Best-student-prize-distribution.jpeg',
      },
    ],
  },

  activities: {
    heading: 'Smart Activities & Co-Curriculars',
    description:
      'Hands-on holistic development combining Islamic tarbiyah, mental agility, creative expression, and athletic self-defense.',
    list: [
      {
        id: 'physical',
        title: 'Karate & Athletics',
        description:
          'Rigorous martial arts and sprint races strengthening posture, stamina, and self-confidence.',
        image: '/assets/activities/activity-physical.svg',
      },
      {
        id: 'team',
        title: 'Science & Maths Projects',
        description:
          'Collaborative student projects and models demonstrating scientific principles and mathematical logic.',
        image: '/assets/activities/activity-team.svg',
      },
      {
        id: 'individual',
        title: 'Islamic Values & Tarbiyah',
        description:
          'Quran memorization, daily Sunnah adab, and character development workshops cultivating empathy and faith.',
        image: '/assets/activities/activity-individual.svg',
      },
      {
        id: 'craft',
        title: 'STEM & Robotics',
        description:
          'Hands-on building of electronic gear cars and robotic contraptions fostering young inventors.',
        image: '/assets/activities/activity-craft.svg',
      },
      {
        id: 'painting',
        title: 'Art & Exhibitions',
        description:
          'Creative drawing, painting, and public speaking presentations at our annual school exhibitions.',
        image: '/assets/activities/activity-painting.svg',
      },
    ],
  },

  // Real School Videos from Ijma-School/Videos
  videoShowcase: [
    {
      id: 'video-1',
      title: 'Art & Maths Project Explanation',
      description: 'Students proudly presenting their multi-disciplinary 3D projects and mathematical models.',
      src: '/assets/ijma/videos/Art-and-maths-project.mp4',
      thumbnail: '/assets/ijma/photos/Art-exibition.jpeg',
      category: 'Projects',
    },
    {
      id: 'video-2',
      title: 'Art Project Exhibition Walkthrough',
      description: 'A comprehensive tour of creative student artwork and historical science models.',
      src: '/assets/ijma/videos/Art-project-xehibition.mp4',
      thumbnail: '/assets/ijma/photos/teacher-watching-art-of the-students.jpeg',
      category: 'Exhibitions',
    },
    {
      id: 'video-3',
      title: 'Student Explaining Project Innovations',
      description: 'Young scholars demonstrating scientific concepts with clarity and confidence.',
      src: '/assets/ijma/videos/Student-xeplaning-their-art-project.mp4',
      thumbnail: '/assets/ijma/photos/Art-class.jpg',
      category: 'Presentations',
    },
    {
      id: 'video-4',
      title: 'Academic Seminar & Workshop',
      description: 'Teachers and students engaged in collaborative seminar and educational activities.',
      src: '/assets/ijma/videos/Art-seminer.mp4',
      thumbnail: '/assets/ijma/photos/Parent-tyeacher-meeting.jpeg',
      category: 'Seminars',
    },
    {
      id: 'video-5',
      title: 'Project Exhibitions & Demonstrations',
      description: 'Students explaining real-world applications of their handmade science dioramas.',
      src: '/assets/ijma/videos/Project-exhibitions.mp4',
      thumbnail: '/assets/ijma/photos/Best-student-prize-distribution.jpeg',
      category: 'Exhibitions',
    },
    {
      id: 'video-6',
      title: 'Annual Sports & Campus Activities',
      description: 'Highlights of student sports competitions, drills, and campus enthusiasm.',
      src: '/assets/ijma/videos/WhatsApp Video 2026-11-21 at 1.52.38 PM.mp4',
      thumbnail: '/assets/ijma/photos/Runnig-student-in-sports-meet.jpg',
      category: 'Campus Life',
    },
  ],

  blog: {
    eyebrow: 'News & Educational Insights',
    heading: 'Latest Updates & Articles',
    description:
      'Discover educational insights, campus achievements, and parent guides from IJMA International Model School in Topsia, Kolkata.',
    ctaText: 'View All News',
    ctaHref: '/blog',
    posts: [
      {
        id: 'national-education-day-celebration',
        slug: 'national-education-day-celebration-ijma-international-model-school-kolkata',
        title: 'Commemorating National Education Day & Maulana Azad Birth Anniversary at IJMA',
        excerpt:
          'Students and faculty celebrated National Education Day with prize distributions, inspiring speeches, and reflections on the vital importance of knowledge in Islam.',
        date: 'November 15, 2026',
        author: 'Principal Desk',
        category: 'Campus Events',
        image: '/assets/ijma/photos/Best-student-prize-distribution.jpeg',
      },
      {
        id: 'stem-robotics-islamic-schools',
        slug: 'stem-robotics-education-in-islamic-schools-ijma-kolkata',
        title: 'Why STEM & Robotics are Integral to Islamic Education at IJMA Topsia',
        excerpt:
          'How our hands-on robotics and science labs nurture critical thinking, innovation, and problem-solving skills rooted in ethical responsibility.',
        date: 'October 28, 2026',
        author: 'STEM Faculty',
        category: 'Academics',
        image: '/assets/ijma/photos/Art-class.jpg',
      },
      {
        id: 'annual-sports-meet-highlights',
        slug: 'annual-sports-meet-and-karate-highlights-ijma-kolkata',
        title: 'Highlights of Our Annual Sports Meet & Certified Karate Demonstrations',
        excerpt:
          'Celebrating physical fitness, teamwork, and martial arts self-defense skills on the green turf at IJMA International Model School in Kolkata.',
        date: 'September 19, 2026',
        author: 'Sports Directorate',
        category: 'Sports & Fitness',
        image: '/assets/ijma/photos/Runnig-student-in-sports-meet.jpg',
      },
    ],
  },

  newsletter: {
    heading: 'Subscribe For School Updates & Announcements',
    subheading: 'Stay connected with admissions announcements, event schedules, and academic tips from IJMA Topsia, Kolkata.',
    placeholder: 'Enter your email address...',
    buttonText: 'Subscribe',
  },

  footer: {
    about:
      'IJMA INTERNATIONAL MODEL SCHOOL (إجماع انترنیشنل ماڈل اسکول) is an English Medium Islamic school in Topsia, Kolkata offering CBSE curriculum with Islamic studies, STEM robotics, and sports. Nurturing faith and intellect under the motto "Al-Ilmu Noorun" (Knowledge is Light).',
    quickLinks: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Academics & CBSE', href: '/academics' },
      { label: 'Campus Life & Sports', href: '/campus-life' },
      { label: 'Photo Gallery', href: '/gallery' },
      { label: 'Video Showcase', href: '/videos' },
      { label: 'Admission Process', href: '/admissions/application-process' },
      { label: 'Contact & Location', href: '/contact-us' },
    ],
    programmeLinks: [
      { label: 'Pre-Nursery & Nursery', href: '/programmes' },
      { label: 'KG & Preparatory', href: '/programmes' },
      { label: 'Primary Wing (Classes I - V)', href: '/academics#primary' },
      { label: 'Middle Wing (Classes VI - VIII)', href: '/academics#middle' },
      { label: 'Secondary (Classes IX - XII)', href: '/academics#secondary' },
      { label: 'Karate & STEM Clubs', href: '/campus-life' },
    ],
    galleryHeading: 'Campus Moments',
    galleryBlurb: 'Real snapshots of learning, robotics, athletics, and celebrations at IJMA Kolkata.',
    galleryThumbnails: [
      { id: 1, title: 'Annual Sports Meet', image: '/assets/ijma/photos/Runnig-student-in-sports-meet.jpg' },
      { id: 2, title: 'Robotics & STEM Lab', image: '/assets/ijma/photos/Art-class.jpg' },
      { id: 3, title: 'Karate Martial Arts', image: '/assets/ijma/photos/Kerate-session.jpeg' },
      { id: 4, title: 'Science Exhibition', image: '/assets/ijma/photos/Art-exibition.jpeg' },
      { id: 5, title: 'Smart Classroom & PTM', image: '/assets/ijma/photos/Parent-tyeacher-meeting.jpeg' },
      { id: 6, title: 'Prize Ceremony', image: '/assets/ijma/photos/Prize-Distirbution-serimony.jpg' },
      { id: 7, title: 'National Education Day', image: '/assets/ijma/photos/Best-student-prize-distribution.jpeg' },
      { id: 8, title: 'Art & Design', image: '/assets/ijma/photos/teacher-watching-art-of the-students.jpeg' },
      { id: 9, title: 'Karate Belt Training', image: '/assets/ijma/photos/Kerate-class-2.jpeg' },
    ],
    copyright: `© ${new Date().getFullYear()} IJMA INTERNATIONAL MODEL SCHOOL, Topsia, Kolkata. All Rights Reserved.`,
    legalLinks: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/privacy-policy' },
    ],
  },
};
