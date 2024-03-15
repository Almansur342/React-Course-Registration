const Course = ({ course, handleSelect }) => {
  const { name, description, photo, price, credit } = course;
  return (
    <div className="mt-10">
      <div className="card bg-base-100 h-[500px] shadow-xl p-3">
        <figure><img src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-lg">{name}</h2>
          <p className="my-2 line-clamp-3">{description}</p>
          <div className="flex">

            <p className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

              Price: {price}</p>
            <p className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>

              Credit: {credit}</p>
          </div>
          <div className="card-actions mt-2">
            <button onClick={() =>handleSelect(course)} className="btn btn-primary w-full">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;