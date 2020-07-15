
export interface UserList {
    _id: string;
    emailVerified: boolean;
    phoneVerified?: boolean;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    countryCode?: string;
    phoneNo?: string;
    name: string;
    status: string;
    password: string;
    otp: string;
    otpExpiry: Date;
    isDelete: boolean;
    image: string;
    userType: string;
}

export const users: any[] = [
    {
        "_id": "5eafd3bc08322131ad6a5eb0",
        "status": "active",
        "userType": "basic",
        "image": "",
        "city": "",
        "emailVerified": true,
        "name": "Abhay Srivastava",
        "email": "new@gmail.com",
        "createdAt": "2020-05-04T08:35:08.791Z",
        "updatedAt": "2020-05-04T10:13:32.551Z",
        "carsOwned": 0,
        "eventsCreated": 0,
        'title': 'Whats new',
        'Type': 'All'
    },
    {
        "_id": "5ea83d56069c6345acf7efb0",
        "status": "active",
        "userType": "basic",
        "image": "",
        "city": "beawar",
        "emailVerified": true,
        "name": "mayank",
        "email": "mku@gmail.com",
        "countryCode": "+91",
        "phoneNo": "982579",
        "createdAt": "2020-04-28T14:27:34.647Z",
        "updatedAt": "2020-04-28T14:27:34.647Z",
        "carsOwned": 0,
        "eventsCreated": 0,
        'title': 'Whats new',
        'Type': 'All'
    },
    {
        "_id": "5ea68e23e65832629f7b56d0",
        "status": "active",
        "userType": "basic",
        "image": "https://appinventiv-development.s3.amazonaws.com/ImageCrop-1587975386978.jpeg",
        "city": "",
        "emailVerified": true,
        "countryCode": "+91",
        "name": "raoo",
        "email": "raoo@yopmail.com",
        "phoneNo": "84337925",
        "createdAt": "2020-04-27T07:47:47.657Z",
        "updatedAt": "2020-04-28T12:27:39.564Z",
        "carsOwned": 0,
        "eventsCreated": 0,
        'title': 'Whats new',
        'Type': 'All'
    },
    {
        "_id": "5ea68de4e65832629f7b56ce",
        "status": "active",
        "userType": "basic",
        "image": "",
        "city": "",
        "emailVerified": true,
        "countryCode": "+91",
        "name": "rao",
        "email": "rao@yoepmail.com",
        "phoneNo": "8445324",
        "createdAt": "2020-04-27T07:46:44.433Z",
        "updatedAt": "2020-04-28T12:26:05.909Z",
        "carsOwned": 0,
        "eventsCreated": 0,
        'title': 'Whats new',
        'Type': 'All'
    },
    {
        "_id": "5ea32cbee65832629f7b56be",
        "status": "active",
        "userType": "basic",
        "image": "",
        "city": "",
        "emailVerified": true,
        "countryCode": "+91",
        "name": "rata",
        "email": "rataen@yopmail.com",
        "phoneNo": "323256",
        "createdAt": "2020-04-24T18:15:26.410Z",
        "updatedAt": "2020-04-28T12:18:22.456Z",
        "carsOwned": 0,
        "eventsCreated": 0,
        'title': 'Whats new',
        'Type': 'Custom'
    },
    {
        "_id": "5ea2fd1cfbe9365eb664881d",
        "status": "active",
        "userType": "basic",
        "image": "https://appinventiv-development.s3.amazonaws.com/ImageCrop-1587741131539.jpeg",
        "city": "",
        "emailVerified": true,
        "name": "anil yadav",
        "email": "anil@gmail.com",
        "createdAt": "2020-04-24T14:52:12.547Z",
        "updatedAt": "2020-05-05T07:14:31.984Z",
        "countryCode": "+91",
        "phoneNo": "",
        "carsOwned": 0,
        "eventsCreated": 2,
        'title': 'Whats new',
        'Type': 'All'
    },
    {
        "_id": "5ea2eabf01018a722397224c",
        "status": "active",
        "userType": "basic",
        "image": "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg",
        "city": "delhi",
        "emailVerified": true,
        "name": "avcfs",
        "email": "abcdeft@yopmail.com",
        "countryCode": "+91",
        "phoneNo": "",
        "createdAt": "2020-04-24T13:33:51.950Z",
        "updatedAt": "2020-04-24T13:35:33.816Z",
        "carsOwned": 0,
        "eventsCreated": 0,
        'title': 'Whats new',
        'Type': 'Custom'
    },
    {
        "_id": "5ea2970e587ee340c533f428",
        "status": "active",
        "userType": "basic",
        "image": "",
        "city": "",
        "emailVerified": true,
        "name": "Sankalp Karla",
        "email": "sk@yopmail.com",
        "countryCode": "+91",
        "phoneNo": "97696239",
        "createdAt": "2020-04-24T07:36:46.822Z",
        "updatedAt": "2020-04-24T10:02:23.590Z",
        "carsOwned": 0,
        "eventsCreated": 1,
        'title': 'Whats new',
        'Type': 'All'
    },
    {
        "_id": "5ea18923ed918e76da895ff2",
        "status": "active",
        "userType": "basic",
        "image": "",
        "city": "",
        "emailVerified": true,
        "countryCode": "+91",
        "name": "Ulysses",
        "phoneNo": "",
        "email": "ulysses@yopmail.com",
        "createdAt": "2020-04-23T12:25:07.558Z",
        "updatedAt": "2020-05-04T09:27:32.252Z",
        "carsOwned": 0,
        "eventsCreated": 0,
        'title': 'Whats new',
        'Type': 'All'
    },
    {
        "_id": "5ea18401ed918e76da895fee",
        "status": "active",
        "userType": "basic",
        "image": "",
        "city": "",
        "emailVerified": true,
        "name": "Devin",
        "email": "devin@yopmail.com",
        "phoneNo": "1212121223",
        "countryCode": "+91",
        "createdAt": "2020-04-23T12:03:13.951Z",
        "updatedAt": "2020-04-23T12:24:24.116Z",
        "carsOwned": 0,
        "eventsCreated": 0,
        'title': 'Whats new',
        'Type': 'All'
    }
]




