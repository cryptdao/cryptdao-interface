import GoogleNearbyIcon from "@/icons/logo"
import QuestionCircleIcon from "@/icons/question"
import TimelineIcon from "@/icons/timeline"
export default function Scroller() {

    return (
        <>
        <div className="w-[68px] h-screen hidden sm:block fixed m-0 border-r bg-skin-block-bg">
            <div className="flex flex-col h-full overscroll-x-none">
                <div className="min-h-[78px] h-[78px] flex items-center justify-center">
                    <GoogleNearbyIcon />
                    </div>
                <div className="flex flex-col h-[calc(100%-78px)] items-center space-y-2 pt-2">
                    <div className="relative flex items-center justify-center w-full">
                        <TimelineIcon />          
                    </div>    
                </div>
                <div className="flex flex-col items-center space-y-2 justify-center !mb-2 !mt-auto py-2">
                        <QuestionCircleIcon/>    
                </div>   
            </div>
        </div>
        </>
    )
}