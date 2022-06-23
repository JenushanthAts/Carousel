import { carousel } from "../dummyData.js";
export const fetchData = async (req, res, err) => {
  try {
    const id = req.query.slides;
    // console.log(id);

    if (carousel.length < id) {
      res.send({ slides: ["Maximum length is exceeded"] });
    } else {
      const slides = carousel.slice(0, id);
      res.json({ slides });
    }
  } catch (err) {
    res.send({ error: "Data could not be fetched" });
  }
};
