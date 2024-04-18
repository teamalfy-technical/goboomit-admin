import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <section className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-4">
                        <div className="flex p-6 text-gray-900 space-x-6">
                            <div className="p-2">
                                <h6 className="text-sm font-semibold text-[#757575]">
                                    Total Payments Requested
                                </h6>
                                <p className="text-5xl font-bold mt-4">
                                    $25,000
                                </p>
                            </div>
                            <div className="p-2">
                                <h6 className="text-sm font-semibold text-[#757575]">
                                    Total Paid Today
                                </h6>
                                <p className="text-5xl font-bold mt-4">
                                    $25,000
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </section>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
