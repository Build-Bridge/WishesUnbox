import { TbSocial } from "react-icons/tb";
const Companies = () => {
  return (
    <div className="flex justify-center -mt-28">
      <div className="inline-flex flex-shrink-0 justify-center bg-transparent rounded-full ">
        <div className=" border-gray-200">
          <div className=" p-4 bg-white bg[#F8FAFC] bg-opacity-90 -z-[100] rounded-full md:p-8">
            <dl className="grid gap-8 p-4 mx-auto text-gray-900 grid-cols-3 sm:p-8">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 sm:text-3xl font-extrabold">73M+</dt>
                <dd className="text-gray-500 text-nowrap">
                  Archived Wishes
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 sm:text-3xl font-extrabold">100M+</dt>
                <dd className="text-gray-500 text-nowrap">Users</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 sm:text-3xl font-extrabold">4M+</dt>
                <dd className="text-gray-500 text-nowrap">
                  Organizations
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
