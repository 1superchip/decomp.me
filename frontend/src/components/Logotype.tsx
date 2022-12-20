import Frog from "./Nav/frog.svg"

export default function Logotype() {
    return <div className="inline-flex items-center space-x-2">
        <Frog className="h-7 w-7" />
        <span className="text-xl font-semibold leading-6 tracking-tight">decomp.me</span>
    </div>
}
