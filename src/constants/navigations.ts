const authNavigations = {
  AUTH_HOME: 'AuthHome',
  LOGIN: 'Login',
  SIGNUP: 'Signup',
  APPLE: 'Apple',
  TERM: 'Term',
} as const;

const mainTabNavigations = {
  HOME: 'Home',
  QR_SCAN: 'QRScan',
  DISCOVER: 'Discover',
} as const;

const feedNavigations = {
  FEED_HOME : 'FeedHome',
  FEED_DETAIL: 'FeedDetail',
  CREATE_POST: 'CreatePost',
  EDIT_POST: 'EditPost',
} as const;

const discoverNavigations = {
  DISCOVER_HOME : 'DiscoverHome',
  USER_HOME : 'UserHome',
} as const;

export {
  authNavigations,
  mainTabNavigations,
  feedNavigations,
  discoverNavigations,
}
