const cardMarkup = data => {
  return data
    .map(
      ({ id, webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<div class='item card' id='${id}'>
        <a class="gallery__item" href="${webformatURL}">
            <img class="gallery-image"  loading="lazy" src="${largeImageURL}" alt="${tags}" />
        </a>
        <ul class='category-list'>
            <li class='catebory-item'>
                <p class='category'>Likes</p>
                <p class='category-value'>${likes}</p>
            </li>
            <li class='catebory-item'>
                <p class='category'>Views</p>
                <p class='category-value'>${views}</p>
            </li>
            <li class='catebory-item'>
                <p class='category'>Comments</p>
                <p class='category-value'>${comments}</p>
            </li>
            <li class='catebory-item'>
                <p class='category'>Downloads</p>
                <p class='category-value'>${downloads}</p>
            </li>
        </ul>
    </div>`,
    )
    .join('');
};

export { cardMarkup };
