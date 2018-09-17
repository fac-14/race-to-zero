// DUMMY CODE!!!!!!
const getSuggestedItems = () => {
  return new Promise((resolve, reject) => {
    const result = [
      {
        id: 1,
        inventory_id: 2,
        title: "Go to a farmers market",
        what: "Go to a farmers market",
        why: "you can find organic produces and save packaging waste",
        ext_link: "https://www.lfm.org.uk/",
        img_link:
          "https://s3.eu-central-1.amazonaws.com/lfm-web-prod/images/2016_May_Balham_Herbal_Haven_herbs.0f37de8c.fill-360x360.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=3600&X-Amz-Credential=AKIAJXL7S33WNUYF726A%2F20180912%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Date=20180912T140221Z&X-Amz-Signature=3683277a9cc390d6d2d38d8bbad863a38bf16da79f3049a897ac8dad46078746",
        reward_points: 10,
        repeatable: false
      },
      {
        id: 2,
        inventory_id: null,
        title: "Dont buy plastic water bottles for a week",
        what: "maybe buy refillable bottle",
        why: "saving lots of plastic",
        ext_link:
          "https://www.independent.co.uk/environment/plastic-bottles-waste-recycling-pollution-single-use-keep-britain-tidy-water-a8307591.html",
        img_link:
          "https://www.banthebottle.net/wp-content/uploads/2009/06/ban-all-bottles-300x225.jpg",
        reward_points: 10,
        repeatable: true
      },
      {
        id: 3,
        inventory_id: null,
        title: "Stop trashing you dick",
        what: "maybe buy refillable bottle",
        why: "saving lots of plastic",
        ext_link:
          "https://www.independent.co.uk/environment/plastic-bottles-waste-recycling-pollution-single-use-keep-britain-tidy-water-a8307591.html",
        img_link:
          "https://www.banthebottle.net/wp-content/uploads/2009/06/ban-all-bottles-300x225.jpg",
        reward_points: 10,
        repeatable: true
      },
      {
        id: 4,
        inventory_id: null,
        title: "Get a reusable coffee cup",
        what: "maybe buy refillable bottle",
        why: "saving lots of plastic",
        ext_link:
          "https://www.independent.co.uk/environment/plastic-bottles-waste-recycling-pollution-single-use-keep-britain-tidy-water-a8307591.html",
        img_link:
          "https://www.banthebottle.net/wp-content/uploads/2009/06/ban-all-bottles-300x225.jpg",
        reward_points: 10,
        repeatable: true
      },
      {
        id: 5,
        inventory_id: null,
        title: "Something else importat",
        what: "maybe buy refillable bottle",
        why: "saving lots of plastic",
        ext_link:
          "https://www.independent.co.uk/environment/plastic-bottles-waste-recycling-pollution-single-use-keep-britain-tidy-water-a8307591.html",
        img_link:
          "https://www.banthebottle.net/wp-content/uploads/2009/06/ban-all-bottles-300x225.jpg",
        reward_points: 10,
        repeatable: true
      }
    ];

    resolve(result);
  });
};

module.exports = getOwnedItems;
