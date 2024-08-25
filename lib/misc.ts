export async function getNomadListData() {
  try {
    const response = await fetch("https://nomadlist.com/@typicalmitul.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch Nomad List data:", error);
    throw error;
  }
}
