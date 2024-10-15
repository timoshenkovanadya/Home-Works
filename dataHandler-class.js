const URL = "https://jsonplaceholder.typicode.com/posts";

class DataHandler {
  constructor(url = URL) {
    this.url = url;
    this.dataStorage = new Map();
  }

  async fetchPosts() {
    try {
      const resp = await fetch(this.url);
      console.log(resp);
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      const data = await resp.json();
      data.forEach((item) => this.dataStorage.set(item.id, item));
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  listPosts() {
    if (this.dataStorage.size === 0) {
      throw new Error("Data storage is empty");
    }
    const list = [...this.dataStorage.values()];
    const sortedList = list.sort((a, b) => a.title.localeCompare(b.title));
    return sortedList;
  }

  getPost(id) {
    if (!this.dataStorage.has(id)) {
      throw new Error("There are no posts with such id");
    }
    return this.dataStorage.get(id);
  }

  clearPosts() {
    this.dataStorage.clear();
  }
}
