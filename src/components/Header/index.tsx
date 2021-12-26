import GoogleNearbyIcon from "@/icons/logo"
export default function Header() {
    return (
        <>
            <div className="w-[68px] h-screen hidden sm:block fixed m-0 border-r bg-skin-block-bg">
                <div className="flex flex-col h-full overflow-auto no-scrollbar">
                    <div className="min-h-[78px] h-[78px] flex items-center justify-center">
                        <GoogleNearbyIcon/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}