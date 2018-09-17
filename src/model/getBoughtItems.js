// DUMMY CODE!!!!!!
const getBoughtItems = () => {
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
      }
    ];

    resolve(result);
  });
};

module.exports = getBoughtItems;
