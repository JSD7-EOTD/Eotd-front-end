import freeder_1 from "../../../public/images/CategoryA1/feeder.png";
import toilets_2 from "../../../public/images/CategoryA1/toilets.png";
import towers_3 from "../../../public/images/CategoryA1/Towers.png";
import toys_4 from "../../../public/images/CategoryA1/Toys.png";

const createCategoryItem = (src, alt, label) => {
  return (
    <div className="mb-16 text-center">
      <img
        src={src}
        alt={alt}
        className="w-[98px] h-[142px] rounded-full overflow-hidden border-4 border-orange-900 shadow-xl object-scale-down"
      />
      <p className="mt-2 text-orange-900 font-bold">{label}</p>
    </div>
  );
};

const Category = () => {
  return (
    <section className="mx-[40px] my-8 text-center 2xl:px-40">
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-orange-900 sm:text-3xl">
          Category
        </h2>
        <h1 className="text-2xl font-semibold text-orange-900 mt-2 sm:text-3xl">
          สินค้าคัดสรรจากคนรักสัตว์เพื่อสัตว์เลี้ยงของคุณ
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {createCategoryItem(toys_4, "Toys", "Toys")}
        {createCategoryItem(towers_3, "Towers", "Towers")}
        {createCategoryItem(toilets_2, "Toilets", "Toilets")}
        {createCategoryItem(freeder_1, "Feeder", "Feeder")}
      </div>
    </section>
  );
};

export default Category;
