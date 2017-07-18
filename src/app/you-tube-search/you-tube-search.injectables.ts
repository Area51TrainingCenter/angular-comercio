import {
  YouTubeSearchService,
  YOUTUBE_API_KEY,
  YOUTUBE_API_URL
} from './you-tube-search.service';

export const youTubeSearchInjectables: any[] = [
  { provide: YouTubeSearchService, useClass: YouTubeSearchService },
  { provide: YOUTUBE_API_KEY, usevalue: YOUTUBE_API_KEY },
  { provide: YOUTUBE_API_URL, usevalue: YOUTUBE_API_URL }
];
