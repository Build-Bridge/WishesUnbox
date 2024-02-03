function Main() {
  return (
    <main className="flex flex-col pt-20 pb-12 gap-1 min-h-full w-full flex-grow items-center justify-center">
      <section className="w-full items-center flex gap-5 justify-center flex-col h-full text-gray-700 px-10">
        <h1 className="text-3xl md:text-4xl text-center text-blue-600 font-semibold">
          Personalized Gift <br />
          Card Creation Platform
        </h1>
        <p className="text-xl md:text-2xl pb-6 text-center max-w-[500px] font-bold">
          Make a unique card to show your how much you care
        </p>
      </section>
      <div className="flex gap-3 items-center max-sm:flex-col">
        <a className="w-40 text-blue-50 shadow-md bg-[#FF9A55] font-semibold text-md rounded-3xl py-3 text-center">
          Get Started
        </a>
      </div>
    </main>
  );
}

export default Main;
