const isQaHost =
  typeof window !== 'undefined' && window.location.hostname === 'wedding-app-qa.up.railway.app';

export const environment = {
  production: true,
  apiUrl: isQaHost
    ? 'https://wedding-api-qa.up.railway.app/api'
    : 'https://wedding-api-production-2678.up.railway.app/api',
  spotifyPlaylistEmbedUrl: 'https://open.spotify.com/embed/playlist/7rltSQclWxlmRlE9M6U5Mh?autoplay=1&utm_source=generator&si=ol-c6XrQQK2JiJ0eTsrxhA',
  spotifyCollaborativePlaylistUrl: 'https://open.spotify.com/playlist/7rltSQclWxlmRlE9M6U5Mh?si=XoH1d7n4S7S35wm41nTJkQ&utm_source=whatsapp&pt=599ffc0be8833f8e6a9d329f0a4deeb7&pi=uF-garkBQd2hY'
};