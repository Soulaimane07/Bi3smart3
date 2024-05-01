export const CategorieSkeleton = () => {
    return (
        <div role="status" className="space-y-4 animate-pulse  ">
            <div className="rounded-full w-36 h-36 bg-blue-200 ">
            </div>
            <div className="w-full">
                <div className="h-1.5 mx-auto w-20 bg-blue-100 rounded-full"></div>
            </div>
        </div>
    )
}

export const ProductSkeleton = () => {
    return (
        
        <div role="status" className=" mb-6 pb-2 mx-2  rounded shadow animate-pulse ">
            <div className="flex items-center justify-center h-80 mb-4 bg-blue-350 rounded bg-blue-200">
            </div>
            <div className="px-2">
                <div className="h-2.5 bg-blue-100 rounded-full w-48 mb-4"></div>
                <div className="flex justify-between">
                    <div className="h-2 w-20 bg-blue-100 rounded-full mb-2.5"></div>
                    <div className="h-2 w-10 bg-blue-100 rounded-full mb-2.5"></div>
                </div>
            </div>
        </div>

    )
}

export const ProductSearchSkeleton = () => {
    return (
        <div role="status" className="flex space-x-4 animate-pulse items-start">
            <div className="w-60 h-24 bg-gray-300 rounded">
            </div>
            <div className="w-full mt-4 flex items-start justify-between">
                <div className="h-2.5 w-32 bg-gray-300 rounded-full"></div>
                <div className="h-2 w-10 bg-gray-300 rounded-full"></div>
            </div>
        </div>
    )
}





export const CategorieSkeletonList = () => {
    let list = [1,2,3,4,5,6,7]

    return (
        list.map((item,key)=>(
            <CategorieSkeleton key={key} />
        ))
    )
}

export const ProductSkeletonList = () => {
    let list = [1,2,3,4,5,6,7,8]

    return (
        list.map((item,key)=>(
            <ProductSkeleton key={key} />
        ))
    )
}

export const ProductsSearchSkeletonList = () => {
    let list = [1,2,3]

    return (
        list.map((item,key)=>(
            <ProductSearchSkeleton key={key} />
        ))
    )
}