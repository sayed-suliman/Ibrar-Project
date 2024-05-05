// Define a Handlebars helper to calculate remaining days
const hbs = require('hbs');

hbs.registerHelper('remainingDays', function (startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const remainingTime = end - start;
    const remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return `${remainingDays}`;
});
// format date
hbs.registerHelper('formatDate', function (date) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return formattedDate;
});
// check status
hbs.registerHelper('checkStatus', function (startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const remainingTime = end - start;
    const remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    if (remainingDays < 10) {
        return `text-danger fw-bold`;
    } else {
        return `text-success fw-bold`;
    }
});
