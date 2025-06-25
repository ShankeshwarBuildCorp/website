export const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;

  let videoId = null;
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') {
      videoId = urlObj.pathname.slice(1);
    } else if (urlObj.hostname.includes('youtube.com')) {
      videoId = urlObj.searchParams.get('v');
    }
  } catch (error) {
    console.error('Invalid YouTube URL:', error);
    return null;
  }

  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : null;
};

export const getYouTubeThumbnailUrl = (url) => {
  if (!url) return null;

  let videoId = null;
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') {
      videoId = urlObj.pathname.slice(1);
    } else if (urlObj.hostname.includes('youtube.com')) {
      videoId = urlObj.searchParams.get('v');
    }
  } catch (error) {
    console.error('Invalid YouTube URL:', error);
    return null;
  }

  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
};
