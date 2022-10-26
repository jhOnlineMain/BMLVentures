
//Retrieved 26/10/22 from: https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript/
export default function removeTags(str) {
    if ((str === null) || (str === ''))
      return false;
    else
      str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '');
  }
       