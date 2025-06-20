class SearchSuggestionSystem {
  constructor(products) {
    // Sort products lexicographically
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const result = [];
    let prefix = "";

    for (let char of searchWord) {
      prefix += char;
      const matches = [];

      // Filter products that start with the prefix
      for (let product of this.products) {
        if (product.startsWith(prefix)) {
          matches.push(product);
          if (matches.length === 3) break; // Only take up to 3
        }
      }

      result.push(matches);
    }

    return result;
  }

  

}
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const system = new SearchSuggestionSystem(products);
const output = system.getSuggestions(searchWord);

console.log(output);

