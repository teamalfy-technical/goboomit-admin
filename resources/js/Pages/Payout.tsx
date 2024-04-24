import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import AmountCard from "@/Components/Cards/AmountCard";
import Pagination from "@/Components/Pagination/Pagination";

export default function Payout({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Payouts" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <section className="overflow-hidden sm:rounded-lg mb-4">
                        <div className="flex p-6 text-gray-900 space-x-6">
                            <AmountCard
                                title="Total Amount Requested"
                                amount={25000}
                            />
                            <AmountCard
                                title="Total Paid Today"
                                amount={2000}
                            />
                        </div>
                    </section>

                    <section className="bg-white overflow-hidden sm:rounded-lg">
                        <div className="flex items-center justify-start mb-2 w-full px-6 py-2">
                            <div className="">
                                <label
                                    className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    htmlFor="inline-full-name"
                                >
                                    Filter:
                                </label>
                            </div>
                            <div className="">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight
      focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="date"
                                    value="Jane Doe"
                                />
                            </div>
                        </div>

                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        <thead className="border-b bg-gray-100">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="text-left py-3 px-3 text-sm uppercase"
                                                >
                                                    Influncer
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-left py-3 px-3 text-sm uppercase"
                                                >
                                                    Bank
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-left py-3 px-3 text-sm uppercase"
                                                >
                                                    Total Amount
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-left py-3 px-3 text-sm uppercase"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-left py-3 px-3 text-sm uppercase"
                                                >
                                                    Date
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b-[2px] border-t-[2px] transition duration-300 ease-in-out cursor-pointer hover:bg-light-ash border-light-ash">
                                                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium">
                                                    ele.shop_name
                                                </td>
                                                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium">
                                                    ele.staffs_count
                                                </td>
                                                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium">
                                                    -
                                                </td>
                                                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium">
                                                    ele.services_count
                                                </td>
                                                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium">
                                                    -
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <Pagination />
                    </section>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
