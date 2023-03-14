const { createApp } = Vue;

createApp({
  data() {
    return {
      // Array che riceverà la lista di dischi dalla chiamata axios verso api.php (che a sua volta contiene una lista importata dal file disk-list.json)
      diskList: [],
      diskClicked: null,
      diskSelect: "",
    };
  },

  methods: {
    onClick(index) {
      this.diskClicked = index;
      this.diskSelect = this.diskList[this.diskClicked];
      // console.log(this.diskClicked);
      // console.log(this.diskSelect);
    },

    closeSquare() {
      this.diskClicked = null;
    },
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
