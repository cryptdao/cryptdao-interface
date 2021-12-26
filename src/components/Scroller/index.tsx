import GoogleNearbyIcon from "@/icons/logo"
import TimelineIcon from "@/icons/timeline"
export default function Scroller() {

    return (
        <>
        <div className="w-[68px] h-screen hidden sm:block fixed m-0 border-r bg-skin-block-bg">
            <div className="flex flex-col h-full overflow-auto no-scrollbar">
                <div className="min-h-[78px] h-[78px] flex items-center justify-center">
                    <GoogleNearbyIcon />
                    </div>
                <div className="flex flex-col h-[calc(100%-78px)] items-center space-y-2 pt-2">
                    <div className="relative flex items-center justify-center w-full">
                        <TimelineIcon />          
                    </div>    
                </div>

            </div>
        </div>
        </>
    )
}