import Info from "../Info";

export default function Body() {
  return (<>
    <div className="px-0 md:px-4 max-w-[1012px] mx-auto mt-4 flex-auto">
      <div className="hidden float-left w-1/4 lg:block">
        <Info/>
      </div>
      <div className="float-right w-full pl-0 lg:w-3/4 lg:pl-5">
        right
      </div>
    </div>
  </>)
}