export default {
    fetchImages(searchQuerry) {
        const baseUrl =
          'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';
        const key = '15734458-d3f6ccb7088e2e7a90b6df1f7';
    
        return fetch(
          `${baseUrl}${searchQuerry}&page=${this.page}&per_page=12&key=${key}`,
        ).then(response => response.json()).then(data => data.hits);
      },
}