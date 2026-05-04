const dater = (req, res, next) => {
    const today = new Date(); // creates Date object
    const yyyy = today.getFullYear(); // assigns the getFullYear property from the Date object to 'yyyy'
    let mm = today.getMonth() + 1; // assigns the getMonth property to the Date object and adds 1 since months start at 0
    let dd = today.getDate(); // assigns the getDate property to dd

    if (dd < 10) dd = '0' + dd; // if dd is a single digit, add a leading zero
    if (mm < 10) mm = '0' + mm; // if mm is a single digit, add a leading zero

    req.formattedToday = mm + '/' + dd + '/' + yyyy; // forms the date and sends as it as part of the request object (I changed it to mm/dd/yyyy)
    next();
}

module.exports = dater;