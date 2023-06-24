function Pagination({ pages, pageNumber, setPageNumber }) {
  return (
    <div className=" flex gap-5 justify-center py-10">
      {Array(Math.ceil(pages))
        .fill(0)
        .map((x, key) => (
          <div
            key={key}
            className={`${
              pageNumber == key + 1 ? "bg-red-300" : "bg-green-300"
            } text-white rounded-full h-10 w-10 text-center leading-10 cursor-pointer hover:scale-105 duration-200`}
            onClick={() => setPageNumber(key + 1)}
          >
            {key + 1}
          </div>
        ))}
    </div>
  );
}

export default Pagination;
