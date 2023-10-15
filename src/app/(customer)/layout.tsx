import { IChildrenNode } from "@/types"

function CustomerLayout({children}: IChildrenNode) {
    return (
        <div>
            <h1>Customer Layout</h1>
            {children}
        </div>
    )
}

export default CustomerLayout
