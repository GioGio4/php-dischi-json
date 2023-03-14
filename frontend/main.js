const { createApp } = Vue;

createApp({
  data() {
    return {
      // Array che riceverà la lista di dischi dalla chiamata axios verso api.php (che a sua volta contiene una lista importata dal file disk-list.json)
      diskList: [],
    };
  },

  created() {
    axios
      .get("http://localhost/php-dischi-json/API/api.php")
      .then((response) => {
        this.diskList = response.data;

        // console.log(this.diskList);
      });
  },
}).mount("#app");
