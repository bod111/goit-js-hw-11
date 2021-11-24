import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '23311871-6dfcca62e78c0a60decb58f13';

export default function fetchGallary(searchItems, page) {
  return fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchItems}&key=${MY_KEY}&page=${page}&per_page=40`,
  ).then(response => {
    if (response.status === 404) {
      return Promise.reject(new Error(response.message));
    }
    return response.json();
  });
}

// export default function fetchGallary(searchItems, page) {
//   axios
//     .get(
//       `/
// ?image_type=photo&orientation=horizontal&q=${searchItems}&key=${MY_KEY}&page=${page}&per_page=40`,
//     )
//     .then(response => response);
// }
