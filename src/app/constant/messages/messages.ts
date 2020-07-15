export const VALIDATION_MESSAGES = {
  "confirm password": {
    matchPassword: "Confirm password is not matched with password"
  }
}
export const POPUP_MESSAGES = {
  ok: 'Ok',
  close: 'Close',
  confrim: 'Confirmation',
  no: 'No',
  yes: 'Yes',
  passwordResetTitle: 'Reset Password',
  passwordResetLink: 'Password reset link has been sent to registered email id . Please follow the link to reset password .',
  profileEdited: 'Profile has been Edited successfully.',
  passwordChanged: 'Password has been changed successfully.',
  passwordChangedTitle: 'Change Password',
  invalidResetPasswordLink: 'Reset password link is expired',
  logout: 'Logout',
  logoutConfirmation: 'Do you wish to logout?',
  forgotPasswordTitle: "Forgot Your Password? Don't worry send us your registered email address and we will send yousteps to reset your password."
};

export const TABLE_MESSAGES = {
  OOPS: 'Oops something went wrong',
  NO_INTERNET: 'No Internet Connection.',
  NOT_CONNECT_SERVER: 'Could not connect to the server. Please try again later',
  DELETE: 'Delete Confirmation',
  ACTIVE: 'Activate',
  INACTIVE: 'Deactivate',
  DELETE_LIST: 'Are you sure you want to delete ?',
  ACTIVE_LIST: 'Are you sure you want to active ?',
  INACTIVE_LIST: 'Are you sure you want to deactivate ?',
}

export const CONFIRMATION = 'Confirmation';

export const NO_RECORDS = 'No Data found';

export const LOADING = 'Loading..';

export const EMPTY_TEXT = 'Text can not be empty';

export const START_END_DATE = 'Please Select Start or End Date';

export const START_DATE = 'Please Select Start Date';

export const END_DATE = 'Please Select End Date';

export const USER_MESSAGE = {
  BLOCK: 'User has been Blocked Successfully',
  UNBLOCK: 'User has been Unblocked Successfully',
  DELETE: 'User has been Deleted Successfully',
}

export const NOTIFICATION_MESSAGE = {
  ADD_USER: 'Please add atleast one user',
  ADDED: 'Notification has been Added Successfully',
  BLOCK: 'Notification has been Blocked Successfully',
  UNBLOCK: 'Notification has been Unblocked Successfully',
  DELETE: 'Notification has been Deleted Successfully'
}

export const CATEGORY_MESSAGE = {
  CATEGORY_BLOCK: 'Category has been Blocked Successfully',
  CATEGORY_UNBLOCK: 'Category has been Unblocked Successfully',
  CATEGORY_DELETE: 'Category has been Deleted Successfully'
}

export const EDIT_BLOCK = {
  QUESTION_BLOCK: 'Blocked Question can not be edit.',
  CATEGORY_BLOCK: 'Category is blocked.',
}

export const QUESTION_MESSAGE = {
  QUESTION_BLOCK: 'Question has been Blocked Successfully',
  QUESTION_UNBLOCK: 'Question has been Unblocked Successfully',
  QUESTION_DELETE: 'Question has been Deleted Successfully'
}

export const POST_MESSAGE = {
  POST_BLOCK: 'Post has been Blocked Successfully',
  POST_UNBLOCK: 'Post has been Unblocked Successfully',
  POST_DELETE: 'Post has been Deleted Successfully'
}

export const CONTACT_MESSAGE = {
  CONTACT_READ: 'Contact has been marked as read Successfully',
  CONTACT_UNREAD: 'Contact has been marked as un-read Successfully',
  CONTACT_DELETE: 'Contact has been Deleted Successfully',
  CONTACT_ADD_FLAG: 'Contact has been added as flag Successfully',
  CONTACT_REMOVE_FLAG: 'Contact has been removed as flag Successfully',
}


export const LOGO = './assets/images/brightside-logo.svg';

export const invalidImageError = (format = 'jpeg/png') => `Only ${format} images are allowed`;

export const invalidFileSize = (size = 4) => `File size can not be more than ${size} MB`;

export const invalidVideoError = (format = 'mp4/webm') => `Only ${format} videos are allowed`;

export const invalidVideoSize = (size = 5) => `File size can not be more than ${size} MB`;

export const COMMON_MESSAGES = {
  ADDED: (type) => toTitleCase(type) + " has been added successfully",
  UPDATED: (type) => toTitleCase(type) + " has been updated successfully",
  BLOCKED: {
    confirm: (type) => `Do you want to block this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been blocked successfully`
  },
  ACTIVE: {
    confirm: (type) => `Do you want to unblock this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been unblocked successfully`
  },
  DELETED: {
    confirm: (type) => `Do you want to delete this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been deleted successfully`
  }
};

export const SOMETHING_WENT_WRONG = 'Something went wrong , Please try again later.';

export const toTitleCase = (str) => {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export const DEL = 'delete';
export const DETAILS = 'details';
export const UPDATE = 'update';


export const COUNTRY_CODE = [
  { value: '+91' }
]

export const USER_STATUS_FILTER = [
  { value: '', viewValue: 'None' },
  { value: 'active', viewValue: 'Active Users' },
  { value: 'block', viewValue: 'Blocked Users' },
];

export const USER_SORT_FILTER = [
  { value: '1', viewValue: 'Alphabetical (a-z)' },
  { value: '2', viewValue: 'Alphabetical (z-a)' },
  { value: '3', viewValue: 'Recent user' },
  { value: '4', viewValue: 'Old user' },

]

export const DATE_FILTER = [
  { value: '1', viewValue: 'Last Week' },
  { value: '2', viewValue: 'This Month' },
  { value: '3', viewValue: 'This Year' },
  { value: '4', viewValue: 'Custom' },

]
export const LIKES_SORT_FILTER = [
  { value: '1', viewValue: 'Recent user' },
  { value: '2', viewValue: 'Old user' },

]

export const GENDER_FILTER = [
  { value: 'male', viewValue: 'Male' },
  { value: 'female', viewValue: 'Female' },
  { value: 'others', viewValue: 'Others' }
]

export const REPORTED_FILTER = [

  { value: '1', viewValue: 'Normal' },
  { value: '2', viewValue: 'Emergency' }

]


export const POST_TYPE_FILTER = [

  { value: '1', viewValue: 'Only Me' },
  { value: '2', viewValue: 'Close Friends' },
  { value: '3', viewValue: 'Friends' },
  { value: '4', viewValue: 'Public' },

]
export const STATUS_FILTER = [

  { value: 'active', viewValue: 'Active' },
  { value: 'block', viewValue: 'Block' },
]

export const SORTING_FILTER = [

  { value: '1', viewValue: 'Total Likes (low to high)' },
  { value: '2', viewValue: 'Total Likes (high to low)' },
  { value: '3', viewValue: 'Total dislikes (low to high)' },
  { value: '4', viewValue: 'Total dislikes (high to low)' },
]
export const REPORTED_SORTING = [

  { value: '1', viewValue: 'Normal Reported (low to high)' },
  { value: '2', viewValue: 'Normal Reported (high to low)' },
  { value: '4', viewValue: 'Emergency Reported (low to high)' },
  { value: '3', viewValue: 'Emergency Reported (high to low)' },
]

export const USER_REPORTED_SORTING = [

  { value: '1', viewValue: 'Recent' },
  { value: '2', viewValue: 'Older' },
]

export const NOTIFICATION_TYPE = [
  { value: '2', viewValue: 'All' },
  { value: '1', viewValue: 'Custom' },
]

export const RECURRING_TYPE = [

  { value: 'monthly', viewValue: 'Monthly' },
  { value: 'weekly', viewValue: 'Weekly' }
]

export const FAQ_SORTING = [

  { value: '4', viewValue: 'Alphabetical (a-z)' },
  { value: '3', viewValue: 'Alphabetical (z-a)' },
  { value: '1', viewValue: 'Recent' },
  { value: '2', viewValue: 'Old' }
]

export const FLAGGED_FILTER = [

  { value: '1', viewValue: 'Yes' },
  { value: '2', viewValue: 'No' }
]

export const CATEGORY_FILTER = [

  { value: 'Provide Feedback', viewValue: 'Provide Feedback' },
  { value: 'Give Suggestion', viewValue: 'Give Suggestion' },
  { value: 'Ask a Question', viewValue: 'Ask a Question' },
  { value: 'Report Issue', viewValue: 'Report Issue' }
]


export function trimData(obj) {
  Object.keys(obj).map(k => obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k]);
  return obj;

}

export const DEFAULT_USER_IMG = 'https://secureservercdn.net/160.153.137.40/3jx.ef5.myftpupload.com/wp-content/uploads/2018/07/male-user-profile-picture_318-37825.jpg?time=1579868365'

export const DEFAULT_USER_FEMALE_IMG ="https://upload.wikimedia.org/wikipedia/commons/4/47/Simpleicons_Interface_business-woman-1.svg";

export function arrayLength(data: any) {
  try {
    return data.length
  } catch (error) {
    return 0
  }
}

export const MOOD_DATA = {
  // '1': 'mood_bad',
  // '2': 'sentiment_very_dissatisfied',
  // '3': 'sentiment_dissatisfied',
  // '4': 'sentiment_satisfied',
  // '5': 'sentiment_satisfied_alt',
  // '6': 'sentiment_very_satisfied',

  '1': 'angry.svg',
  '2': 'vsad.svg',
  '3': 'sad.svg',
  '4': 'normal.svg',
  '5': 'happy.svg',
  '6': 'vhappy.svg',
}
export const MEDIA_TYPE = ["image/jpeg", "image/png", "image/webp", "video/webm", "video/mp4", "video/ogg"];

export const IMG_TYPE = ["image/jpeg", "image/png", "image/webp"];

export const EVENT_MESSAGE = {
  EVENT_ADDED: "Your event has been successfully created",
  EVENT_NOT_FOUND: "Event not found",
  NOT_AUTHORIZED: "You are not authorised to modify this event",
  START_DATE_PAST: "Events with future start date can only be published ",
  ALREADY_PUBLISHED: "Event is already published",
  EVENT_PUBLISHED_SUCCESSFULLY: "Event published successfully",
  BASIC_USER_LIMITATION: "Only elite members can create and publish a private event",
  PUBLISHED_CANT_BE_DRAFT: "This event is already published and cannot be saved as draft",
  MAX_VIDEO_LIMIT: "Maximum 1 video can be added",
  MIN_IMAGE_LIMIT: "Atleast 1 image is must",
  PRIVATE_EVENT: "This is private event",
  RECCURING_WEEKLY_LIMIT: "For weekly reccuring event maximum duration of event can be of 5 days",
  RECCURING_MONTHLY_LIMIT: "For monthly reccuring event maximum duration of event can be of 28 days",
  MIN_EVENT_DURATION: `Minimum event duration should be atleast 30 min`,
  DELETED_SUCCESSFULLY: 'Event is deleted successfully',
  ONGOING_EVENT: 'Ongoing event cannot be deleted',
  ENTER_CORRECT_ADDRESS: 'Please Enter the correct Address',
  ATLEAST_ONE_MEDIA: 'Atleast One Media File is required',
  ONLY_IMAGES_VIDEO_ALLOWED: "Only image/videos files allowed.",
  ERROR_UPLOADING_FILE: "Error in uploading file",
  SELECT_RECCRUING_TYPE: 'Please select a Reccuring Type',

}


export let CHART = {

  title: {
    text: 'All Posts'
  },

  subtitle: {
    text: ''
  },

  yAxis: {
    title: {
      text: 'Number of Posts'
    }
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range'
    },
    categories: []
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      // pointStart: 2010
    }
  },

  series: [{
    showInLegend : false,
    name: 'Post',
    data: []
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 100
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

}

export function monthCount(el) {
  switch (el) {
    case 1:
      return 'Jan';
    case 2:
      return 'Feb';
    case 3:
      return 'Mar';
    case 4:
      return 'Apr';
    case 5:
      return 'May';
    case 6:
      return 'Jun';
    case 7:
      return 'Jul';
    case 8:
      return 'Aug';
    case 9:
      return 'Sep';
    case 10:
      return 'Oct';
    case 11:
      return 'Nov';
    case 12:
      return 'Dec';
    default:
      break;
  }
}

export function daysCount(el) {
  switch (el) {
    case 1:
      return 'Sunday';
    case 2:
      return 'Monday';
    case 3:
      return 'Tuesday';
    case 4:
      return 'Wednesday';
    case 5:
      return 'Thursday';
    case 6:
      return 'Friday';
    case 7:
      return 'Saturday';
    default:
      break;
  }
}

export function weeksCount(el) {
  switch (el) {
    case 1:
      return 'Week 1';
    case 2:
      return 'Week 2';
    case 3:
      return 'Week 3';
    case 4:
      return 'Week 4';
    case 5:
      return 'Week 5';
    default:
      break;
  }
}

export function displayedColumn(data) {
  switch (data) {
    case 'reported':
      return ['s.no', 'profile', 'reported', 'action'];
    case 'friends':
      return ['s.no', 'profile-friends', 'friend','close-friends', 'action'];

    case 'following':
      return ['s.no', 'profile', 'following', 'action'];

    case 'follower':
      return ['s.no', 'profile', 'follower', 'action'];

    default:
      return ['s.no', 'profile', 'friend', 'action'];
      ;
  }
}