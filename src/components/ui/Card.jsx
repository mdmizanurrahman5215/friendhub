export default function Card({data}) {
  const {name, picture, status, tags, days_since_contact
}=data
  console.log(data);
  

  return (
   <>
<div className=" shadow-md rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer hover:shadow-lg transition">
  
    <div className="w-40 h-40 bg-red-300 rounded-full">
       <img src={picture} alt={name} className="w-full h-full object-cover rounded-full overflow-hidden" />
    </div>
     <h3 className="text-2xl font-semibold">{name}</h3>
     <p className="text-gray-600">{days_since_contact}d ago</p>
     <div>
      {
        tags.map((tag, index) => <span key={index} className="bg-blue-100 text-blue-800 text-x font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{tag}</span>)  
      }
     </div>
     <p className={`text-lg font-bold px-4 py-1 mt-2 rounded-md ${status === 'almost due' ? 'text-white bg-[#EFAD44] ' : status === "on-track" ? "text-white bg-[#244D3F]" : 'text-white bg-red-500'}`}>{status}</p>
     

</div>
   </>
  );
}