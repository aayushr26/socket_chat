import * as routes from '../routes/routes';

export const LOGIN = `/${routes.ACCOUNT}/${routes.LOGIN}`;

export const SIGNUP = `/${routes.ACCOUNT}/${routes.SIGNUP}`;

export const FORGOT_PASSWORD = `/${routes.ACCOUNT}/${routes.FORGOT_PASSWORD}`;

export const CONFIRM_FORGOT_PASSWORD = `/${routes.ACCOUNT}/${routes.CONFIRM_FORGOT_PASSWORD}`;

export const RESET_PASSWORD = `/${routes.ACCOUNT}/${routes.RESET_PASSWORD}`;

export const REPORTS = `/${routes.REPORT}`;

export const USERS = `/${routes.USERS}`;

export const CHAT = `/${routes.CHAT}`;

export const USER_LIST = `/${USERS}/${routes.USER_LIST}`;

export const USER_DETAIL = USERS;

export const USER_POSTS = `${routes.POST}`;

export const USER_FRIENDS = `${routes.FRIEND}`;

export const USER_FOLLOWERS = `${routes.FOLLOWER}`;

export const USER_FOLLOWING = `${routes.FOLLOWING}`;

export const USER_REPORTED = `${routes.REPORTED}`;

export const REPORTED = `/${routes.REPORTED}`;

export const CONTENT = `/${routes.CONTENT}`;

export const SETTINGS = `/${routes.SETTINGS}`;

export const ADMIN_PROFILE = `/${SETTINGS}/${routes.ADMIN_PROFILE}`;

export const CHANGE_PASSWORD = `/${SETTINGS}/${routes.CHANGE_PASSWORD}`;

export const EDIT_PROFILE = `/${SETTINGS}/${routes.EDIT_PROFILE}`;

export const ADMIN_NOTIFICATION = `/${routes.ADMIN_NOTIFICATION}`;

export const NOTIFICATION = `/${routes.NOTIFICATION}`;

export const NOTIFICATION_LIST = `/${NOTIFICATION}/${routes.NOTIFICATION_LIST}`;

export const ADD_NOTIFICATION = `/${NOTIFICATION}/${routes.ADD_NOTIFICATION}`;

export const EDIT_NOTIFICATION = `/${NOTIFICATION}/${routes.EDIT_NOTIFICATION}`;

export const DASHBOARD = `/${routes.DASHBOARD}`;

export const POST = `/${routes.POST}`;

export const POST_LIST = `/${POST}/${routes.POST_LIST}`;

export const POST_ADD = `/${POST}/${routes.POST_ADD}`;

export const POST_DETAIL = POST;

export const POST_EDIT = `/${POST}/${routes.POST_EDIT}`;

export const REPORTED_POST = `/${REPORTED}/${routes.POST}`;

export const REPORTED_USER = `/${REPORTED}/${routes.USERS}`;

export const REPORTED_POST_LIST = `/${REPORTED_POST}/${routes.REPORTED_POST_LIST}`;

export const REPORTED_POST_ADD = `/${REPORTED_POST}/${routes.REPORTED_POST_ADD}`;

export const REPORTED_POST_DETAIL = `/${REPORTED_POST}/${routes.REPORTED_POST_DETAIL}`;

export const FAQ = `/${CONTENT}/${routes.FAQ}`;

export const TERMS = `/${CONTENT}/${routes.TERMS}`;

export const PRIVACY = `/${CONTENT}/${routes.PRIVACY}`;

export const QUESTION = `/${CONTENT}/${routes.FAQ}/${routes.QUESTION}`;

export const ADD_QUESTION = `/${CONTENT}/${routes.ADD_QUESTION}`;

export const EDIT_QUESTION = CONTENT;

export const CATEGORY = `/${CONTENT}/${routes.FAQ}/${routes.CATEGORY}`;

export const CONTACT_US = `/${routes.CONTACT_US}`;

