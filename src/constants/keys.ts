const queryKeys = {
  AUTH: 'auth',
  GET_ACCESS_TOKEN: 'getAccessToken',
  GET_PROFILE: 'getProfile',
  FEED: 'feed',
  GET_FEED_DETAIL: 'getFeedDetail',
  GET_FEEDS: 'getFeeds',
  TREND: 'trend',
} as const;

const storageKeys = {
  REFRESH_TOKEN: 'refreshToken',
} as const;

export {queryKeys, storageKeys}
