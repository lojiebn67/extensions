import EpisodesGridScreen from './screens/EpisodesGridScreen';
import EpisodesLargeGridScreen from './screens/EpisodesLargeGridScreen';
import EpisodesListScreen from './screens/EpisodesListScreen';
import EpisodeDetailsScreen from './screens/EpisodeDetailsScreen';
import enTranslations from './translations/en.json';
import { reducer } from './redux';
import './navigation';

const screens = {
  EpisodesListScreen,
  EpisodesGridScreen,
  EpisodesLargeGridScreen,
  EpisodeDetailsScreen,
  EpisodeDetailsWithoutShareScreen: EpisodeDetailsScreen,
  EpisodesFeaturedListScreen: EpisodesListScreen,
  EpisodesFeaturedGridScreen: EpisodesGridScreen,
  EpisodesFeaturedLargeGridScreen: EpisodesLargeGridScreen,
};

const shoutem = {
  i18n: {
    translations: {
      en: enTranslations,
    },
  },
};

export { appDidMount } from './app';

export { reducer, screens, shoutem };
