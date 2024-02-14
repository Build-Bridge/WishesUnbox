function Main() {
  return (
    <>
      <main className="flex flex-col pt-20 pb-12 z-10 gap-1 min-h-full w-full flex-grow items-center justify-center">
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
      <div className="w-36 h-36 fixed bg-red-200 top-2/4 left-1/4 blur rounded-full"></div>
      <div className="w-48 h-48 fixed bg-blue-200 duration-[8000ms] bottom-2/4 right-1/4 blur rounded-full"></div>
      <div className="w-36 h-36 fixed bg-orange-50 top-2/4 right-2 blur rounded-full"></div>
      <div className="w-56 h-56 fixed bg-red-100 top-2/4 left-2 blur rounded-full"></div>
      <div className="w-56 h-56 fixed bg-green-100 top-[50%] right-2 blur rounded-full"></div>
    </>
  );
}

export default Main;
