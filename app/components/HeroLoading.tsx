export default function HeroLoading() {
  return (
    <div className="h-dvh w-full overflow-hidden p-100 md:p-50 sm:p-30 animate-pulse flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-25 sm:gap-15">
          <div className="bg-dark-secondary w-[45px] h-[45px] rounded-full" />
          <div className="bg-dark-secondary w-[113.31px] h-[37.5px] rounded-10" />
        </div>
        <div className="bg-dark-secondary h-[45px] w-[250px] md:max-w-[175px] py-5 pl-15 pr-[45px] rounded-full sm:hidden" />
        <div className="bg-dark-secondary w-[45px] h-[45px] rounded-full hidden sm:flex" />
      </div>

      <div className="flex items-center justify-between sm:flex-col sm:items-start gap-100 md:gap-50 sm:gap-25 ">
        <div className="w-full flex flex-col gap-10">
          <div className="bg-dark-secondary h-[75px] w-[100%] max-w-[550px] rounded-10" />
          <div className="bg-dark-secondary h-[30px] w-[100%] max-w-[400px] rounded-10" />
        </div>
        <div className="flex items-center gap-10 flex-none">
          <div className="bg-dark-secondary h-[60px] w-[65px] rounded-10" />
          <div className="bg-dark-secondary h-[37.5px] w-[44px] rounded" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="bg-dark-secondary h-[45px] w-[283px] sm:w-[45px] rounded-full" />
        <div className="bg-dark-secondary h-[45px] w-[150px] rounded-full" />
      </div>
    </div>
  );
}
