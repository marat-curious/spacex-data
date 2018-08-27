export async function fetchData() {
  return await fetch('https://api.spacexdata.com/v2/launches');
}
