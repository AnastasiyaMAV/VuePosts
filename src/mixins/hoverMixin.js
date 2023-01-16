export default {
  methods: {
    onHover: function (event) {
      event.target.style.boxShadow =
        "0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset";
    },
    offHover: function (event) {
      event.target.style.boxShadow = "0px 5px 10px 2px rgba(34, 60, 80, 0.2)";
    },
  },
};
