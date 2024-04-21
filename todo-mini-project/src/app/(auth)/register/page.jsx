import Image from "next/image";
import register from '../../../../public/register.png'
import office from '../../../../public/office.png'
import Link from "next/link";

const RegisterPage = () => {
    return (
        <main className="w-full  flex m-auto ">
            <section className="grid grid-cols-2 ">
                <div className="bg-white  relative m-10 ">
                    <div className="flex items-start gap-3 p-5 border-b rounded-t">
                        <Image src={office} width={25} alt="no image"/>
                        <h1 className="text-xl font-semibold">
                            My Office
                        </h1>               
                    </div>
                    <div className="p-6 space-y-6">
                        <form action="#">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="product-name" className="text-sm font-medium text-gray-900 block mb-2">Full Name</label>
                                    <input type="text" name="product-name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter your name..." required="" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="category" className="text-sm font-medium text-gray-900 block mb-2">Last Name</label>
                                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter your name..." required="" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="brand" className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                                    <input type="email" name="brand" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Info@gmail.com" required="" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="price" className="text-sm font-medium text-gray-900 block mb-2">Mobile No</label>
                                    <input type="text" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="+855 12345" required="" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="brand" className="text-sm font-medium text-gray-900 block mb-2">Password</label>
                                    <input type="password" name="brand" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="xxxxxxxxx" required="" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label for="price" className="text-sm font-medium text-gray-900 block mb-2">Confirm Password</label>
                                    <input type="password" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="xxxxxxx" required="" />
                                </div>
                              
                            </div>
                        </form>
                    </div>

                    <div className="p-6 border-t border-gray-200 rounded-b">
                       <Link href="/login"> <button className="text-white bg-[#306BFF] hover:bg-[#5276d2] focus:ring-4 focus:ring-cyan-200 font-medium rounded-xl text-sm px-5 py-2.5 text-center" type="submit">Sign up</button></Link>
                    </div>
                </div>

                {/* display image */}
                <div className="mt-[100px] flex m-auto">
                    <Image src={register} width={400} height={390} alt="no image"/>

                </div>

            </section>

        </main>
    )
}
export default RegisterPage;