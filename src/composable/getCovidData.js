export default async function getCovidData(url) {
  const fetchData = await fetch(url);
  const result = await fetchData.json();
  return result;
}
