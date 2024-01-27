function Main() {
  return (
    <main className="flex flex-col gap-1 h-full w-full flex-grow items-center justify-center">
      <section className="w-full items-center flex gap-8 justify-center flex-col h-full text-gray-900 px-10">
        <h1 className="text-2xl md:text-4xl text-center text-blue-600 font-semibold">
          Personalized Gift <br />
          Card Creation Platform Card
        </h1>
        <p className="text-lg md:text-2xl pb-6 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing <br />
          elit. Nesciunt, neque illum sapiente
        </p>
      </section>
      <div className="flex gap-3 items-center max-sm:flex-col">
        <a className="rounded-lg w-40 h-12 flex items-center justify-center bg-[#FFA478] text-white shadow-md">
          Try It Out
        </a>
      </div>
    </main>
  );
}

export default Main;
