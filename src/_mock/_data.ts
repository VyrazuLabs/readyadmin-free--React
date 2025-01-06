import {
  _id,
  _price,
  _times,
  _company,
  _boolean,
  _fullName,
  _taskNames,
  _productNames,
} from './_mock';

// ----------------------------------------------------------------------

export const _myAccount = {
  displayName: 'John Doe',
  email: 'example123@gmail.com',
  photoURL: '/assets/images/avatar/avatar-5.png',
};

// ----------------------------------------------------------------------

export const _users = [...Array(24)].map((_, index) => ({
  id: _id(index),
  name: _fullName(index),
  company: _company(index),
  isVerified: _boolean(index),
  avatarUrl: `/assets/images/avatar/avatar-${index + 1}.png`,
  status: index % 4 ? 'active' : 'banned',
  role:
    [
      'Leader',
      'HR Manager',
      'UI Designer',
      'UX Designer',
      'UI/UX Designer',
      'Project Manager',
      'Backend Developer',
      'Full Stack Designer',
      'Front End Developer',
      'Full Stack Developer',
    ][index] || 'UI Designer',
}));

// ----------------------------------------------------------------------

const COLORS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

export const _products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: _id(index),
    price: _price(index),
    name: _productNames(index),
    priceSale: setIndex % 3 ? null : _price(index),
    coverUrl: `/assets/images/product/product-${setIndex}.webp`,
    colors:
      (setIndex === 1 && COLORS.slice(0, 2)) ||
      (setIndex === 2 && COLORS.slice(1, 3)) ||
      (setIndex === 3 && COLORS.slice(2, 4)) ||
      (setIndex === 4 && COLORS.slice(3, 6)) ||
      (setIndex === 23 && COLORS.slice(4, 6)) ||
      (setIndex === 24 && COLORS.slice(5, 6)) ||
      COLORS,
    status:
      ([1, 3, 5].includes(setIndex) && 'sale') || ([4, 8, 12].includes(setIndex) && 'new') || '',
  };
});

// ----------------------------------------------------------------------

export const _langs = [
  {
    value: 'in',
    label: 'Hindi',
    icon: '/assets/icons/flags/ic-flag-in.svg',
  },
  {
    value: 'us',
    label: 'English',
    icon: '/assets/icons/flags/ic-flag-us.svg',
  },
  {
    value: 'ru',
    label: 'Russian',
    icon: '/assets/icons/flags/ic-flag-ru.svg',
  },
];

// ----------------------------------------------------------------------

export const _timeline = [...Array(5)].map((_, index) => ({
  id: _id(index),
  title: [
    '1983, orders, $4220',
    '12 Invoices have been paid',
    'Order #37745 from September',
    'New order placed #XF-2356',
    'New order placed #XF-2346',
  ][index],
  type: `order${index + 1}`,
  time: _times(index),
}));

// ----------------------------------------------------------------------

export const _tasks = [...Array(5)].map((_, index) => ({
  id: _id(index),
  name: _taskNames(index),
}));

// ----------------------------------------------------------------------

export const _notifications = [
  {
    id: _id(1),
    title: 'Your order is placed',
    description: 'waiting for shipping',
    avatarUrl: null,
    type: 'order-placed',
    postedAt: _times(1),
    isUnRead: true,
  },
  {
    id: _id(2),
    title: _fullName(2),
    description: 'answered to your comment on the Minimal',
    avatarUrl: '/assets/images/avatar/avatar-2.png',
    type: 'friend-interactive',
    postedAt: _times(2),
    isUnRead: true,
  },
  {
    id: _id(3),
    title: 'You have new message',
    description: '5 unread messages',
    avatarUrl: null,
    type: 'chat-message',
    postedAt: _times(3),
    isUnRead: false,
  },
  {
    id: _id(4),
    title: 'You have new mail',
    description: 'sent from Guido Padberg',
    avatarUrl: null,
    type: 'mail',
    postedAt: _times(4),
    isUnRead: false,
  },
  {
    id: _id(5),
    title: 'Delivery processing',
    description: 'Your order is being shipped',
    avatarUrl: null,
    type: 'order-shipped',
    postedAt: _times(5),
    isUnRead: false,
  },
];

export const userProfileInfo = {
  firstName: 'John',
  lastName: 'Doe',
  profilePicture: '/assets/images/avatar/avatar-3.png',
  position: 'CTO',
  followers: 1658,
  following: 22147,
  country: 'United States',
  state: 'Virginia',
  address: '908 Jack Locks',
  city: 'Richmond',
  zip: 85807,
  phone: '4165550198',
  about:
    'Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..',
  location: 'California',
  email: 'example@gmail.com',
  companyName: 'Netflix',
  college: 'MIT',
  socials: [
    {
      networkName: 'Facebook',
      profileURL: 'www.facebook.com/john_doe',
      icon: 'line-md:facebook',
    },
    {
      networkName: 'Instagram',
      profileURL: 'www.instagram.com/john_doe',
      icon: 'line-md:instagram',
    },
    {
      networkName: 'LinkedIn',
      profileURL: 'www.linkedin.com/john_doe',
      icon: 'line-md:linkedin',
    },
    {
      networkName: 'Twitter',
      profileURL: 'www.twitter.com/john_doe',
      icon: 'line-md:twitter',
    },
  ],
  posts: [
    {
      postDate: '2024-10-01',
      postDescription: 'Enjoying a beautiful day at the park!',
      numberOfLikes: 150,
      comments: [
        {
          userName: 'Emily Johnson',
          profilePicture: '/assets/images/avatar/avatar-1.png',
          comment: 'Looks like a great day!',
          commentDate: '2024-10-01',
        },
        {
          userName: 'Michael Smith',
          profilePicture: '/assets/images/avatar/avatar-2.png',
          comment: 'Wish I could be there!',
          commentDate: '2024-10-01',
        },
      ],
      postMedia: '/assets/images/cover/cover-1.webp',
    },
    {
      postDate: '2024-10-02',
      postDescription: 'Tried a new recipe today!',
      numberOfLikes: 85,
      comments: [],
      postMedia: '/assets/images/cover/cover-5.webp',
    },
    {
      postDate: '2024-10-03',
      postDescription: 'Sunset views from my balcony.',
      numberOfLikes: 220,
      comments: [
        {
          userName: 'Sophia Brown',
          profilePicture: '/assets/images/avatar/avatar-5.png',
          comment: 'Absolutely stunning!',
          commentDate: '2024-10-03',
        },
      ],
      postMedia: '/assets/images/cover/cover-24.webp',
    },
    {
      postDate: '2024-10-04',
      postDescription: 'Game night with friends!',
      numberOfLikes: 300,
      comments: [
        {
          userName: 'Olivia Davis',
          profilePicture: '/assets/images/avatar/avatar-11.png',
          comment: 'Had such a blast!',
          commentDate: '2024-10-04',
        },
        {
          userName: 'James Wilson',
          profilePicture: '/assets/images/avatar/avatar-15.png',
          comment: 'Can’t wait for the next one!',
          commentDate: '2024-10-04',
        },
      ],
      postMedia: '/assets/images/product/product-4.webp',
    },
    {
      postDate: '2024-10-05',
      postDescription: 'Just finished a great book.',
      numberOfLikes: 50,
      comments: [],
      postMedia: '/assets/images/cover/cover-6.webp',
    },
  ],
  followersList: [
    {
      fullName: 'Alice Johnson',
      location: 'New York, NY',
      profilePicture: '/assets/images/avatar/avatar-1.png',
      isFollowing: true,
      profession: 'Software Engineer',
    },
    {
      fullName: 'Michael Smith',
      location: 'Los Angeles, CA',
      profilePicture: '/assets/images/avatar/avatar-2.png',
      isFollowing: false,
      profession: 'Graphic Designer',
    },
    {
      fullName: 'Emma Brown',
      location: 'Chicago, IL',
      profilePicture: '/assets/images/avatar/avatar-3.png',
      isFollowing: true,
      profession: 'Product Manager',
    },
    {
      fullName: 'Daniel Garcia',
      location: 'Houston, TX',
      profilePicture: '/assets/images/avatar/avatar-5.png',
      isFollowing: false,
      profession: 'Marketing Specialist',
    },
    {
      fullName: 'Sophia Martinez',
      location: 'Phoenix, AZ',
      profilePicture: '/assets/images/avatar/avatar-6.png',
      isFollowing: true,
      profession: 'Data Scientist',
    },
    {
      fullName: 'James Wilson',
      location: 'Philadelphia, PA',
      profilePicture: '/assets/images/avatar/avatar-9.png',
      isFollowing: false,
      profession: 'Business Analyst',
    },
    {
      fullName: 'Olivia Anderson',
      location: 'San Antonio, TX',
      profilePicture: '/assets/images/avatar/avatar-6.png',
      isFollowing: true,
      profession: 'UX/UI Designer',
    },
    {
      fullName: 'Benjamin Thomas',
      location: 'San Diego, CA',
      profilePicture: '/assets/images/avatar/avatar-9.png',
      isFollowing: false,
      profession: 'Civil Engineer',
    },
    {
      fullName: 'Mia Taylor',
      location: 'Dallas, TX',
      profilePicture: '/assets/images/avatar/avatar-7.png',
      isFollowing: true,
      profession: 'Nurse',
    },
    {
      fullName: 'William Jackson',
      location: 'San Jose, CA',
      profilePicture: '/assets/images/avatar/avatar-10.png',
      isFollowing: false,
      profession: 'Teacher',
    },
    {
      fullName: 'Charlotte White',
      location: 'Austin, TX',
      profilePicture: '/assets/images/avatar/avatar-13.png',
      isFollowing: true,
      profession: 'Content Writer',
    },
    {
      fullName: 'Lucas Harris',
      location: 'Jacksonville, FL',
      profilePicture: '/assets/images/avatar/avatar-12.png',
      isFollowing: false,
      profession: 'Photographer',
    },
    {
      fullName: 'Amelia Clark',
      location: 'San Francisco, CA',
      profilePicture: '/assets/images/avatar/avatar-17.png',
      isFollowing: true,
      profession: 'Web Developer',
    },
    {
      fullName: 'Henry Lewis',
      location: 'Columbus, OH',
      profilePicture: '/assets/images/avatar/avatar-15.png',
      isFollowing: false,
      profession: 'Attorney',
    },
    {
      fullName: 'Isabella Robinson',
      location: 'Fort Worth, TX',
      profilePicture: '/assets/images/avatar/avatar-22.png',
      isFollowing: true,
      profession: 'Sales Manager',
    },
  ],
  friends: [
    {
      fullName: 'Alice Johnson',
      profilePicture: '/assets/images/avatar/avatar-1.png',
      workPosition: 'Software Engineer',
    },
    {
      fullName: 'Michael Smith',
      profilePicture: '/assets/images/avatar/avatar-2.png',
      workPosition: 'Product Manager',
    },
    {
      fullName: 'Emma Brown',
      profilePicture: '/assets/images/avatar/avatar-3.png',
      workPosition: 'Graphic Designer',
    },
    {
      fullName: 'Daniel Garcia',
      profilePicture: '/assets/images/avatar/avatar-4.png',
      workPosition: 'Data Analyst',
    },
    {
      fullName: 'Sophia Martinez',
      profilePicture: '/assets/images/avatar/avatar-5.png',
      workPosition: 'Marketing Specialist',
    },
    {
      fullName: 'James Wilson',
      profilePicture: '/assets/images/avatar/avatar-9.png',
      workPosition: 'Sales Executive',
    },
    {
      fullName: 'Olivia Anderson',
      profilePicture: '/assets/images/avatar/avatar-6.png',
      workPosition: 'HR Manager',
    },
    {
      fullName: 'Benjamin Thomas',
      profilePicture: '/assets/images/avatar/avatar-10.png',
      workPosition: 'Financial Analyst',
    },
    {
      fullName: 'Mia Taylor',
      profilePicture: '/assets/images/avatar/avatar-7.png',
      workPosition: 'Web Developer',
    },
    {
      fullName: 'William Jackson',
      profilePicture: '/assets/images/avatar/avatar-12.png',
      workPosition: 'Operations Manager',
    },
    {
      fullName: 'Charlotte White',
      profilePicture: '/assets/images/avatar/avatar-8.png',
      workPosition: 'Content Writer',
    },
    {
      fullName: 'Lucas Harris',
      profilePicture: '/assets/images/avatar/avatar-15.png',
      workPosition: 'UX/UI Designer',
    },
  ],
  gallery: [
    {
      postImage: '/assets/images/cover/cover-1.webp',
      postDate: '2024-09-15',
      postTitle: 'Autumn Leaves',
    },
    {
      postImage: '/assets/images/cover/cover-2.webp',
      postDate: '2024-09-20',
      postTitle: 'City Skyline',
    },
    {
      postImage: '/assets/images/cover/cover-3.webp',
      postDate: '2024-09-25',
      postTitle: 'Beach Sunset',
    },
    {
      postImage: '/assets/images/cover/cover-4.webp',
      postDate: '2024-10-01',
      postTitle: 'Mountain Adventure',
    },
    {
      postImage: '/assets/images/cover/cover-5.webp',
      postDate: '2024-10-05',
      postTitle: 'Starry Night',
    },
    {
      postImage: '/assets/images/cover/cover-6.webp',
      postDate: '2024-10-10',
      postTitle: 'Winter Wonderland',
    },
  ],
};

export const sampleUsers = [
  {
    fullName: 'Alice Johnson',
    workPosition: 'Software Engineer',
    followerCount: 24678,
    followingCount: 300,
    totalPosts: 45,
    profilePicture: '/assets/images/avatar/avatar-1.png',
    coverImage: '/assets/images/cover/cover-1.webp',
  },
  {
    fullName: 'Michael Smith',
    workPosition: 'Product Manager',
    followerCount: 15478,
    followingCount: 180,
    totalPosts: 60,
    profilePicture: '/assets/images/avatar/avatar-9.png',
    coverImage: '/assets/images/cover/cover-2.webp',
  },
  {
    fullName: 'Emma Brown',
    workPosition: 'Graphic Designer',
    followerCount: 9546,
    followingCount: 250,
    totalPosts: 30,
    profilePicture: '/assets/images/avatar/avatar-2.png',
    coverImage: '/assets/images/cover/cover-3.webp',
  },
  {
    fullName: 'Daniel Garcia',
    workPosition: 'Data Analyst',
    followerCount: 74582,
    followingCount: 150,
    totalPosts: 25,
    profilePicture: '/assets/images/avatar/avatar-3.png',
    coverImage: '/assets/images/cover/cover-4.webp',
  },
  {
    fullName: 'Sophia Martinez',
    workPosition: 'Marketing Specialist',
    followerCount: 11347,
    followingCount: 400,
    totalPosts: 50,
    profilePicture: '/assets/images/avatar/avatar-4.png',
    coverImage: '/assets/images/cover/cover-5.webp',
  },
  {
    fullName: 'James Wilson',
    workPosition: 'Sales Executive',
    followerCount: 75413,
    followingCount: 350,
    totalPosts: 35,
    profilePicture: '/assets/images/avatar/avatar-10.png',
    coverImage: '/assets/images/cover/cover-6.webp',
  },
  {
    fullName: 'Olivia Anderson',
    workPosition: 'HR Manager',
    followerCount: 14725,
    followingCount: 120,
    totalPosts: 20,
    profilePicture: '/assets/images/avatar/avatar-5.png',
    coverImage: '/assets/images/cover/cover-7.webp',
  },
  {
    fullName: 'Benjamin Thomas',
    workPosition: 'Financial Analyst',
    followerCount: 65412,
    followingCount: 280,
    totalPosts: 40,
    profilePicture: '/assets/images/avatar/avatar-12.png',
    coverImage: '/assets/images/cover/cover-8.webp',
  },
  {
    fullName: 'Mia Taylor',
    workPosition: 'Web Developer',
    followerCount: 37458,
    followingCount: 200,
    totalPosts: 55,
    profilePicture: '/assets/images/avatar/avatar-6.png',
    coverImage: '/assets/images/cover/cover-9.webp',
  },
];

export const sampleProductDetails = {
  productFreshness: 'New',
  productName: 'Luka 3 PF',
  product_code: 'ESP-BT-2024',
  product_sku: 'ESP-BT-2024-WHT',
  avgRating: 3.7,
  totalReviews: 20284,
  price: '$97.15',
  discountPrice: '$89.24',
  description:
    'Shift your game into high gear with the lightest Luka yet. Designed to help you create space through acceleration, the Luka 3 features full-length Cushlon 3.0 foam for a smooth heel-to-toe transition.',
  productImages: [
    '/assets/images/product/shoe_1.webp',
    '/assets/images/product/shoe_2.webp',
    '/assets/images/product/shoe_3.webp',
    '/assets/images/product/shoe_4.webp',
    '/assets/images/product/shoe_5.webp',
    '/assets/images/product/shoe_6.webp',
    '/assets/images/product/shoe_7.webp',
    '/assets/images/product/shoe_8.webp',
  ],
  color: ['#1890ff', '#ffc0cb'],
  sizes: [
    {
      lable: 6,
      value: 6,
    },
    {
      lable: 7,
      value: 7,
    },
    {
      lable: 8,
      value: 8,
    },
    {
      lable: 8.5,
      value: 8.5,
    },
    {
      lable: 9,
      value: 9,
    },
    {
      lable: 9.5,
      value: 9.5,
    },
    {
      lable: 10,
      value: 10,
    },
    {
      lable: 10.5,
      value: 10.5,
    },
    {
      lable: 11,
      value: 11,
    },
    {
      lable: 11.5,
      value: 11.5,
    },
    {
      lable: 12,
      value: 12,
    },
    {
      lable: 13,
      value: 13,
    },
  ],
  availableQuantity: 72,
  details: [
    {
      title: 'Product Details',
      features: [
        'The foam sockliner feels soft and comfortable',
        'Pull tab',
        'Not intended for use as Personal Protective Equipment',
        'Colour Shown: White/Black/Oxygen Purple/Action Grape',
        'Style: 921826-109',
        'Country/Region of Origin: China',
      ],
    },
    {
      title: 'Benefits',
      features: [
        '    Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfortand durability.',
        'Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushioning underfoot.',
        'The foam midsole feels springy and soft.',
        'The rubber outsole adds traction and durability.',
      ],
    },
    {
      title: 'Delivery and Returns',
      features: [
        'Your order of $200 or more gets free standard delivery.',
        'Standard delivered 4-5 Business Days',
        'Express delivered 2-4 Business Days',
        'Orders are processed and delivered Monday-Friday (excluding public holidays)',
      ],
    },
  ],
  starReviewsCount: {
    fiveStarReviews: 24,
    fourStarReviews: 47,
    threeStarReviews: 5,
    twoStarReviews: 14,
    oneStarReviews: 10,
  },
  customerFeedback: [
    {
      customerName: 'Jayvion Simon',
      profilePicture: '/assets/images/avatar/avatar-4.png',
      postDate: '16 Oct 2024',
      rating: 5,
      isVerified: true,
      title: 'Works like a charm',
      description:
        'The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.',
      reviewLikes: 1532,
      reviewDislikes: 320,
    },
    {
      customerName: 'Lucian Obrien',
      profilePicture: '/assets/images/avatar/avatar-9.png',
      postDate: '16 June 2024',
      rating: 4.1,
      isVerified: false,
      title: 'Just awesome',
      description: 'She eagerly opened the gift, her eyes sparkling with excitement.',
      reviewLikes: 453,
      reviewDislikes: 17,
    },
    {
      customerName: 'Deja Brady',
      profilePicture: '/assets/images/avatar/avatar-1.png',
      postDate: '7 Jan 2024',
      rating: 1.2,
      isVerified: true,
      title: 'Received damaged product.',
      description:
        'The old oak tree stood tall and majestic, its branches swaying gently in the breeze.',
      reviewLikes: 9745,
      reviewDislikes: 1750,
    },
    {
      customerName: 'Reece Chung',
      profilePicture: '/assets/images/avatar/avatar-22.png',
      postDate: '16 Oct 2024',
      rating: 3.7,
      isVerified: true,
      title: 'Best in the market.',
      description: 'The aroma of freshly brewed coffee filled the air, awakening my senses.',
      reviewLikes: 3541,
      reviewDislikes: 9874,
    },
  ],
};

// ----------------------------------------------------------------------

export const blogPosts = [
  {
    id: '1',
    title: 'Understanding JavaScript Closures',
    coverUrl: '/assets/images/blog/blog-1.jpg',
    totalViews: 25,
    description: "A deep dive into how closures work in JavaScript and why they're important.",
    totalShares: 5,
    totalComments: 0,
    totalFavorites: 0,
    postedAt: '2024-11-01',
    author: {
      name: 'Billy Stoltenberg',
      avatarUrl: '/assets/images/avatar/avatar-1.png',
    },
    status: 'draft',
  },
  {
    id: '2',
    title: 'Top 10 CSS Tricks for Beginners',
    coverUrl: '/assets/images/blog/blog-2.jpg',
    totalViews: 150,
    description: 'Learn some useful CSS tricks to enhance your web design skills.',
    totalShares: 30,
    totalComments: 10,
    totalFavorites: 0,
    postedAt: '2024-10-15',
    author: {
      name: 'Eloise Ebert',
      avatarUrl: '/assets/images/avatar/avatar-2.png',
    },
    status: 'published',
  },
  {
    id: '3',
    title: 'A Guide to Responsive Web Design',
    coverUrl: '/assets/images/blog/blog-3.jpg',
    totalViews: 80,
    description: 'Tips and techniques for creating websites that work on all devices.',
    totalShares: 20,
    totalComments: 5,
    totalFavorites: 0,
    postedAt: '2024-09-30',
    author: {
      name: 'Teresa Luettgen',
      avatarUrl: '/assets/images/avatar/avatar-3.png',
    },
    status: 'published',
  },
  {
    id: '4',
    title: 'Exploring the New Features of HTML5',
    coverUrl: '/assets/images/blog/blog-4.jpg',
    totalViews: 10,
    description: 'An overview of the latest updates in HTML5 and how they impact web development.',
    totalShares: 2,
    totalComments: 0,
    totalFavorites: 0,
    postedAt: '2024-11-05',
    author: {
      name: 'Salvador Mayert',
      avatarUrl: '/assets/images/avatar/avatar-4.png',
    },
    status: 'draft',
  },
  {
    id: '5',
    title: "Mastering Git: A Beginner's Guide",
    coverUrl: '/assets/images/blog/blog-5.jpg',
    totalViews: 220,
    description: 'Everything you need to know about using Git for version control.',
    totalShares: 45,
    totalComments: 12,
    totalFavorites: 0,
    postedAt: '2024-08-20',
    author: {
      name: 'Kelvin Pouros',
      avatarUrl: '/assets/images/avatar/avatar-5.png',
    },
    status: 'published',
  },
  {
    id: '6',
    title: 'The Future of Web Development',
    coverUrl: '/assets/images/blog/blog-6.jpg',
    totalViews: 300,
    description: 'Insights into the trends and technologies shaping the future of the web.',
    totalShares: 60,
    totalComments: 15,
    totalFavorites: 0,
    postedAt: '2024-07-10',
    author: {
      name: 'Thelma Langworth',
      avatarUrl: '/assets/images/avatar/avatar-6.png',
    },
    status: 'published',
  },
  {
    id: '7',
    title: 'Creating Accessible Websites',
    coverUrl: '/assets/images/blog/blog-7.jpg',
    totalViews: 5,
    description: 'Best practices for making your websites accessible to all users.',
    totalShares: 1,
    totalComments: 0,
    totalFavorites: 0,
    postedAt: '2024-11-12',
    author: {
      name: 'Kristen Wunsch',
      avatarUrl: '/assets/images/avatar/avatar-7.png',
    },
    status: 'draft',
  },
  {
    id: '8',
    title: 'Introduction to Python for Data Science',
    coverUrl: '/assets/images/blog/blog-8.jpg',
    totalViews: 500,
    description: 'Getting started with Python for data analysis and visualization.',
    totalShares: 90,
    totalComments: 20,
    totalFavorites: 0,
    postedAt: '2024-06-25',
    author: {
      name: 'Steve Welch',
      avatarUrl: '/assets/images/avatar/avatar-8.png',
    },
    status: 'published',
  },
  {
    id: '9',
    title: 'Building RESTful APIs with Node.js',
    coverUrl: '/assets/images/blog/blog-9.jpg',
    totalViews: 15,
    description: 'A step-by-step guide to creating RESTful APIs using Node.js.',
    totalShares: 3,
    totalComments: 0,
    totalFavorites: 0,
    postedAt: '2024-11-20',
    author: {
      name: 'Brian Jacobs',
      avatarUrl: '/assets/images/avatar/avatar-9.png',
    },
    status: 'draft',
  },
  {
    id: '10',
    title: 'Debugging JavaScript: Tips and Tricks',
    coverUrl: '/assets/images/blog/blog-10.jpg',
    totalViews: 100,
    description: 'Common debugging techniques for JavaScript developers.',
    totalShares: 25,
    totalComments: 8,
    totalFavorites: 0,
    postedAt: '2024-05-15',
    author: {
      name: 'Lillie Schultz',
      avatarUrl: '/assets/images/avatar/avatar-10.png',
    },
    status: 'published',
  },
  {
    id: '11',
    title: 'Web Performance Optimization',
    coverUrl: '/assets/images/blog/blog-11.jpg',
    totalViews: 200,
    description: 'How to make your website faster and more efficient.',
    totalShares: 35,
    totalComments: 5,
    totalFavorites: 0,
    postedAt: '2024-04-01',
    author: {
      name: 'Charlene Krajcik',
      avatarUrl: '/assets/images/avatar/avatar-11.png',
    },
    status: 'published',
  },
  {
    id: '12',
    title: 'Using Docker for Development',
    coverUrl: '/assets/images/blog/blog-12.jpg',
    totalViews: 8,
    description: 'An introduction to using Docker to streamline your development process.',
    totalShares: 0,
    totalComments: 0,
    totalFavorites: 0,
    postedAt: '2024-11-30',
    author: {
      name: 'Kerry Kuhlman',
      avatarUrl: '/assets/images/avatar/avatar-12.png',
    },
    status: 'draft',
  },
  {
    id: '13',
    title: 'SEO Best Practices for 2024',
    coverUrl: '/assets/images/blog/blog-13.jpg',
    totalViews: 300,
    description: "Learn the latest SEO techniques to improve your website's visibility.",
    totalShares: 50,
    totalComments: 10,
    totalFavorites: 0,
    postedAt: '2024-03-10',
    author: {
      name: 'Betty Hammes',
      avatarUrl: '/assets/images/avatar/avatar-13.png',
    },
    status: 'published',
  },
  {
    id: '14',
    title: 'JavaScript Frameworks: Which One to Choose?',
    coverUrl: '/assets/images/blog/blog-14.jpg',
    totalViews: 400,
    description: 'A comparison of popular JavaScript frameworks and when to use them.',
    totalShares: 70,
    totalComments: 18,
    totalFavorites: 0,
    postedAt: '2024-02-15',
    author: {
      name: 'Tony Paucek PhD',
      avatarUrl: '/assets/images/avatar/avatar-14.png',
    },
    status: 'published',
  },
];

export const _timezones = [
  { label: 'UTC-12:00', value: 'Etc/UTC-12' },
  { label: 'UTC-11:00', value: 'Pacific/Samoa' },
  { label: 'UTC-10:00', value: 'Pacific/Honolulu' },
  { label: 'UTC-09:00', value: 'America/Anchorage' },
  { label: 'UTC-08:00', value: 'America/Los_Angeles' },
  { label: 'UTC-07:00', value: 'America/Denver' },
  { label: 'UTC-06:00', value: 'America/Chicago' },
  { label: 'UTC-05:00', value: 'America/New_York' },
  { label: 'UTC-04:00', value: 'America/Caracas' },
  { label: 'UTC-03:00', value: 'America/Argentina/Buenos_Aires' },
  { label: 'UTC-02:00', value: 'America/Noronha' },
  { label: 'UTC-01:00', value: 'Atlantic/Azores' },
  { label: 'UTC', value: 'UTC' },
  { label: 'UTC+01:00', value: 'Europe/Paris' },
  { label: 'UTC+02:00', value: 'Europe/Athens' },
  { label: 'UTC+03:00', value: 'Asia/Riyadh' },
  { label: 'UTC+04:00', value: 'Asia/Dubai' },
  { label: 'UTC+05:00', value: 'Asia/Karachi' },
  { label: 'UTC+06:00', value: 'Asia/Almaty' },
  { label: 'UTC+07:00', value: 'Asia/Bangkok' },
  { label: 'UTC+08:00', value: 'Asia/Singapore' },
  { label: 'UTC+09:00', value: 'Asia/Tokyo' },
  { label: 'UTC+10:00', value: 'Australia/Sydney' },
  { label: 'UTC+11:00', value: 'Pacific/Noumea' },
  { label: 'UTC+12:00', value: 'Pacific/Fiji' },
];

export const _permissions = [
  {
    value: 'super_admin',
    label: 'Super Admin',
  },
  {
    value: 'admin',
    label: 'Admin',
  },
  {
    value: 'manager',
    label: 'Manager',
  },
  {
    value: 'user',
    label: 'User',
  },
  {
    value: 'guest',
    label: 'Guest',
  },
];

export const _notification_methods = [
  {
    label: 'Email',
    value: 'email',
  },
  {
    label: 'SMS',
    value: 'sms',
  },
  {
    label: 'Push Notification',
    value: 'push_notification',
  },
  {
    label: 'In-App Notification',
    value: 'in_app_notification',
  },
  {
    label: 'Slack',
    value: 'slack',
  },
  {
    label: 'Telegram',
    value: 'telegram',
  },
  {
    label: 'WhatsApp',
    value: 'whatsapp',
  },
  {
    label: 'Voice Call',
    value: 'voice_call',
  },
];

export const _questions = [
  {
    id: 1,
    question: 'What is the name of the first pet you ever owned?',
  },
  {
    id: 2,
    question: 'What was the name of your elementary school?',
  },
  {
    id: 3,
    question: "What is your mother's maiden name?",
  },
  {
    id: 4,
    question: 'In what city did you meet your spouse or partner?',
  },
  {
    id: 5,
    question: 'What was the make and model of your first car?',
  },
];
