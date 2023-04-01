import { provide, inject } from 'vue';

async function fetchApiData(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
  
const ApiContext = Symbol('api');

function provideApi() {
  provide(ApiContext, {
    fetchApiData
  });
}

function useApi() {
  const api = inject(ApiContext);
  if (!api) {
    throw new Error('ApiContext not provided');
  }
  return api;
}

export { provideApi, useApi };