const Team = ({teamList}) => {
  return (
    <div className='customContainer my-[100px]'>
      <div>
        <h3 className='font-exo-pro text-[27px] font-semibold text-primary '>Our Team Member</h3>
        <h2 className='font-exo-pro text-[38px] font-bold capitalize mt-3'>Check our awesome team members</h2>
      </div>

      <div className='grid grid-cols-1 gap-10 bg-white md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2'></div>
    </div>
  );
};

export default Team;
