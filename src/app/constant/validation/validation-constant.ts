export const NUMERIC_CONSTANTS = {
    emailMaxLength : 40,
    passwordMinLength : 8,
    passwordMaxLength : 16,
    nameMinLength : 2, 
    nameMaxLength : 40,
    subTitleMinLength : 2, 
    subTitleMaxLength : 150,
    titleMinLength : 2, 
    titleMaxLength : 60,
    phoneMinLength : 8,
    phoneMaxLength : 14,
    priceMinLength:1,
    priceMaxLength:10,
    descriptionMinLength:2,
    descriptionMaxLength:1000,

};

export const PATTERN = {
    email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    // password:  /^[^\s]+$/,
     password: /^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,16}$/,
    //  name: /(.|\s)*\S(.|\s)*/,
    name: /(.|\s)*\S(.|\s)*/,

  
    phone: "^[0-9]+$",
    price:/(^[0][1-9]+)|([1-9]\d*)+$/
};

export const PATTERN_ERRORS =  {
    blankSpace: `Can not contain blank spaces & special character`,
    onlyNumber: `Only digits are allowed`,
    PASSWORD_PATTERN: `Password must contain at least 1 alphabet, 1 number, 1 special character, no space, minimum 8 and maximum 15 characters.`,
    MATCH_PASSWORD: "Confirm password is not matched with password"
};
