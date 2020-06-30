let fetchRequestHeaders = new Headers();
fetchRequestHeaders.append('Pragma', 'no-cache');
fetchRequestHeaders.append('Cache-Control', 'no-store, no-cache, must-revalidate');
fetchRequestHeaders.append('Expires', 0);

const FetchGetRequestInit = {
  method: 'GET',
  headers: fetchRequestHeaders,
}

export default FetchGetRequestInit