const Information = () => {
    return (
        <section className='flex max-lg:flex-col gap-10 w-full max-container'>
            <div className='w-[260px] h-auto'>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-6 pe-6 bg-[#40DDB6] text-lg text-white">
                            Project Details
                        </th>
                    </tr>
                    </thead>
                    <tbody className='bg-slate-100 pe-7 py-10'>
                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <span className='text-md'><strong>Client:</strong></span> <br/>
                            <span className='text-[#7D7D7D]'>Katherine	Coleman</span>
                        </th>
                    </tr>
                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <span className='text-md'><strong>Location:</strong></span> <br/>
                            <span className='text-[#7D7D7D]'>New York United States</span>
                        </th>
                    </tr>
                    <tr className=" dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <span className='text-md'><strong>Project Date:</strong></span> <br/>
                            <span className='text-[#7D7D7D]'>15 September ,2023</span>
                        </th>
                    </tr>
                    <tr className=" dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <span className='text-md'><strong>Website:</strong></span> <br/>
                            <span className='text-[#7D7D7D]'>http://whitecollar.com</span>
                        </th>
                    </tr>
                    </tbody>
                </table>
            </div>


            <div className='w-auto h-auto'>
                <span className='text-4xl'><strong>Project Information</strong></span>
                <p>
                    Distinctively re-engineer revolutionary meta service  and premium architectures incubate intuitive <br/>
                    opportunities and real-time potentialities. Appropriately communicates once one technology after <br/>
                    plug-and-play networks.
                    <br/><br/>
                    Quickly aggregates users and worldwides potentialities progressively  plagiarize resource leveling <br/>
                    e-commerce through resource leveling cores competencies dramatically mesh low risk high yield <br/>
                    alignments before transparent e-tailers.
                </p>
                <br/><br/>
                    <ul className='pl-[40px] list-disc'>
                        <li className='list-disc'>the printing and typesetting industry.</li><br/>
                        <li className='list-disc'>Lorem Ipsum has been the industry's standard</li><br/>
                        <li className='list-disc'>It has survived not only five centuries.</li>
                    </ul>
                <br/><br/>
                <p>
                    Compellingly embrace empowered e-business after user friendly intellectual capitals Interactively <br/>
                    actualize front-end processes with effectives convergenced Synergistically deliver performanced <br/>
                    based methods empowerment whereas distributed expertised efficiently enable enabled sources <br/>
                    and cost effective products completely ethical communities.
                </p>
                <br/><br/>
                <p className='pl-[20px]'>
                    01. the printing and typesetting industry. <br/>
                    02. Lorem Ipsum has been the industry's standard <br/>
                    03. It has survived not only five centuries.
                </p>
                <br/><br/>
                <p>
                    Compellingly embrace empowered e-business after user friendly intellectual capitals Interactively <br/>
                    actualize front-end processes with effectives convergenced Synergistically deliver performanced <br/>
                    based methods empowerment whereas distributed expertised efficiently enable enabled sources <br/>
                    and cost effective products completely ethical communities.
                </p>
            </div>
        </section>
    )
}

export default Information