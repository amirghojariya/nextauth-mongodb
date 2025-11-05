

    export default async function Page({ params }: any) {
        const resolvedParams = await params
        return (

            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1>Profile page</h1>
                <h2 className="p-3 bg-green-500 rounded text-black ">{resolvedParams.id}</h2>
            </div>
        )
    }


