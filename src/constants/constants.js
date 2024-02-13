//   Check Ticket Expire status //
export const DOBFormat = (input) => {
    let formattedDate = input;

    if (formattedDate.length === 2) {
      formattedDate += '/';
    } else if (formattedDate.length === 5) {
      formattedDate = formattedDate.slice(0, 3) + formattedDate.slice(3) + '/';
    }

    return formattedDate;
  };

  export const expireDateFormate = (input) => {
    let formattedDate = input;

    if (formattedDate.length === 4) {
      formattedDate += '-';
    } else if (formattedDate.length === 7) {
      formattedDate = formattedDate.slice(0, 5) + formattedDate.slice(5) + '-';
    }

    return formattedDate;
  };

  export const expenceClaimedDateFormate = (dateString)=>{
    var parts = dateString.split('/');
    var day = parts[0];
    var month = parts[1];
    var year = parts[2];
    console.log("Date formate", year);
    return year + '-' + month + '-' + day;
  }

//   export const checkTicketStatus = (expiry_date, created_date)=> {
//     console.log(expiry_date,created_date,"expire")
//     const currentDate = new Date();
//     const expiryDate = new Date(expiry_date);
//     const createdDate = new Date(created_date);
// console.log(expiryDate,"expiryDate")
//     const ninetyDaysInMilliseconds = 90 * 24 * 60 * 60 * 1000;


//     if (currentDate > expiryDate) {
//       return "Expired";
//     } 
//     else if (expiryDate - currentDate <= ninetyDaysInMilliseconds && currentDate > createdDate) {
//       return "Expiring";
//     }else {
//       return "Valid";
//     }
//   }
export const checkTicketStatus = (expiry_date, created_date) => {
  

  const parseDateString = (dateString) => {
    const [datePart, timePart] = dateString.split(' ');
    const [month, day, year] = datePart.split('/');
    const [hour, minute, second] = timePart ? timePart.split(':') : [0, 0, 0];
    return new Date(year, month - 1, day, hour, minute, second);
  };

  const currentDate = new Date();
  const expiryDate = parseDateString(expiry_date);
  const createdDate = parseDateString(created_date);
  

  const ninetyDaysInMilliseconds = 90 * 24 * 60 * 60 * 1000;

 

  if (currentDate > expiryDate) {
    return "Expired";
  }  else if (expiryDate - currentDate <= ninetyDaysInMilliseconds && currentDate > createdDate) {
    return "Expiring";
  } else {
    return "Valid";
  }
};
  export const NINKeyboardType = (text) => {
    if (text.length < 2) {
      return 'default'; // Default keyboard type for entering letters
    } else if (text.length < 9) {
      return 'numeric'; // Numeric keyboard type for entering numbers
    } else {
      return 'default'; // Default keyboard type for entering letters
    }
  };