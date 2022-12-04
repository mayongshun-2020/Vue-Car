export default {
  namespaced: true,
  actions: {
    addNewCar(context, value) {
      // console.log(value);
      if (value.brand === "") {
        alert("Please enter Brand");
      } else {
        context.commit("ADD_NEWCAR", value);
      }
    },
  },
  mutations: {
    ADD_NEWCAR(state, value) {
      state.postsList.unshift(value);
    },
  },
  state: {
    postsList: [
      {
        id: "001",
        imgSrc: require("@/assets/images/img8.png"),
        brand: "2016 VOLKSWAGEN",
        pubDate: "2019-04-01",
        model: "cbdyma",
        description:
          "Attention-Grabbing Runways Technology Is Coming for the FashionIndustry—​Whether They Like It or Not For the 24th year, ELLE's Women",
      },
      {
        id: "002",
        imgSrc: require("@/assets/images/img9.png"),
        brand: "2009 BMW 323I",
        pubDate: "2019-04-01",
        model: "cbdyma",
        description:
          "Attention-Grabbing Runways Technology Is Coming for the FashionIndustry—​Whether They Like It or Not For the 24th year, ELLE's Women",
      },
      {
        id: "003",
        imgSrc: require("@/assets/images/img10.png"),
        brand: "2019 VOLVO XC60",
        pubDate: "2019-04-01",
        model: "cbdyma",
        description:
          "Attention-Grabbing Runways Technology Is Coming for the FashionIndustry—​Whether They Like It or Not For the 24th year, ELLE's Women",
      },
      {
        id: "004",
        imgSrc: require("@/assets/images/img11.png"),
        brand: "2015 TESLA MODEL S",
        pubDate: "2019-04-01",
        model: "cbdyma",
        description:
          "Attention-Grabbing Runways Technology Is Coming for the FashionIndustry—​Whether They Like It or Not For the 24th year, ELLE's Women",
      },
      {
        id: "005",
        imgSrc: require("@/assets/images/img8.png"),
        brand: "2016 VOLKSWAGEN",
        pubDate: "2019-04-01",
        model: "cbdyma",
        description:
          "Attention-Grabbing Runways Technology Is Coming for the FashionIndustry—​Whether They Like It or Not For the 24th year, ELLE's Women",
      },
      {
        id: "006",
        imgSrc: require("@/assets/images/img9.png"),
        brand: "2009 BMW 323I",
        pubDate: "2019-04-01",
        model: "cbdyma",
        description:
          "Attention-Grabbing Runways Technology Is Coming for the FashionIndustry—​Whether They Like It or Not For the 24th year, ELLE's Women",
      },
      {
        id: "007",
        imgSrc: require("@/assets/images/img10.png"),
        brand: "2019 VOLVO XC60",
        pubDate: "2019-04-01",
        model: "cbdyma",
        description:
          "Attention-Grabbing Runways Technology Is Coming for the FashionIndustry—​Whether They Like It or Not For the 24th year, ELLE's Women",
      },
      {
        id: "008",
        imgSrc: require("@/assets/images/img11.png"),
        brand: "2015 TESLA MODEL S",
        pubDate: "2019-04-01",
        model: "cbdyma",
        description:
          "Attention-Grabbing Runways Technology Is Coming for the FashionIndustry—​Whether They Like It or Not For the 24th year, ELLE's Women",
      },
    ],
  },
};
