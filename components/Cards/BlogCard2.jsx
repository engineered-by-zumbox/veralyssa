const BlogCard2 = ({ news }) => {
  return (
    <div className="w-full grid gap-4 cursor-pointer">
      <div className="h-[276px] relative rounded-lg overflow-hidden">
        <img src={news.imgUrl} className="h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <h2 className="font-semibold no-select text-lg md:text-xl md:leading-[24.2px]">
        {news.title}
      </h2>
      <p className="text-myGray-400">{news.desc}</p>
    </div>
  );
};

export default BlogCard2;
