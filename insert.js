const dbConnect = require("./mongoCopy");

const insertData = async () => {
  let data = await dbConnect();
  let result = await data.insert([
    {
      brand: "micromax",
      price: 12000,
      category: "mobile",
    },
    {
      brand: "oppo",
      price: 10000,
      category: "mobile",
    },
  ])
  if(result.acknowledged){
    console.log("data inserted");
  }
};
insertData();
