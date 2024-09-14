import Image from "next/image";

export default function Newsletter() {
    return (
        <section className="py-12 bg-gray-50 relative overflow-hidden z-10">
            <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
                <div className="bg-white shadow-sm rounded-[10px] py-9 px-4 sm:px-8 xl:px-10">
                    <div className="flex flex-wrap items-center justify-between gap-10">
                        <div className="max-w-[455px] w-full">
                            <h3 className="font-semibold text-2xl text-black mb-3">
                                Subscribe to Newsletter
                            </h3>
                            <p>
                                Get email notification when we publish new articles
                            </p>
                        </div>
                        <div className="max-w-[584px] w-full">
                            <form>
                                <div className="flex items-center gap-5">
                                    <div className="max-w-[350px] w-full">
                                        <input id="email" type="email" name="email" 
                                            placeholder="Enter your email" 
                                            className={`
                                                rounded-md border border-gray-300 bg-white
                                                placeholder:text-gray-500 w-full py-3 px-5 outline-none
                                                focus:shadow-input focus:ring-2 focus:ring-black 
                                                focus:border-transparent
                                            `}
                                            required
                                        />
                                    </div>
                                    <a href="/signin" className="text-sm font-semibold leading-6 text-black">
                                    <div className='flex align-middle justify-center md:justify-start'>
                                    <button className='text-sm font-semibold text-white py-2 px-2 lg:px-2 navbutton mr-2'>
                                        Subscribe <span aria-hidden="true">&rarr;</span>
                                    </button>
                                    </div>
                                </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}