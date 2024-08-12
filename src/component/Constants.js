// components/index.js or a similar file
import HomePage from './HomePage.js';
import ResultPage from './ResultPage.js';
import ExamLinkPage from './HomePage.js';
import NotificationPage from './NotificationPage.js';
import CardPage from './CardPage';

import AddNewsPage from './Admin/AddNews.js';
import AddNotificationPage from './Admin/AddNotification.js';
import AddResultPage from './Admin/AddResult.js';
import SiteSettingPage from './Admin/SiteSetting.js';

export const COMPONENT_MAP = {
  HOME: HomePage,
  RESULT: ResultPage,
  EXAM_LINK: ExamLinkPage,
  NOTIFICATION: NotificationPage,
  CARD:CardPage
};

export const COMPONENT_MAP_ADMIN = {
  ADD_NEWS: AddNewsPage,
  ADD_NOTIFICATION: AddNotificationPage,
  ADD_RESULT: AddResultPage,
  SITE_SETTING:SiteSettingPage
};
