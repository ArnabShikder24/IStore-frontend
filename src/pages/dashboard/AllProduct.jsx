import React from "react";

function AllProduct() {
  return (
    <div>
       <div class="container">
        <section class="items-center lg:flex bg-white font-poppins dark:bg-gray-800 ">
            <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <a href="customer.php" class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"> Add Customer
                    </a>
                </button>
                <div class="pt-4 rounded shadow bg-stone-100 dark:bg-gray-900">
                    <div class="flex flex-wrap items-center justify-between px-6 pb-4 border-b dark:border-gray-700">
                        <h2 class="mb-4 text-xl font-bold md:mb-0 dark:text-gray-400">List of Registered Customers</h2>
                    </div>
                    <div class="p-4 overflow-x-auto">
                        <table class="w-full table-auto">
                            <thead>
                                <tr class="text-sm text-left text-gray-500 dark:text-gray-400">
                                    <th class="px-6 pb-3 text-lg text-purple-600">ID</th>
                                    <th class="px-6 pb-3 text-lg text-purple-600">Name</th>
                                    <th class="px-6 pb-3 text-lg text-purple-600">Email</th>
                                    <th class="px-6 pb-3 text-lg text-purple-600">Phone</th>
                                    <th class="px-6 pb-3 text-lg text-purple-600">Address</th>
                                    <th class="px-6 pb-3 text-lg text-purple-600">Password</th>
                                    <th class="px-6 pb-3 text-lg text-purple-600">Operations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                $sql = "SELECT * FROM `customers`";
                                $result = mysqli_query($con, $sql);
                                if ($result) {
                                    while ($row = mysqli_fetch_assoc($result)) {
                                        $id = $row['id'];
                                        $name = $row['customer_name'];
                                        $email = $row['email'];
                                        $phone = $row['phone_no'];
                                        $address = $row['address'];
                                        $password = $row['password'];
                                        echo '<tr class="text-sm bg-gray-400 dark:text-gray-400 dark:bg-gray-800">
                                        <td class="px-6 py-5 font-medium ">' . $id . '</td>
                                        <td class="px-6 py-5 font-medium ">' . $name . '</td>
                                        <td class="px-6 py-5 font-medium ">' . $email . '</td>
                                        <td class="px-6 py-5 font-medium">' . $phone . '</td>
                                        <td class="px-6 py-5 font-medium">' . $address . '</td>
                                        <td class="px-6 py-5 font-medium">' . $password . '</td>
                                        <td class="flex items-center px-6 py-5 ">

                                        <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                                        <a href="update.php?updateId=' . $id . '">Update</a>
                                        </button>

                                        <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                        <a href="delete.php?deleteId=' . $id . '">Delete</a>
                                        </button>

                                        </td>
                                    </tr>';
                                    }
                                }
                                ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </div>
  );
}

export default AllProduct;
