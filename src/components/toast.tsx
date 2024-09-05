import { FunctionComponent } from "react";
import { useToast } from "../hooks/use-toast";
import '../sass/components/toast.scss'

export const Toast: FunctionComponent = () => {
    const { toasts } = useToast()
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 w-full flex flex-col items-center justify-center">
            {
                toasts.map((toast, index) => {
                    let icon = '';
                    if (toast.type === 'success') {
                        icon = 'circle-check'
                    } else if (toast.type === 'warning') {
                        icon = 'triangle-exclamation'
                    } else if (toast.type === 'info') {
                        icon = 'circle-info'
                    } else {
                        icon = 'circle-exclamation'
                    }

                    return (
                        <div key={index} className={`${toast.type} relative mb-2 min-w-80 py-2 px-2 flex items-center bg-white rounded-sm border-l-8`}>
                            <div className="icon text-xl pl-2 pr-4">
                                <i className={`fa fa-${icon}`}></i>
                            </div>
                            <div>
                                <h6 className="text-tertiary/90 font-semibold capitalize">{toast.type}</h6>
                                <p className="text-xs mt-[-.2em] text-tertiary/80">{toast.toast}</p>
                            </div>
                            <div className="absolute top-2 right-3 text-sm">
                                <i className="fa fa-xmark"></i>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}