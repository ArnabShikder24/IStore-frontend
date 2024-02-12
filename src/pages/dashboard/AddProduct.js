import DashLayout from "@/components/DashLayout";

export default function AddProduct() {
    return (
        <div>
            <form className="max-w-sm mx-auto">
                <h1 className="mb-16 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
                Add Your{" "}
                <span className="text-blue-600 dark:text-blue-500">Products</span>
                </h1>
                <div className="mb-5">
                <label
                    for="product_title"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Title :
                </label>
                <input
                    type="text"
                    id="product_title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <div className="mb-5">
                <label
                    for="product_price"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Price :
                </label>
                <input
                    type="number"
                    id="product_price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <div className="mb-5">
                <label
                    for="product_quantity"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Quantity :
                </label>
                <input
                    type="number"
                    id="product_quantity"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <div className="mb-5">
                <label
                    for="product_image"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Image :
                </label>
                <input
                    type="text"
                    id="product_image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <div className="mb-5">
                <label
                    for="product_category"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Category :
                </label>
                <input
                    type="text"
                    id="product_category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <div className="mb-5">
                <label
                    for="product_color"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Color :
                </label>
                <input
                    type="text"
                    id="product_color"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <div className="mb-5">
                <label
                    for="product_description"
                    className="m-4 flex justify-start items-start text-base font-medium text-gray-900 dark:text-white"
                >
                    Description :
                </label>
                <input
                    type="text"
                    id="product_description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                </div>
                <input className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit" value="Submit" />
            </form>
            </div>
    );
}

AddProduct.getLayout = function getLayout(page) {
    return <DashLayout>{page}</DashLayout>;
};