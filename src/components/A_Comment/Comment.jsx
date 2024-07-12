const Comment = () => {
  return (
    <section className="container mx-auto my-16 text-center 2xl:px-40">
      <div className="mb-12">
        <h1 className="text-2xl font-semibold text-orange-900 sm:text-3xl">
          Review
        </h1>
        <h1 className="text-2xl font-bold text-orange-900 mt-2 sm:text-3xl">
          What’s our customer says?
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        <div className="shadow-lg m-4 p-5 bg-slate-200 rounded-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            veritatis corporis. Error deserunt unde atque, cupiditate fugiat ad
            iste illo quae ratione, consequuntur iusto accusantium.
          </p>
          <p className="font-bold text-center mt-4">cha ji-Hun</p>
          <p className="text-center">Amet phaselus interdum</p>
        </div>
        <div className="shadow-lg m-4 p-5 bg-slate-200 rounded-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            veritatis corporis. Error deserunt unde atque, cupiditate fugiat ad
            iste illo quae ratione, consequuntur iusto accusantium.
          </p>
          <p className="font-bold text-center mt-4">cha ji-Hun</p>
          <p className="text-center">Amet phaselus interdum</p>
        </div>
        <div className="shadow-lg m-4 p-5 bg-slate-200 rounded-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            veritatis corporis. Error deserunt unde atque, cupiditate fugiat ad
            iste illo quae ratione, consequuntur iusto accusantium.
          </p>
          <p className="font-bold text-center mt-4">cha ji-Hun</p>
          <p className="text-center">Amet phaselus interdum</p>
        </div>
      </div>
    </section>
  );
};

export default Comment;
