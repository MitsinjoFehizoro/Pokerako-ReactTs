import logo from '../../assets/logo/logo.png'
import logo_long from '../../assets/logo/logo-long.png'

export const LogoCol = () => {
    return (
        <div className="flex flex-col items-center">
            <img src={logo} className="w-20" alt="" />
            <img src={logo_long} className="h-14 mt-[-1em]" />
        </div>
    )
}

export const LogoRow = () => {
    return (
        <div className="flex items-center">
            <img src={logo} className="w-20" alt="" />
            <img src={logo_long} className="h-12" />
        </div>
    )
}