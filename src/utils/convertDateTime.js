
//timestamp to datetime
export const convertTimestampToDatetime = (timestamp) => {
    var newDate = new Date(timestamp);
    return `${newDate.getDate() + "/" + (newDate.getMonth() + 1) + "/" + newDate.getFullYear()}`
};
